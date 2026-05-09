import { CloudSun, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type EventCardProps = {
  event: {
    startsAt: Date;
    weatherSummary: string | null;
  };
  venue: {
    name: string;
    address: string;
    lat: number;
    lng: number;
  };
};

function formatTime(startsAt: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(startsAt);
}

export function EventCard({ event, venue }: EventCardProps): JSX.Element {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${venue.lat},${venue.lng}`;

  return (
    <Card className="overflow-hidden border-neutral-200 bg-white shadow-sm">
      <div className="bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_45%,#ecfccb_100%)]">
        <CardHeader className="gap-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="space-y-2">
              <CardTitle className="text-xl text-neutral-950">{venue.name}</CardTitle>
              <CardDescription className="max-w-2xl">{venue.address}</CardDescription>
            </div>
            {event.weatherSummary ? (
              <Badge className="gap-1 bg-sky-100 text-sky-800" variant="secondary">
                <CloudSun className="h-3.5 w-3.5" />
                {event.weatherSummary}
              </Badge>
            ) : null}
          </div>
        </CardHeader>
      </div>
      <CardContent className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="text-sm font-medium text-neutral-950">Start time</div>
          <div className="text-sm text-neutral-600">{formatTime(event.startsAt)}</div>
        </div>
        <a
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-950 transition-colors hover:text-emerald-700"
          href={googleMapsUrl}
          rel="noreferrer"
          target="_blank"
        >
          <MapPin className="h-4 w-4" />
          Open in Google Maps
        </a>
      </CardContent>
    </Card>
  );
}
