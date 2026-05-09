import { CheckCircle2 } from "lucide-react";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import { CaptainCopilot } from "@/components/captain-copilot";
import { Avatar } from "@/components/avatar";
import { ConfirmGroupButton } from "@/components/confirm-group-button";
import { EventCard } from "@/components/event-card";
import { GroupChat } from "@/components/group-chat";
import { PollVote } from "@/components/poll-vote";
import { ShareGroupButton } from "@/components/share-group-button";
import { TeamBalance } from "@/components/team-balance";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurrentUser } from "@/lib/auth";
import { parsePendingPoll } from "@/lib/event-poll";
import { prisma } from "@/lib/prisma";

const SPORT_EMOJI: Record<string, string> = {
  Basketball: "🏀",
  Football: "⚽",
  Padel: "🎾",
  Tennis: "🎾",
  Volleyball: "🏐",
};

function getStatusClasses(status: string): string {
  if (status === "CONFIRMED") {
    return "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300";
  }

  if (status === "DONE") {
    return "bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200";
  }

  return "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300";
}

function formatGroupDate(date: string): string {
  const parsed = new Date(`${date}T00:00:00`);

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(parsed);
}

type GroupDetailPageProps = {
  params: {
    id: string;
  };
};

type CompatibilityResponse = {
  score: number;
  summary: string;
  fallback: boolean;
};

async function getCompatibility(groupId: string): Promise<CompatibilityResponse | null> {
  const headerStore = headers();
  const host = headerStore.get("host");

  if (!host) {
    return null;
  }

  const protocol = headerStore.get("x-forwarded-proto") ?? "http";
  const cookie = headerStore.get("cookie");

  try {
    const response = await fetch(`${protocol}://${host}/api/ai/compatibility`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(cookie ? { cookie } : {}),
      },
      body: JSON.stringify({ groupId }),
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const json: unknown = await response.json();

    if (!json || typeof json !== "object") {
      return null;
    }

    const data = json as Partial<CompatibilityResponse>;

    if (
      typeof data.score !== "number" ||
      typeof data.summary !== "string" ||
      typeof data.fallback !== "boolean"
    ) {
      return null;
    }

    return data as CompatibilityResponse;
  } catch {
    return null;
  }
}

export default async function GroupDetailPage({
  params,
}: GroupDetailPageProps): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No users found</CardTitle>
        </CardHeader>
        <CardContent>Seed data is missing, so this group cannot be loaded.</CardContent>
      </Card>
    );
  }

  const group = await prisma.group.findUnique({
    where: {
      id: params.id,
    },
    include: {
      sport: true,
      captain: true,
      event: {
        include: {
          venue: true,
        },
      },
      members: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              photoUrl: true,
              skill: true,
            },
          },
        },
        orderBy: {
          user: {
            name: "asc",
          },
        },
      },
      messages: {
        include: {
          user: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  if (!group) {
    notFound();
  }

  const membership = group.members.find((member) => member.userId === currentUser.id);

  if (!membership) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Not in this group</CardTitle>
          <CardDescription>You can only view groups that include you as a member.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const compatibility = await getCompatibility(group.id);
  const initialMessages = group.messages.map((message) => ({
    id: message.id,
    userId: message.userId,
    userName: message.user.name,
    text: message.text,
    createdAt: message.createdAt.toISOString(),
  }));
  const isCaptain = currentUser.id === group.captainId;
  const pendingPoll = group.event ? parsePendingPoll(group.event.weatherSummary) : null;
  const pollVenues = pendingPoll
    ? await prisma.venue.findMany({
        where: {
          id: {
            in: pendingPoll.candidateVenueIds,
          },
        },
        select: {
          id: true,
          name: true,
        },
      })
    : [];
  const pollVenueById = new Map(pollVenues.map((venue) => [venue.id, venue]));
  const pollCandidates = pendingPoll
    ? pendingPoll.candidateVenueIds
        .map((venueId) => {
          const venue = pollVenueById.get(venueId);

          if (!venue) {
            return null;
          }

          return {
            venueId: venue.id,
            name: venue.name,
          };
        })
        .filter((candidate): candidate is { venueId: string; name: string } => candidate !== null)
    : [];

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_46%,#14532d_100%)] p-6 text-white">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <Badge className="w-fit bg-white/10 text-white" variant="secondary">
                Group Detail
              </Badge>
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight">
                  {SPORT_EMOJI[group.sport.name] ?? "🏅"} {group.sport.name}
                </h1>
                <p className="text-sm text-neutral-200">{formatGroupDate(group.date)}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-100">
                <Badge className={getStatusClasses(group.status)} variant="secondary">
                  {group.status}
                </Badge>
                <span>Captain {group.captain.name} ⭐</span>
                {compatibility ? (
                  <Badge className="max-w-full gap-1 bg-white/10 text-white" variant="secondary">
                    <span>✨ Compatibility {compatibility.score}</span>
                    <span className="truncate text-neutral-200">{compatibility.summary}</span>
                  </Badge>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col items-end gap-3">
              <ConfirmGroupButton
                confirmed={membership.confirmed}
                groupId={group.id}
              />
              <ShareGroupButton groupId={group.id} />
            </div>
          </div>
        </div>
      </Card>

      {!group.event ? <CaptainCopilot groupId={group.id} isCaptain={isCaptain} /> : null}

      {group.event && pendingPoll && pollCandidates.length === 3 ? (
        <PollVote
          candidates={pollCandidates}
          eventId={group.event.id}
          totalMembers={group.members.length}
        />
      ) : null}

      {group.event && (!pendingPoll || pollCandidates.length !== 3) ? (
        <EventCard event={group.event} venue={group.event.venue} />
      ) : null}

      {group.event && (!pendingPoll || pollCandidates.length !== 3) ? (
        <TeamBalance
          members={group.members
            .filter((member) => member.confirmed)
            .map((member) => ({
              id: member.user.id,
              name: member.user.name,
              photoUrl: member.user.photoUrl,
              skill: member.user.skill,
            }))}
          sportName={group.sport.name}
        />
      ) : null}

      <Card className="border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
        <CardHeader>
          <CardTitle className="text-xl">Members</CardTitle>
          <CardDescription>Who&apos;s in and who has confirmed.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {group.members.map((member) => (
            <div
              className="flex items-center justify-between gap-4 rounded-xl border border-neutral-200 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950"
              key={member.userId}
            >
              <div className="flex items-center gap-3">
                <Avatar
                  className="h-11 w-11"
                  fallbackClassName="bg-neutral-200 font-semibold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100"
                  name={member.user.name}
                  src={member.user.photoUrl}
                />
                <div>
                  <div className="font-medium text-neutral-950 dark:text-neutral-50">
                    {member.user.name}
                    {member.userId === group.captainId ? " ⭐" : ""}
                  </div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    {member.confirmed ? "Confirmed" : "Waiting for confirmation"}
                  </div>
                </div>
              </div>
              {member.confirmed ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              ) : (
                <div className="h-5 w-5 rounded-full border border-neutral-300 dark:border-neutral-700" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <GroupChat
        currentUserId={currentUser.id}
        groupId={group.id}
        initialMessages={initialMessages}
      />
    </div>
  );
}
