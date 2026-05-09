import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import { isCitySlug } from "@/lib/cities";
import { prisma } from "@/lib/prisma";
import { todayDate } from "@/lib/today";

const manualEventSchema = z.object({
  sportId: z.string().min(1),
  venueId: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  time: z.string().regex(/^\d{2}:\d{2}$/),
  description: z
    .string()
    .trim()
    .max(200)
    .optional()
    .transform((value) => (value && value.length > 0 ? value : undefined)),
  maxParticipants: z.number().int().positive(),
});

function addDays(date: string, days: number): string {
  const parsed = new Date(`${date}T00:00:00.000Z`);
  parsed.setUTCDate(parsed.getUTCDate() + days);
  return parsed.toISOString().slice(0, 10);
}

function isAllowedDate(date: string): boolean {
  const minDate = todayDate();
  const maxDate = addDays(minDate, 6);

  return date >= minDate && date <= maxDate;
}

function isAllowedTime(time: string): boolean {
  const [hoursRaw, minutesRaw] = time.split(":");
  const hours = Number(hoursRaw);
  const minutes = Number(minutesRaw);

  if (!Number.isInteger(hours) || !Number.isInteger(minutes)) {
    return false;
  }

  const totalMinutes = hours * 60 + minutes;

  return totalMinutes >= 18 * 60 && totalMinutes <= 22 * 60;
}

function createStartsAt(date: string, time: string): Date {
  return new Date(`${date}T${time}:00`);
}

export async function POST(request: Request): Promise<NextResponse> {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsedBody = manualEventSchema.safeParse(json);

  if (!parsedBody.success) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!isAllowedDate(parsedBody.data.date)) {
    return NextResponse.json({ error: "Date must be within the next 7 days" }, { status: 400 });
  }

  if (!isAllowedTime(parsedBody.data.time)) {
    return NextResponse.json({ error: "Time must be between 18:00 and 22:00" }, { status: 400 });
  }

  const [sport, venue] = await Promise.all([
    prisma.sport.findUnique({
      where: { id: parsedBody.data.sportId },
      select: {
        id: true,
        minGroup: true,
        maxGroup: true,
      },
    }),
    prisma.venue.findUnique({
      where: { id: parsedBody.data.venueId },
      select: {
        id: true,
        city: true,
        venueSports: {
          where: {
            sportId: parsedBody.data.sportId,
          },
          select: {
            sportId: true,
          },
        },
      },
    }),
  ]);

  if (!sport) {
    return NextResponse.json({ error: "Sport not found" }, { status: 404 });
  }

  if (
    parsedBody.data.maxParticipants < sport.minGroup ||
    parsedBody.data.maxParticipants > sport.maxGroup
  ) {
    return NextResponse.json(
      {
        error: `Max participants must be between ${sport.minGroup} and ${sport.maxGroup}`,
      },
      { status: 400 },
    );
  }

  if (!venue || !isCitySlug(venue.city)) {
    return NextResponse.json({ error: "Venue not found" }, { status: 400 });
  }

  if (venue.venueSports.length === 0) {
    return NextResponse.json({ error: "Venue does not support this sport" }, { status: 400 });
  }

  const startsAt = createStartsAt(parsedBody.data.date, parsedBody.data.time);

  const created = await prisma.$transaction(async (tx) => {
    const group = await tx.group.create({
      data: {
        sportId: sport.id,
        date: parsedBody.data.date,
        captainId: currentUser.id,
        status: "CONFIRMED",
      },
      select: {
        id: true,
      },
    });

    await tx.groupMember.create({
      data: {
        groupId: group.id,
        userId: currentUser.id,
        confirmed: true,
      },
    });

    const event = await tx.event.create({
      data: {
        groupId: group.id,
        venueId: venue.id,
        startsAt,
        weatherSummary: null,
      },
      select: {
        id: true,
      },
    });

    return {
      groupId: group.id,
      eventId: event.id,
    };
  });

  revalidatePath("/");
  revalidatePath("/groups");
  revalidatePath(`/groups/${created.groupId}`);
  revalidatePath("/map");

  return NextResponse.json(created, { status: 201 });
}
