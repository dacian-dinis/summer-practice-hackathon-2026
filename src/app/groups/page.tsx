import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, ChevronRight, Users } from "lucide-react";

import { Avatar } from "@/components/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurrentUser } from "@/lib/auth";
import { getDict } from "@/lib/i18n";
import { prisma } from "@/lib/prisma";
import { SPORT_EMOJI } from "@/lib/sports";
import { todayDate } from "@/lib/today";

export const metadata: Metadata = {
  title: "Groups",
};

function getStatusLabel(status: string, dict: Record<string, string>): string {
  const key = `groups.status.${status.toLowerCase()}` as keyof typeof dict;
  return dict[key] ?? status;
}

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
    month: "short",
    day: "numeric",
    weekday: "short",
  }).format(parsed);
}

type GroupCardData = {
  captain: {
    id: string;
    name: string;
  };
  date: string;
  id: string;
  members: Array<{
    user: {
      id: string;
      name: string;
      photoUrl: string | null;
    };
  }>;
  sport: {
    name: string;
  };
  status: string;
};

function GroupCard({
  dict,
  group,
}: {
  dict: Record<string, string>;
  group: GroupCardData;
}): JSX.Element {
  return (
    <Link className="block" href={`/groups/${group.id}`}>
      <Card className="h-full rounded-md border-2 border-brand-ink bg-white shadow-none transition-transform hover:-translate-y-1 dark:border-neutral-50 dark:bg-neutral-950">
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <CardTitle className="text-xl">
                {SPORT_EMOJI[group.sport.name] ?? "🏅"} {group.sport.name}
              </CardTitle>
              <CardDescription>{formatGroupDate(group.date)}</CardDescription>
            </div>
            <Badge className={getStatusClasses(group.status)} variant="secondary">
              {getStatusLabel(group.status, dict)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-3">
              {group.members.slice(0, 5).map((member) => (
                <Avatar
                  className="h-10 w-10 border-2 border-white dark:border-neutral-900"
                  fallbackClassName="bg-neutral-200 text-xs font-semibold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100"
                  key={member.user.id}
                  name={member.user.name}
                  src={member.user.photoUrl}
                />
              ))}
            </div>
            {group.members.length > 5 ? (
              <Badge className="bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300" variant="secondary">
                +{group.members.length - 5}
              </Badge>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-neutral-600 dark:text-neutral-400 dark:[&_span]:text-neutral-100">
            <div className="truncate">
              {dict["groups.captain"]}: <span className="font-medium text-neutral-900">{group.captain.name} ⭐</span>
            </div>
            <div className="flex items-center gap-1 text-neutral-500">
              {dict["groups.view"]}
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function GroupSection({
  description,
  dict,
  groups,
  title,
}: {
  description: string;
  dict: Record<string, string>;
  groups: GroupCardData[];
  title: string;
}): JSX.Element | null {
  if (groups.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">{title}</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <GroupCard dict={dict} group={group} key={group.id} />
        ))}
      </div>
    </section>
  );
}

export default async function GroupsPage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();
  const dict = getDict();

  if (!currentUser) {
    return (
      <Card className="rounded-md border-2 border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950">
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
      <Card className="rounded-md border-2 border-dashed border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950">
        <CardHeader>
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
            <CalendarDays className="h-5 w-5" />
          </div>
          <CardTitle>{dict["groups.emptyTitle"]}</CardTitle>
          <CardDescription>{dict["groups.emptyBody"]}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const today = todayDate();
  const todayGroups = groups.filter((group) => group.date === today);
  const upcomingOrOtherGroups = groups.filter((group) => group.date !== today);

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-md border-2 border-brand-ink bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_52%,#dbeafe_100%)] p-6 shadow-none dark:border-neutral-50 dark:bg-[linear-gradient(135deg,#172033_0%,#0a0a0a_52%,#172554_100%)] sm:p-8">
        <div className="space-y-3">
          <div className="font-mono-label text-sm text-neutral-600 dark:text-neutral-300">{dict["groups.eyebrow"]}</div>
          <Badge className="w-fit" variant="secondary">
            <Users className="mr-2 h-3.5 w-3.5" />
            {dict["groups.title"]}
          </Badge>
          <h1 className="font-display text-3xl tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">{dict["groups.title"]}</h1>
          <p className="max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
            {dict["groups.subhead"]}
          </p>
        </div>
      </section>

      <GroupSection
        description={dict["groups.todayBody"]}
        dict={dict}
        groups={todayGroups}
        title={dict["groups.today"]}
      />
      <GroupSection
        description={dict["groups.otherBody"]}
        dict={dict}
        groups={upcomingOrOtherGroups}
        title={dict["groups.other"]}
      />
    </div>
  );
}
