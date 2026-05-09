import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { eventVoteBodySchema, parsePendingPoll, pickWinningVenueId } from "@/lib/event-poll";
import { notify } from "@/lib/notifications";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: {
    id: string;
  };
};

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

  const parsedBody = eventVoteBodySchema.safeParse(json);

  if (!parsedBody.success) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const event = await prisma.event.findUnique({
    where: { id: params.id },
    select: {
      id: true,
      groupId: true,
      venueId: true,
      weatherSummary: true,
      group: {
        select: {
          members: {
            select: {
              userId: true,
            },
          },
        },
      },
    },
  });

  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  const isMember = event.group.members.some((member) => member.userId === currentUser.id);

  if (!isMember) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const pendingPoll = parsePendingPoll(event.weatherSummary);

  if (!pendingPoll) {
    return NextResponse.json(
      {
        votes: 0,
        total: event.group.members.length,
        winner: null,
        error: "Voting is closed",
      },
      { status: 409 },
    );
  }

  if (!pendingPoll.candidateVenueIds.includes(parsedBody.data.venueId)) {
    return NextResponse.json({ error: "Unknown venue candidate" }, { status: 400 });
  }

  await prisma.vote.upsert({
    where: {
      eventId_userId: {
        eventId: event.id,
        userId: currentUser.id,
      },
    },
    update: {
      venueId: parsedBody.data.venueId,
    },
    create: {
      eventId: event.id,
      userId: currentUser.id,
      venueId: parsedBody.data.venueId,
    },
  });

  const votes = await prisma.vote.findMany({
    where: {
      eventId: event.id,
    },
    select: {
      venueId: true,
    },
  });

  const totalMembers = event.group.members.length;
  const winnerVenueId = pickWinningVenueId({
    candidateVenueIds: pendingPoll.candidateVenueIds,
    totalMembers,
    votes,
  });

  if (!winnerVenueId) {
    revalidatePath(`/groups/${event.groupId}`);

    return NextResponse.json({
      votes: votes.length,
      total: totalMembers,
    });
  }

  const winnerVenue = await prisma.venue.findUnique({
    where: {
      id: winnerVenueId,
    },
    select: {
      id: true,
      name: true,
    },
  });

  if (!winnerVenue) {
    return NextResponse.json({ error: "Winner venue not found" }, { status: 500 });
  }

  await prisma.event.update({
    where: {
      id: event.id,
    },
    data: {
      venueId: winnerVenue.id,
      weatherSummary: null,
    },
  });

  await notify(
    event.group.members.map((member) => ({
      userId: member.userId,
      kind: "EVENT_CREATED" as const,
      title: "Event locked in",
      body: `${winnerVenue.name} won the vote. Calendar invite is ready on the group page.`,
      link: `/groups/${event.groupId}`,
    })),
  );

  revalidatePath("/groups");
  revalidatePath(`/groups/${event.groupId}`);

  return NextResponse.json({
    votes: votes.length,
    total: totalMembers,
    winner: {
      venueId: winnerVenue.id,
      name: winnerVenue.name,
    },
  });
}
