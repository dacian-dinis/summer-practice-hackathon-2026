import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { buildVoteTallies, parsePendingPoll } from "@/lib/event-poll";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: {
    id: string;
  };
};

export async function GET(
  _request: Request,
  { params }: RouteContext,
): Promise<NextResponse> {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const event = await prisma.event.findUnique({
    where: { id: params.id },
    select: {
      id: true,
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
      votes: {
        select: {
          venueId: true,
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
    return NextResponse.json({
      votes: [],
      total: event.group.members.length,
      winner: event.venueId,
    });
  }

  return NextResponse.json({
    votes: buildVoteTallies(pendingPoll.candidateVenueIds, event.votes),
    total: event.group.members.length,
  });
}
