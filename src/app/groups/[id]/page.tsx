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
import { haversineKm } from "@/lib/distance";
import { parsePendingPoll } from "@/lib/event-poll";
import { resolveCity } from "@/lib/geo";
import { getDict } from "@/lib/i18n";
import { prisma } from "@/lib/prisma";
import { rankFor } from "@/lib/ranks";

const SPORT_EMOJI: Record<string, string> = {
  Basketball: "🏀",
  Football: "⚽",
  Padel: "🎾",
  Tennis: "🎾",
  Volleyball: "🏐",
  Jogging: "🏃",
  Running: "🏃‍♂️",
  Cycling: "🚴",
  Yoga: "🧘",
  Hiking: "🥾",
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
  fallback: boolean;
  score: number;
  summary: string;
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

function rankLabel(tier: string, dict: Record<string, string>): string {
  const key = `rank.${tier.toLowerCase()}` as keyof typeof dict;
  return dict[key] ?? tier;
}

function statusLabel(status: string, dict: Record<string, string>): string {
  const key = `groups.status.${status.toLowerCase()}` as keyof typeof dict;
  return dict[key] ?? status;
}

export default async function GroupDetailPage({
  params,
}: GroupDetailPageProps): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();
  const dict = getDict();

  if (!currentUser) {
    return (
      <Card className="rounded-md border-2 border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950">
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
      <Card className="rounded-md border-2 border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950">
        <CardHeader>
          <CardTitle>{dict["group.notMember"]}</CardTitle>
          <CardDescription>{dict["group.notMemberBody"]}</CardDescription>
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
  const userCity = group.event ? await resolveCity() : null;
  const distanceFromUserKm =
    group.event && userCity
      ? haversineKm(userCity, {
          lat: group.event.venue.lat,
          lng: group.event.venue.lng,
        })
      : null;

  const rankCounts = new Map<string, number>(
    await Promise.all(
      group.members.map(
        async (member): Promise<[string, number]> => [
          member.userId,
          await prisma.event.count({
            where: {
              startsAt: { lt: new Date() },
              group: {
                members: {
                  some: {
                    confirmed: true,
                    userId: member.userId,
                  },
                },
              },
            },
          }),
        ],
      ),
    ),
  );

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden rounded-md border-2 border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950">
        <div className="bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_46%,#14532d_100%)] p-6 text-white">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="font-mono-label text-sm text-white/70">{dict["group.detailBadge"]}</div>
              <div className="space-y-2">
                <h1 className="font-display text-3xl tracking-tight sm:text-4xl">
                  {SPORT_EMOJI[group.sport.name] ?? "🏅"} {group.sport.name}
                </h1>
                <p className="text-sm text-neutral-200">{formatGroupDate(group.date)}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-100">
                <Badge className={getStatusClasses(group.status)} variant="secondary">
                  {statusLabel(group.status, dict)}
                </Badge>
                <span>{dict["groups.captain"]} {group.captain.name} ⭐</span>
                {compatibility ? (
                  <Badge className="max-w-full gap-1 bg-white/10 text-white" variant="secondary">
                    <span>✨ {dict["group.compatibility"]} {compatibility.score}</span>
                    <span className="truncate text-neutral-200">{compatibility.summary}</span>
                  </Badge>
                ) : null}
              </div>
            </div>
            <div className="flex flex-wrap items-end gap-3">
              <ConfirmGroupButton
                confirmed={membership.confirmed}
                groupId={group.id}
              />
              <ShareGroupButton groupId={group.id} />
            </div>
          </div>
        </div>
      </Card>

      {!group.event ? (
        <CaptainCopilot
          groupId={group.id}
          isCaptain={isCaptain}
          labels={{
            away: dict["copilot.away"],
            button: dict["copilot.button"],
            errorExistingEvent: dict["copilot.errorExistingEvent"],
            errorGenerate: dict["copilot.errorGenerate"],
            errorPollInvalid: dict["copilot.errorPollInvalid"],
            errorPost: dict["copilot.errorPost"],
            errorUnexpected: dict["copilot.errorUnexpected"],
            fallback: dict["copilot.fallback"],
            option: dict["copilot.option"],
            postPoll: dict["copilot.postPoll"],
            ready: dict["copilot.ready"],
            ron: dict["copilot.ron"],
            suggestedTime: dict["copilot.suggestedTime"],
            title: dict["copilot.title"],
          }}
        />
      ) : null}

      {group.event && pendingPoll && pollCandidates.length === 3 ? (
        <PollVote
          candidates={pollCandidates}
          eventId={group.event.id}
          totalMembers={group.members.length}
        />
      ) : null}

      {group.event && (!pendingPoll || pollCandidates.length !== 3) ? (
        <EventCard distanceFromUserKm={distanceFromUserKm} event={group.event} venue={group.event.venue} />
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

      <Card className="rounded-md border-2 border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950">
        <CardHeader>
          <CardTitle className="text-xl">{dict["group.members"]}</CardTitle>
          <CardDescription>{dict["group.membersBody"]}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {group.members.map((member) => {
            const rank = rankFor(rankCounts.get(member.userId) ?? 0);

            return (
              <div
                className="flex flex-wrap items-center justify-between gap-4 rounded-md border-2 border-brand-ink px-4 py-3 dark:border-neutral-700 dark:bg-neutral-950"
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
                    <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                      <Badge className={`${rank.color} rounded-md`} variant="secondary">
                        {rank.emoji} {rankLabel(rank.tier, dict)}
                      </Badge>
                      <span>{member.confirmed ? dict["group.confirmed"] : dict["group.waiting"]}</span>
                    </div>
                  </div>
                </div>
                {member.confirmed ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                ) : (
                  <div className="h-5 w-5 rounded-full border border-neutral-300 dark:border-neutral-700" />
                )}
              </div>
            );
          })}
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
