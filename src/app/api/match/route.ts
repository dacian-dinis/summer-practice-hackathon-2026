import type { Group, User } from "@prisma/client";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { todayDate } from "@/lib/today";

const emptyBodySchema = z.object({}).strict();

function hasNonEmptyBio(user: Pick<User, "bio">): boolean {
  return typeof user.bio === "string" && user.bio.trim().length > 0;
}

function compareUsers(a: Pick<User, "bio" | "createdAt">, b: Pick<User, "bio" | "createdAt">): number {
  const aHasBio = hasNonEmptyBio(a);
  const bHasBio = hasNonEmptyBio(b);

  if (aHasBio !== bHasBio) {
    return aHasBio ? -1 : 1;
  }

  return a.createdAt.getTime() - b.createdAt.getTime();
}

function pickCaptain<T extends Pick<User, "id" | "bio">>(users: T[]): T {
  const usersWithBio = users.filter(hasNonEmptyBio);
  const captainPool = usersWithBio.length > 0 ? usersWithBio : users;

  return captainPool[Math.floor(Math.random() * captainPool.length)];
}

export async function POST(request: Request): Promise<Response> {
  try {
    const rawBody = await request.text();
    const json = rawBody.trim().length === 0 ? {} : JSON.parse(rawBody);
    const parsed = emptyBodySchema.safeParse(json);

    if (!parsed.success) {
      return Response.json(
        { created: [], message: "Invalid request body" },
        { status: 400 },
      );
    }

    const today = todayDate();
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return Response.json(
        { created: [], message: "No user available" },
        { status: 500 },
      );
    }

    const [sports, currentUserSports] = await Promise.all([
      prisma.sport.findMany(),
      prisma.userSport.findMany({
        where: { userId: currentUser.id },
        select: { sportId: true },
      }),
    ]);

    const preferredSportIds = new Set(
      currentUserSports.map((userSport) => userSport.sportId),
    );

    const orderedSports = sports.sort((a, b) => {
      const aPreferred = preferredSportIds.has(a.id);
      const bPreferred = preferredSportIds.has(b.id);

      if (aPreferred !== bPreferred) {
        return aPreferred ? -1 : 1;
      }

      return a.name.localeCompare(b.name);
    });

    const created: Group[] = [];

    for (const sport of orderedSports) {
      const [availabilities, existingGroup] = await Promise.all([
        prisma.availability.findMany({
          where: {
            date: today,
            sportId: sport.id,
            status: "YES",
          },
          include: {
            user: true,
          },
        }),
        prisma.group.findFirst({
          where: {
            sportId: sport.id,
            date: today,
            status: {
              in: ["FORMING", "CONFIRMED"],
            },
          },
        }),
      ]);

      if (existingGroup || availabilities.length < sport.minGroup) {
        continue;
      }

      const users = availabilities.map((availability) => availability.user);
      const captain = pickCaptain(users);
      const selectedUsers = users.sort(compareUsers).slice(0, sport.maxGroup);

      if (!selectedUsers.some((user) => user.id === captain.id)) {
        selectedUsers[selectedUsers.length - 1] = captain;
      }

      const createdGroup = await prisma.$transaction(async (tx) => {
        const groupAlreadyExists = await tx.group.findFirst({
          where: {
            sportId: sport.id,
            date: today,
            status: {
              in: ["FORMING", "CONFIRMED"],
            },
          },
        });

        if (groupAlreadyExists) {
          return null;
        }

        const group = await tx.group.create({
          data: {
            sportId: sport.id,
            date: today,
            captainId: captain.id,
            status: "FORMING",
          },
        });

        await tx.groupMember.createMany({
          data: selectedUsers.map((user) => ({
            groupId: group.id,
            userId: user.id,
            confirmed: user.id === captain.id,
          })),
        });

        return group;
      });

      if (createdGroup) {
        created.push(createdGroup);
      }
    }

    return Response.json(
      created.length > 0
        ? { created }
        : { created, message: "No groups created" },
    );
  } catch {
    return Response.json(
      { created: [], message: "Unable to create matches" },
      { status: 500 },
    );
  }
}
