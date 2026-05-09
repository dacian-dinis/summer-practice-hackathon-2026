"use client";

import { Loader2 } from "lucide-react";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { CITIES, type CitySlug, isCitySlug } from "@/lib/cities";

type SportOption = {
  id: string;
  name: string;
  minGroup: number;
  maxGroup: number;
};

type VenueOption = {
  id: string;
  name: string;
  city: string;
  address: string;
  sportIds: string[];
};

type ManualEventFormProps = {
  sports: SportOption[];
  venues: VenueOption[];
  defaultDate: string;
  maxDate: string;
};

type ManualEventResponse = {
  groupId: string;
  eventId: string;
};

function getInitialSportId(sports: SportOption[]): string {
  return sports[0]?.id ?? "";
}

function getInitialCitySlug(venues: VenueOption[]): CitySlug {
  const firstVenueCity = venues.find((venue) => isCitySlug(venue.city))?.city;

  if (firstVenueCity && isCitySlug(firstVenueCity)) {
    return firstVenueCity;
  }

  return "bucharest";
}

function getFilteredVenues(
  venues: VenueOption[],
  sportId: string,
  city: CitySlug,
): VenueOption[] {
  return venues.filter(
    (venue) => venue.city === city && venue.sportIds.includes(sportId),
  );
}

export function ManualEventForm({
  sports,
  venues,
  defaultDate,
  maxDate,
}: ManualEventFormProps): JSX.Element {
  const router = useRouter();
  const { toast } = useToast();
  const initialSportId = getInitialSportId(sports);
  const initialCity = getInitialCitySlug(venues);
  const initialSport = sports.find((sport) => sport.id === initialSportId) ?? null;
  const initialFilteredVenues = getFilteredVenues(venues, initialSportId, initialCity);

  const [sportId, setSportId] = useState(initialSportId);
  const [city, setCity] = useState<CitySlug>(initialCity);
  const [venueId, setVenueId] = useState(initialFilteredVenues[0]?.id ?? "");
  const [date, setDate] = useState(defaultDate);
  const [time, setTime] = useState("18:00");
  const [description, setDescription] = useState("");
  const [maxParticipants, setMaxParticipants] = useState(
    initialSport?.maxGroup.toString() ?? "2",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedSport = sports.find((sport) => sport.id === sportId) ?? null;
  const filteredVenues = getFilteredVenues(venues, sportId, city);
  const hasAvailableVenue = filteredVenues.length > 0;

  useEffect(() => {
    if (!selectedSport) {
      return;
    }

    setMaxParticipants(selectedSport.maxGroup.toString());
  }, [selectedSport?.id]);

  useEffect(() => {
    if (!filteredVenues.some((venue) => venue.id === venueId)) {
      setVenueId(filteredVenues[0]?.id ?? "");
    }
  }, [filteredVenues, venueId]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!selectedSport) {
      toast({ title: "Select a sport first" });
      return;
    }

    if (!venueId) {
      toast({ title: "Select a venue first" });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/events/manual", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sportId,
          venueId,
          date,
          time,
          description,
          maxParticipants: Number(maxParticipants),
        }),
      });

      if (!response.ok) {
        const data: { error?: string } = (await response.json().catch(() => ({}))) as {
          error?: string;
        };

        toast({ title: data.error ?? "Unable to create event" });
        return;
      }

      const data: ManualEventResponse = (await response.json()) as ManualEventResponse;

      toast({ title: "Event created" });
      router.push(`/groups/${data.groupId}`);
      router.refresh();
    } catch {
      toast({ title: "Unable to create event" });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <CardHeader>
        <CardTitle className="text-2xl">Create a manual event</CardTitle>
        <CardDescription>
          Pick the sport, city, venue, and time. This creates a confirmed group with you as captain.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={(event) => void handleSubmit(event)}>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200" htmlFor="manual-sport">
                Sport
              </label>
              <Select
                id="manual-sport"
                onChange={(event) => setSportId(event.target.value)}
                value={sportId}
              >
                {sports.map((sport) => (
                  <option key={sport.id} value={sport.id}>
                    {sport.name}
                  </option>
                ))}
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200" htmlFor="manual-city">
                City
              </label>
              <Select
                id="manual-city"
                onChange={(event) => {
                  if (isCitySlug(event.target.value)) {
                    setCity(event.target.value);
                  }
                }}
                value={city}
              >
                {Object.values(CITIES).map((cityOption) => (
                  <option key={cityOption.slug} value={cityOption.slug}>
                    {cityOption.name}
                  </option>
                ))}
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200" htmlFor="manual-venue">
                Venue
              </label>
              <Select
                disabled={!hasAvailableVenue}
                id="manual-venue"
                onChange={(event) => setVenueId(event.target.value)}
                value={venueId}
              >
                {hasAvailableVenue ? (
                  filteredVenues.map((venue) => (
                    <option key={venue.id} value={venue.id}>
                      {venue.name} · {venue.address}
                    </option>
                  ))
                ) : (
                  <option value="">No venues available for this sport in this city</option>
                )}
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200" htmlFor="manual-date">
                Date
              </label>
              <Input
                id="manual-date"
                max={maxDate}
                min={defaultDate}
                onChange={(event) => setDate(event.target.value)}
                type="date"
                value={date}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200" htmlFor="manual-time">
                Time
              </label>
              <Input
                id="manual-time"
                max="22:00"
                min="18:00"
                onChange={(event) => setTime(event.target.value)}
                step={60}
                type="time"
                value={time}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200" htmlFor="manual-max-participants">
                Max participants
              </label>
              <Input
                id="manual-max-participants"
                max={selectedSport?.maxGroup ?? undefined}
                min={selectedSport?.minGroup ?? 1}
                onChange={(event) => setMaxParticipants(event.target.value)}
                type="number"
                value={maxParticipants}
              />
              {selectedSport ? (
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Allowed range: {selectedSport.minGroup} to {selectedSport.maxGroup}
                </p>
              ) : null}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200" htmlFor="manual-description">
                Description
              </label>
              <Textarea
                id="manual-description"
                maxLength={200}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Optional details for the group."
                value={description}
              />
              <p className="text-xs text-neutral-500 dark:text-neutral-400">{description.length}/200</p>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              className="min-h-10 bg-neutral-950 text-white hover:opacity-95"
              disabled={isSubmitting || !selectedSport || !hasAvailableVenue}
              type="submit"
            >
              {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Create event
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
