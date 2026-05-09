import type { Group, User } from "@/generated/prisma";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { todayDate } from "@/lib/today";

const emptyBodySchema = z.object({}).strict();

function hasNonEmptyBio(user: Pick<User, "bio">): boolean {
  return typeof user.bio === "string" && user.bio.trim().length > 0;
}

function compareBySkillDescAndCreatedAt(
  a: Pick<User, "skill" | "createdAt">,
  b: Pick<User, "skill" | "createdAt">,
): number {
  if (a.skill !== b.skill) {
    return b.skill - a.skill;
  }

  return a.createdAt.getTime() - b.createdAt.getTime();
}

function getSkillMedian(users: Pick<User, "skill">[]): number {
  const skills = [...users]
    .map((user) => user.skill)
    .sort((a, b) => a - b);
  const middleIndex = Math.floor(skills.length / 2);

  if (skills.length % 2 === 1) {
    return skills[middleIndex];
  }

  return (skills[middleIndex - 1] + skills[middleIndex]) / 2;
}

function compareByCoreBandPriority(
  median: number,
): (
  a: Pick<User, "bio" | "skill" | "createdAt">,
  b: Pick<User, "bio" | "skill" | "createdAt">,
) => number {
  return (a, b) => {
    const aHasBio = hasNonEmptyBio(a);
    const bHasBio = hasNonEmptyBio(b);

    if (aHasBio !== bHasBio) {
      return aHasBio ? -1 : 1;
    }

    const skillDistanceDiff =
      Math.abs(a.skill - median) - Math.abs(b.skill - median);

    if (skillDistanceDiff !== 0) {
      return skillDistanceDiff;
    }

    return a.createdAt.getTime() - b.createdAt.getTime();
  };
}

function pickHighestSkillCaptain<T extends Pick<User, "bio" | "skill" | "createdAt">>(
  users: T[],
  preferBio: boolean,
): T {
  const captainPool = preferBio
    ? users.filter(hasNonEmptyBio)
    : users;
  const effectivePool = captainPool.length > 0 ? captainPool : users;

  return [...effectivePool].sort(compareBySkillDescAndCreatedAt)[0];
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
      const median = getSkillMedian(users);
      const coreBandUsers = users.filter(
        (user) => Math.abs(user.skill - median) <= 1,
      );

      if (coreBandUsers.length < sport.minGroup) {
        continue;
      }

      const selectedPrimaryUsers = [...coreBandUsers]
        .sort(compareByCoreBandPriority(median))
        .slice(0, sport.maxGroup);
      const primaryCaptain = pickHighestSkillCaptain(
        selectedPrimaryUsers,
        true,
      );

      const remainingUsers = users.filter(
        (user) =>
          !selectedPrimaryUsers.some((selectedUser) => selectedUser.id === user.id),
      );
      const pendingGroups: Array<{
        captain: User;
        users: User[];
      }> = [
        {
          captain: primaryCaptain,
          users: selectedPrimaryUsers,
        },
      ];

      if (remainingUsers.length >= sport.minGroup) {
        const remainingMedian = getSkillMedian(remainingUsers);
        const selectedRemainingUsers = [...remainingUsers]
          .sort(compareByCoreBandPriority(remainingMedian))
          .slice(0, sport.maxGroup);

        pendingGroups.push({
          captain: pickHighestSkillCaptain(selectedRemainingUsers, false),
          users: selectedRemainingUsers,
        });
      }

      for (const [index, pendingGroup] of pendingGroups.entries()) {
        const createdGroup = await prisma.$transaction(async (tx) => {
          const existingGroupCount = await tx.group.count({
            where: {
              sportId: sport.id,
              date: today,
              status: {
                in: ["FORMING", "CONFIRMED"],
              },
            },
          });

          if (existingGroupCount !== index) {
            return null;
          }

          const group = await tx.group.create({
            data: {
              sportId: sport.id,
              date: today,
              captainId: pendingGroup.captain.id,
              status: "FORMING",
            },
          });

          await tx.groupMember.createMany({
            data: pendingGroup.users.map((user) => ({
              groupId: group.id,
              userId: user.id,
              confirmed: user.id === pendingGroup.captain.id,
            })),
          });

          return group;
        });

        if (createdGroup) {
          created.push(createdGroup);
        } else {
          break;
        }
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
