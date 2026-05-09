import dynamic from "next/dynamic";

import type { PulseMapProps } from "@/components/pulse-map";
import { prisma } from "@/lib/prisma";
import { todayDate } from "@/lib/today";

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
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-950">Pulse Map</h1>
        <p className="max-w-2xl text-sm text-neutral-600">
          Live view of today&apos;s forming groups, active venues, and scheduled events across Bucharest.
        </p>
      </section>

      <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
        <PulseMap events={events} groups={groups} venues={venues} />
      </div>
    </div>
  );
}
