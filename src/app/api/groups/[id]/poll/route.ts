import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { groupPollBodySchema, serializePendingPoll } from "@/lib/event-poll";
import { prisma } from "@/lib/prisma";
import { todayDate } from "@/lib/today";

type RouteContext = {
  params: {
    id: string;
  };
};

function createStartsAt(suggestedTime: string): Date {
  return new Date(`${todayDate()}T${suggestedTime}:00`);
}

export async function POST(
  request: Request,
  { params }: RouteContext,
): Promise<NextResponse> {
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

  const parsedBody = groupPollBodySchema.safeParse(json);

  if (!parsedBody.success) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const group = await prisma.group.findUnique({
    where: { id: params.id },
    select: {
      id: true,
      captainId: true,
      event: {
        select: {
          id: true,
        },
      },
    },
  });

  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  if (group.captainId !== currentUser.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (group.event) {
    return NextResponse.json({ error: "Group already has an event" }, { status: 409 });
  }

  const venues = await prisma.venue.findMany({
    where: {
      id: {
        in: parsedBody.data.venueIds,
      },
    },
    select: {
      id: true,
      name: true,
    },
  });

  if (venues.length !== 3) {
    return NextResponse.json({ error: "Some venues were not found" }, { status: 400 });
  }

  const venueById = new Map(venues.map((venue) => [venue.id, venue]));
  const candidates = parsedBody.data.venueIds.map((venueId) => {
    const venue = venueById.get(venueId);

    if (!venue) {
      throw new Error("Venue lookup was incomplete");
    }

    return {
      venueId: venue.id,
      name: venue.name,
    };
  });

  const event = await prisma.$transaction(async (tx) => {
    const createdEvent = await tx.event.create({
      data: {
        groupId: group.id,
        venueId: parsedBody.data.venueIds[0],
        startsAt: createStartsAt(parsedBody.data.suggestedTime),
        weatherSummary: serializePendingPoll({
          candidateVenueIds: parsedBody.data.venueIds,
          draftMessage: parsedBody.data.draftMessage,
        }),
      },
      select: {
        id: true,
      },
    });

    await tx.message.create({
      data: {
        groupId: group.id,
        userId: currentUser.id,
        text: `📊 Poll: ${parsedBody.data.draftMessage}`,
      },
    });

    return createdEvent;
  });

  revalidatePath("/groups");
  revalidatePath(`/groups/${params.id}`);

  return NextResponse.json(
    {
      eventId: event.id,
      candidates,
    },
    { status: 201 },
  );
}
