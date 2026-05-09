import { CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

import { ConfirmGroupButton } from "@/components/confirm-group-button";
import { EventCard } from "@/components/event-card";
import { GroupChat } from "@/components/group-chat";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const SPORT_EMOJI: Record<string, string> = {
  Basketball: "🏀",
  Football: "⚽",
  Padel: "🎾",
  Tennis: "🎾",
  Volleyball: "🏐",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2);
}

function getStatusClasses(status: string): string {
  if (status === "CONFIRMED") {
    return "bg-emerald-100 text-emerald-800";
  }

  if (status === "DONE") {
    return "bg-slate-200 text-slate-800";
  }

  return "bg-amber-100 text-amber-900";
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
          user: true,
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

  const initialMessages = group.messages.map((message) => ({
    id: message.id,
    userId: message.userId,
    userName: message.user.name,
    text: message.text,
    createdAt: message.createdAt.toISOString(),
  }));

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-neutral-200 bg-white shadow-sm">
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
              </div>
            </div>
            <ConfirmGroupButton
              confirmed={membership.confirmed}
              groupId={group.id}
            />
          </div>
        </div>
      </Card>

      {group.event ? <EventCard event={group.event} venue={group.event.venue} /> : null}

      <Card className="border-neutral-200 bg-white">
        <CardHeader>
          <CardTitle className="text-xl">Members</CardTitle>
          <CardDescription>Who&apos;s in and who has confirmed.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {group.members.map((member) => (
            <div
              className="flex items-center justify-between gap-4 rounded-xl border border-neutral-200 px-4 py-3"
              key={member.userId}
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-11 w-11">
                  {member.user.photoUrl ? (
                    <AvatarImage alt={member.user.name} src={member.user.photoUrl} />
                  ) : null}
                  <AvatarFallback className="bg-neutral-200 font-semibold text-neutral-700">
                    {getInitials(member.user.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-neutral-950">
                    {member.user.name}
                    {member.userId === group.captainId ? " ⭐" : ""}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {member.confirmed ? "Confirmed" : "Waiting for confirmation"}
                  </div>
                </div>
              </div>
              {member.confirmed ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              ) : (
                <div className="h-5 w-5 rounded-full border border-neutral-300" />
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
