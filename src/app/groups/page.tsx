import Link from "next/link";
import { CalendarDays, ChevronRight } from "lucide-react";

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
import { todayDate } from "@/lib/today";

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
    month: "short",
    day: "numeric",
    weekday: "short",
  }).format(parsed);
}

type GroupCardData = {
  id: string;
  date: string;
  status: string;
  sport: {
    name: string;
  };
  captain: {
    id: string;
    name: string;
  };
  members: Array<{
    user: {
      id: string;
      name: string;
      photoUrl: string | null;
    };
  }>;
};

function GroupCard({ group }: { group: GroupCardData }): JSX.Element {
  return (
    <Link className="block" href={`/groups/${group.id}`}>
      <Card className="h-full border-neutral-200 bg-white transition-transform hover:-translate-y-1 hover:shadow-md">
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <CardTitle className="text-xl">
                {SPORT_EMOJI[group.sport.name] ?? "🏅"} {group.sport.name}
              </CardTitle>
              <CardDescription>{formatGroupDate(group.date)}</CardDescription>
            </div>
            <Badge className={getStatusClasses(group.status)} variant="secondary">
              {group.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-3">
              {group.members.slice(0, 5).map((member) => (
                <Avatar className="h-10 w-10 border-2 border-white" key={member.user.id}>
                  {member.user.photoUrl ? <AvatarImage alt={member.user.name} src={member.user.photoUrl} /> : null}
                  <AvatarFallback className="bg-neutral-200 text-xs font-semibold text-neutral-700">
                    {getInitials(member.user.name)}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            {group.members.length > 5 ? (
              <Badge className="bg-neutral-100 text-neutral-700" variant="secondary">
                +{group.members.length - 5}
              </Badge>
            ) : null}
          </div>

          <div className="flex items-center justify-between gap-3 text-sm text-neutral-600">
            <div className="truncate">
              Captain: <span className="font-medium text-neutral-900">{group.captain.name} ⭐</span>
            </div>
            <div className="flex items-center gap-1 text-neutral-500">
              Open
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function GroupSection({
  groups,
  title,
  description,
}: {
  groups: GroupCardData[];
  title: string;
  description: string;
}): JSX.Element | null {
  if (groups.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">{title}</h2>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <GroupCard group={group} key={group.id} />
        ))}
      </div>
    </section>
  );
}

export default async function GroupsPage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No users found</CardTitle>
        </CardHeader>
        <CardContent>Seed data is missing, so groups cannot be loaded.</CardContent>
      </Card>
    );
  }

  const groups = await prisma.group.findMany({
    where: {
      members: {
        some: {
          userId: currentUser.id,
        },
      },
    },
    include: {
      sport: {
        select: {
          name: true,
        },
      },
      captain: {
        select: {
          id: true,
          name: true,
        },
      },
      members: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              photoUrl: true,
            },
          },
        },
      },
    },
    orderBy: [{ date: "asc" }, { createdAt: "asc" }],
  });

  if (groups.length === 0) {
    return (
      <Card className="border-dashed border-neutral-300 bg-white">
        <CardHeader>
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
            <CalendarDays className="h-5 w-5" />
          </div>
          <CardTitle>No groups yet</CardTitle>
          <CardDescription>
            No groups yet — mark availability and click Find my group on Home
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const today = todayDate();
  const todayGroups = groups.filter((group) => group.date === today);
  const upcomingOrOtherGroups = groups.filter((group) => group.date !== today);

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-3xl border border-neutral-200 bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_52%,#dbeafe_100%)] p-8 shadow-sm">
        <div className="space-y-2">
          <Badge className="w-fit" variant="secondary">
            Your Groups
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-950">Play plans, organized.</h1>
          <p className="max-w-2xl text-sm leading-6 text-neutral-600">
            Check who&apos;s in, which groups are confirmed, and jump straight into the chat.
          </p>
        </div>
      </section>

      <GroupSection
        description="Groups happening today."
        groups={todayGroups}
        title="Today"
      />
      <GroupSection
        description="Everything outside today, including upcoming matches and older groups."
        groups={upcomingOrOtherGroups}
        title="Upcoming/Other"
      />
    </div>
  );
}
