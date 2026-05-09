import type { Metadata } from "next";
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
import { getCurrentUser } from "@/lib/auth";
import { resolveCity } from "@/lib/geo";
import { prisma } from "@/lib/prisma";
import { todayDate } from "@/lib/today";

export const metadata: Metadata = {
  title: "ShowUp2Move",
};

const SPORT_EMOJI: Record<string, string> = {
  Football: "⚽",
  Tennis: "🎾",
  Basketball: "🏀",
  Padel: "🎾",
  Volleyball: "🏐",
};

function statusLabel(status: string | null): string {
  if (status === "YES") {
    return "YES";
  }

  if (status === "NO") {
    return "NO";
  }

  return "—";
}

export default async function HomePage(): Promise<JSX.Element> {
  const city = await resolveCity();
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No users found</CardTitle>
        </CardHeader>
        <CardContent>Seed data is missing, so ShowUpToday cannot load.</CardContent>
      </Card>
    );
  }

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
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">ShowUp2Move</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Pickup sports without the chaos near {city.name}.</p>
      </section>

      <section className="overflow-hidden rounded-3xl border border-neutral-200 bg-[linear-gradient(135deg,#f5f7fb_0%,#ffffff_42%,#dcfce7_100%)] p-8 shadow-sm dark:border-neutral-800 dark:bg-[linear-gradient(135deg,#111827_0%,#0a0a0a_44%,#052e16_100%)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <Badge className="w-fit" variant="secondary">
              <CalendarDays className="mr-2 h-3.5 w-3.5" />
              ShowUpToday
            </Badge>
            <div className="space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
                What are you up for today, {user.name}?
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                Mark each sport once and the matching flow can use your real availability instead of guessing.
              </p>
              <Link href="/events/new">
                <Button size="sm" type="button" variant="outline">
                  Create event
                </Button>
              </Link>
            </div>
          </div>
          <Card className="min-w-[280px] border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80">
            <CardContent className="p-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-200">
                <Users className="h-4 w-4" />
                You&apos;re in for today
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {yesSports.length > 0
                  ? yesSports
                      .map((item) => `${SPORT_EMOJI[item.sport.name] ?? "🏅"} ${item.sport.name}`)
                      .join(", ")
                  : "No sports confirmed yet."}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {availabilityToday.length === 0 ? (
        <Card className="border-dashed border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900">
          <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <div className="font-medium text-neutral-950 dark:text-neutral-50">Mark Yes for any sport to find a group</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Your sports are set. Add today&apos;s availability so matching has something to work with.
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
              className="border-neutral-200 bg-white shadow-sm transition-transform hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900"
              key={item.sportId}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <CardTitle className="text-xl">
                      {SPORT_EMOJI[item.sport.name] ?? "🏅"} {item.sport.name}
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
