import type { User } from "@/generated/prisma";
import Link from "next/link";
import { ArrowRight, CalendarDays, CircleOff, Users } from "lucide-react";

import { AvailabilityToggle, FindGroupButton } from "@/app/client-components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { resolveCity } from "@/lib/geo";
import { getDict } from "@/lib/i18n";
import { prisma } from "@/lib/prisma";
import { todayDate } from "@/lib/today";

const SPORT_EMOJI: Record<string, string> = {
  Basketball: "\u{1F3C0}",
  Football: "\u26BD",
  Padel: "\u{1F3BE}",
  Tennis: "\u{1F3BE}",
  Volleyball: "\u{1F3D0}",
};

function statusLabel(status: string | null): string {
  if (status === "YES") {
    return "YES";
  }

  if (status === "NO") {
    return "NO";
  }

  return "\u2014";
}

type DashboardHomeProps = {
  currentUser: User;
};

export async function DashboardHome({ currentUser }: DashboardHomeProps): Promise<JSX.Element> {
  const t = getDict();
  const city = await resolveCity();
  const today = todayDate();
  const user = await prisma.user.findUnique({
    where: { id: currentUser.id },
    include: {
      userSports: {
        include: {
          sport: true,
        },
      },
    },
  });

  if (!user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>User not found</CardTitle>
        </CardHeader>
        <CardContent>The selected demo user could not be loaded.</CardContent>
      </Card>
    );
  }

  if (user.userSports.length === 0) {
    return (
      <Card className="border-dashed border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900">
        <CardHeader>
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
            <CircleOff className="h-5 w-5" />
          </div>
          <CardTitle>Set sports in profile to start</CardTitle>
          <CardDescription>
            Pick the sports you actually play so today&apos;s availability can mean something.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/profile">
            <Button type="button">
              Complete your profile
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  const availabilityToday = await prisma.availability.findMany({
    where: {
      userId: user.id,
      date: today,
      sportId: {
        in: user.userSports.map((item) => item.sportId),
      },
    },
    select: {
      sportId: true,
      status: true,
    },
  });

  const availabilityBySportId = new Map(
    availabilityToday.map((item) => [item.sportId, item.status]),
  );

  const yesSports = user.userSports.filter(
    (item) => availabilityBySportId.get(item.sportId) === "YES",
  );

  return (
    <div className="space-y-8">
      <section className="rounded-md border-2 border-brand-ink bg-brand-cream p-8 dark:border-neutral-50 dark:bg-neutral-950">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <div className="font-mono-label text-brand-ink/60 dark:text-neutral-400">
              <CalendarDays className="mr-2 inline h-3.5 w-3.5" />
              {t["dash.eyebrow"]} · {city.name.toUpperCase()}
            </div>
            <div className="space-y-3">
              <h1 className="font-display text-4xl leading-[0.95] text-brand-ink dark:text-neutral-50 sm:text-5xl lg:text-6xl">
                {t["dash.heading.before"]}
                <span className="text-brand">{user.name}</span>
                {t["dash.heading.q"]}
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-brand-ink/70 dark:text-neutral-400">
                {t["dash.subhead"]}
              </p>
              <Link href="/events/new">
                <Button
                  className="rounded-md border-2 border-brand-ink bg-transparent font-bold uppercase tracking-wider text-brand-ink hover:bg-brand-ink hover:text-white dark:border-neutral-50 dark:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-950"
                  size="sm"
                  type="button"
                  variant="outline"
                >
                  {t["dash.create"]}
                </Button>
              </Link>
            </div>
          </div>
          <div className="min-w-[280px] rounded-md border-2 border-brand-ink bg-white p-5 dark:border-neutral-50 dark:bg-neutral-950">
            <div className="font-mono-label mb-2 flex items-center gap-2 text-brand-ink/60 dark:text-neutral-400">
              <Users className="h-3.5 w-3.5" />
              {t["dash.youAreIn"]}
            </div>
            <div className="font-display text-lg leading-snug text-brand-ink dark:text-neutral-50">
              {yesSports.length > 0
                ? yesSports
                    .map((item) => `${SPORT_EMOJI[item.sport.name] ?? "\u{1F3C5}"} ${item.sport.name}`)
                    .join(" · ")
                : t["dash.nothing"]}
            </div>
          </div>
        </div>
      </section>

      {availabilityToday.length === 0 ? (
        <Card className="border-dashed border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900">
          <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <div className="font-medium text-neutral-950 dark:text-neutral-50">{t["dash.markYesTitle"]}</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {t["dash.markYesBody"]}
              </div>
            </div>
            <Users className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
          </CardContent>
        </Card>
      ) : null}

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {user.userSports.map((item) => {
          const currentStatus = availabilityBySportId.get(item.sportId) ?? null;

          return (
            <Card
              className="rounded-md border-2 border-brand-ink bg-white shadow-none transition-transform hover:-translate-y-1 hover:border-brand dark:border-neutral-50 dark:bg-neutral-950 dark:hover:border-brand"
              key={item.sportId}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <CardTitle className="text-xl">
                      {SPORT_EMOJI[item.sport.name] ?? "\u{1F3C5}"} {item.sport.name}
                    </CardTitle>
                    <CardDescription>Set your status for {today}.</CardDescription>
                  </div>
                  <Badge
                    className={
                      currentStatus === "YES"
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                        : currentStatus === "NO"
                          ? "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
                          : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                    }
                    variant="secondary"
                  >
                    {statusLabel(currentStatus)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <AvailabilityToggle
                  currentStatus={currentStatus === "YES" || currentStatus === "NO" ? currentStatus : null}
                  sportId={item.sportId}
                  sportName={item.sport.name}
                />
              </CardContent>
            </Card>
          );
        })}
      </section>

      <FindGroupButton sportIds={user.userSports.map((item) => item.sportId)} />
    </div>
  );
}
