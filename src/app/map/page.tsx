import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";

import type { PulseMapProps } from "@/components/pulse-map";
import { resolveCity } from "@/lib/geo";
import { getDict } from "@/lib/i18n";
import { prisma } from "@/lib/prisma";
import { todayDate } from "@/lib/today";

export const metadata: Metadata = {
  title: "Map",
};

const PulseMap = dynamic(() => import("@/components/pulse-map"), {
  ssr: false,
});

function formatEventTime(startsAt: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(startsAt);
}

export default async function MapPage(): Promise<JSX.Element> {
  const city = await resolveCity();
  const dict = getDict();
  const today = todayDate();
  const startOfDay = new Date(`${today}T00:00:00.000Z`);
  const endOfDay = new Date(`${today}T23:59:59.999Z`);

  const [groupsResult, venuesResult, eventsResult] = await Promise.all([
    prisma.group.findMany({
      where: {
        date: today,
        status: "FORMING",
      },
      include: {
        sport: {
          select: {
            name: true,
            minGroup: true,
          },
        },
        captain: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            members: true,
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    }),
    prisma.venue.findMany({
      where: {
        city: city.slug,
      },
      include: {
        venueSports: {
          include: {
            sport: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    }),
    prisma.event.findMany({
      where: {
        startsAt: {
          gte: startOfDay,
          lte: endOfDay,
        },
        venue: {
          city: city.slug,
        },
      },
      include: {
        venue: {
          select: {
            name: true,
            lat: true,
            lng: true,
          },
        },
        group: {
          include: {
            sport: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        startsAt: "asc",
      },
    }),
  ]);

  const sportEmoji: Record<string, string> = {
    Basketball: "🏀",
    Football: "⚽",
    Padel: "🎾",
    Tennis: "🎾",
    Volleyball: "🏐",
  };

  const groups: PulseMapProps["groups"] = groupsResult.map((group) => ({
    id: group.id,
    sportName: group.sport.name,
    sportEmoji: sportEmoji[group.sport.name] ?? "🏅",
    status: "FORMING",
    needs: Math.max(1, group.sport.minGroup - group._count.members),
    captain: group.captain.name,
  }));

  const venues: PulseMapProps["venues"] = venuesResult.map((venue) => ({
    id: venue.id,
    name: venue.name,
    lat: venue.lat,
    lng: venue.lng,
    sportNames: venue.venueSports.map((venueSport) => venueSport.sport.name),
  }));

  const events: PulseMapProps["events"] = eventsResult.map((event) => ({
    id: event.id,
    venue: {
      name: event.venue.name,
      lat: event.venue.lat,
      lng: event.venue.lng,
    },
    sportEmoji: sportEmoji[event.group.sport.name] ?? "🏅",
    time: formatEventTime(event.startsAt),
  }));

  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <div className="font-mono-label text-sm text-neutral-600 dark:text-neutral-400">{dict["map.eyebrow"]}</div>
        <div className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          <MapPin className="h-4 w-4" />
          {dict["map.title"]}
        </div>
        <h1 className="font-display text-3xl tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">{dict["map.title"]}</h1>
        <p className="max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">
          {dict["map.subhead"]} {city.name}.
        </p>
      </section>

      <div className="overflow-hidden rounded-md border-2 border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950">
        <PulseMap
          center={{ lat: city.lat, lng: city.lng }}
          cityName={city.name}
          events={events}
          groups={groups}
          venues={venues}
        />
      </div>
    </div>
  );
}
