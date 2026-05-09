import { prisma } from "@/lib/prisma";
import { SPORT_EMOJI } from "@/lib/sports";

function formatUtcDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function escapeIcsText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

export async function GET(
  _request: Request,
  context: { params: { id: string } },
): Promise<Response> {
  const event = await prisma.event.findUnique({
    where: { id: context.params.id },
    include: {
      venue: true,
      group: {
        include: {
          sport: true,
        },
      },
    },
  });

  if (!event) {
    return new Response("Not Found", { status: 404 });
  }

  const dtStamp = formatUtcDate(new Date());
  const dtStart = formatUtcDate(event.startsAt);
  const dtEnd = formatUtcDate(new Date(event.startsAt.getTime() + 60 * 60 * 1000));
  const sportEmoji = SPORT_EMOJI[event.group.sport.name] ?? "";
  const summary = `${sportEmoji} ${event.group.sport.name} pickup at ${event.venue.name}`.trim();
  const description = `Weather: ${event.weatherSummary ?? "TBD"}. Open in maps: https://www.google.com/maps/search/?api=1&query=${event.venue.lat},${event.venue.lng}`;
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//ShowUp2Move//EN",
    "BEGIN:VEVENT",
    `UID:${escapeIcsText(`${event.id}@showup2move`)}`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${escapeIcsText(summary)}`,
    `LOCATION:${escapeIcsText(event.venue.address)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");

  return new Response(ics, {
    headers: {
      "Content-Disposition": 'attachment; filename="event.ics"',
      "Content-Type": "text/calendar",
    },
  });
}
