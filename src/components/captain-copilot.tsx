"use client";

import { Loader2, MapPin, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { formatKm, haversineKm } from "@/lib/distance";

type UserLocation = {
  lat: number;
  lng: number;
  city: string;
};

type CaptainCopilotLabels = {
  away: string;
  button: string;
  errorExistingEvent: string;
  errorGenerate: string;
  errorPollInvalid: string;
  errorPost: string;
  errorUnexpected: string;
  fallback: string;
  option: string;
  postPoll: string;
  ready: string;
  ron: string;
  suggestedTime: string;
  title: string;
};

let cachedUserLocation: UserLocation | null = null;
let userLocationPromise: Promise<UserLocation | null> | null = null;

async function getUserLocation(): Promise<UserLocation | null> {
  if (cachedUserLocation) {
    return cachedUserLocation;
  }

  if (!userLocationPromise) {
    userLocationPromise = fetch("/api/me/location", {
      credentials: "same-origin",
    })
      .then(async (response) => {
        if (!response.ok) {
          return null;
        }

        const json: unknown = await response.json();
        const payload = json as Record<string, unknown>;

        if (
          !json ||
          typeof json !== "object" ||
          typeof payload.lat !== "number" ||
          typeof payload.lng !== "number" ||
          typeof payload.city !== "string"
        ) {
          return null;
        }

        const location = json as UserLocation;
        cachedUserLocation = location;

        return location;
      })
      .catch(() => null)
      .finally(() => {
        userLocationPromise = null;
      });
  }

  return userLocationPromise;
}

const copilotVenueSchema = z
  .object({
    venueId: z.string().min(1),
    name: z.string().min(1),
    address: z.string().min(1),
    lat: z.number(),
    lng: z.number(),
    pricePerHour: z.number(),
    reasoning: z.string().min(1),
  })
  .strict();

const copilotResponseSchema = z
  .object({
    ranked: z.array(copilotVenueSchema).length(3),
    suggestedTime: z.string().min(1),
    draftMessage: z.string().min(1),
    weatherNote: z.string().min(1),
    fallback: z.boolean(),
  })
  .strict();

const pollPostResponseSchema = z
  .object({
    eventId: z.string().min(1),
    candidates: z
      .array(
        z
          .object({
            venueId: z.string().min(1),
            name: z.string().min(1),
          })
          .strict(),
      )
      .length(3),
  })
  .strict();

type CaptainCopilotProps = {
  groupId: string;
  isCaptain: boolean;
  labels: CaptainCopilotLabels;
};

export function CaptainCopilot({
  groupId,
  isCaptain,
  labels,
}: CaptainCopilotProps): JSX.Element | null {
  const router = useRouter();
  const { toast } = useToast();
  const [suggestion, setSuggestion] = useState<z.infer<typeof copilotResponseSchema> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPostingPoll, setIsPostingPoll] = useState(false);
  const [isRefreshing, startTransition] = useTransition();
  const [userLocation, setUserLocation] = useState<UserLocation | null>(cachedUserLocation);

  useEffect(() => {
    let isMounted = true;

    void getUserLocation().then((location) => {
      if (isMounted && location) {
        setUserLocation(location);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!isCaptain) {
    return null;
  }

  async function handleGenerateSuggestion(): Promise<void> {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai/copilot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ groupId }),
      });

      if (!response.ok) {
        setError(labels.errorGenerate);
        return;
      }

      const json: unknown = await response.json();
      const parsed = copilotResponseSchema.safeParse(json);

      if (!parsed.success) {
        setError(labels.errorUnexpected);
        return;
      }

      setSuggestion(parsed.data);
      toast({
        title: parsed.data.fallback ? labels.fallback : `✨ ${labels.ready}`,
      });
    } catch {
      setError(labels.errorGenerate);
    } finally {
      setIsLoading(false);
    }
  }

  async function handlePostPoll(): Promise<void> {
    if (!suggestion) {
      return;
    }

    setError(null);
    setIsPostingPoll(true);

    try {
      const response = await fetch(`/api/groups/${groupId}/poll`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          venueIds: suggestion.ranked.map((venue) => venue.venueId),
          suggestedTime: suggestion.suggestedTime,
          draftMessage: suggestion.draftMessage,
        }),
      });

      if (!response.ok) {
        setError(response.status === 409 ? labels.errorExistingEvent : labels.errorPost);
        return;
      }

      const json: unknown = await response.json();
      const parsed = pollPostResponseSchema.safeParse(json);

      if (!parsed.success) {
        setError(labels.errorPollInvalid);
        return;
      }

      setSuggestion(null);
      startTransition(() => {
        router.refresh();
      });
    } catch {
      setError(labels.errorPost);
    } finally {
      setIsPostingPoll(false);
    }
  }

  return (
    <div className="space-y-4">
      <Button
        className="min-h-11 rounded-md bg-bluebold text-white hover:bg-bluebold-deep font-bold uppercase tracking-wider"
        disabled={isLoading || isPostingPoll || isRefreshing}
        onClick={() => void handleGenerateSuggestion()}
        type="button"
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
        {labels.button}
      </Button>

      {error ? (
        <div className="rounded-md border-2 border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-900 dark:bg-rose-950/60 dark:text-rose-200">
          {error}
        </div>
      ) : null}

      {suggestion ? (
        <Card className="rounded-md border-2 border-bluebold-deep bg-white shadow-none dark:border-bluebold dark:bg-neutral-950">
          <CardHeader className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300" variant="secondary">
                {suggestion.weatherNote}
              </Badge>
              <Badge className="bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300" variant="secondary">
                {labels.suggestedTime} {suggestion.suggestedTime}
              </Badge>
            </div>
            <div>
              <CardTitle className="text-xl">{labels.title}</CardTitle>
              <CardDescription>{suggestion.draftMessage}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-3">
              {suggestion.ranked.map((venue, index) => (
                <div
                  className="rounded-md border-2 border-brand-ink bg-neutral-50 p-4 dark:border-neutral-50 dark:bg-neutral-950"
                  key={venue.venueId}
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{labels.option} {index + 1}</div>
                      <div className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">{venue.name}</div>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300" variant="secondary">
                      {venue.pricePerHour} {labels.ron}
                    </Badge>
                  </div>
                  <div className="mb-3 flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{venue.address}</span>
                  </div>
                  {userLocation ? (
                    <div className="mb-3 flex items-start gap-2 text-sm text-sky-700 dark:text-sky-300">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>
                        {formatKm(
                          haversineKm(userLocation, {
                            lat: venue.lat,
                            lng: venue.lng,
                          }),
                        )}{" "}
                        {labels.away}
                      </span>
                    </div>
                  ) : null}
                  <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-300">{venue.reasoning}</p>
                </div>
              ))}
            </div>

            <Button
              className="min-h-11 rounded-md bg-brand text-white hover:bg-brand-deep font-bold uppercase tracking-wider"
              disabled={isPostingPoll || isRefreshing}
              onClick={() => void handlePostPoll()}
              type="button"
            >
              {isPostingPoll ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {labels.postPoll}
            </Button>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
