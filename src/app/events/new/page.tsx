import type { Metadata } from "next";
import { CalendarPlus } from "lucide-react";

import { ManualEventForm } from "@/app/events/new/manual-event-form";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurrentUser } from "@/lib/auth";
import { getDict } from "@/lib/i18n";
import { prisma } from "@/lib/prisma";
import { todayDate } from "@/lib/today";

export const metadata: Metadata = {
  title: "Create Event",
};

function addDays(date: string, days: number): string {
  const parsed = new Date(`${date}T00:00:00.000Z`);
  parsed.setUTCDate(parsed.getUTCDate() + days);
  return parsed.toISOString().slice(0, 10);
}

export default async function NewEventPage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();
  const dict = getDict();

  if (!currentUser) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No users found</CardTitle>
        </CardHeader>
        <CardContent>Seed data is missing, so manual events cannot be created.</CardContent>
      </Card>
    );
  }

  const [sports, venues] = await Promise.all([
    prisma.sport.findMany({
      orderBy: {
        name: "asc",
      },
      select: {
        id: true,
        name: true,
        minGroup: true,
        maxGroup: true,
      },
    }),
    prisma.venue.findMany({
      orderBy: [
        { city: "asc" },
        { name: "asc" },
      ],
      select: {
        id: true,
        name: true,
        city: true,
        address: true,
        venueSports: {
          select: {
            sportId: true,
          },
        },
      },
    }),
  ]);

  const defaultDate = todayDate();

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-md border-2 border-brand-ink bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_45%,#ecfccb_100%)] p-6 shadow-none dark:border-neutral-50 dark:bg-[linear-gradient(135deg,#2a160b_0%,#0a0a0a_45%,#1a2e05_100%)] sm:p-8">
        <div className="space-y-3">
          <div className="font-mono-label text-sm text-neutral-600 dark:text-neutral-300">{dict["eventsNew.eyebrow"]}</div>
          <Badge className="w-fit" variant="secondary">
            <CalendarPlus className="mr-2 h-3.5 w-3.5" />
            {dict["eventsNew.badge"]}
          </Badge>
          <h1 className="font-display text-3xl tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">{dict["eventsNew.title"]}</h1>
          <p className="max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
            {dict["eventsNew.subhead"]}
          </p>
        </div>
      </section>

      <ManualEventForm
        defaultDate={defaultDate}
        maxDate={addDays(defaultDate, 6)}
        sports={sports}
        venues={venues.map((venue) => ({
          id: venue.id,
          name: venue.name,
          city: venue.city,
          address: venue.address,
          sportIds: venue.venueSports.map((venueSport) => venueSport.sportId),
        }))}
      />
    </div>
  );
}
