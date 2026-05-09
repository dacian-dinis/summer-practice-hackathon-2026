"use client";

import { Loader2, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
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
};

export function CaptainCopilot({
  groupId,
  isCaptain,
}: CaptainCopilotProps): JSX.Element | null {
  const router = useRouter();
  const [suggestion, setSuggestion] = useState<z.infer<typeof copilotResponseSchema> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPostingPoll, setIsPostingPoll] = useState(false);
  const [isRefreshing, startTransition] = useTransition();

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
        setError("Could not generate copilot suggestions.");
        return;
      }

      const json: unknown = await response.json();
      const parsed = copilotResponseSchema.safeParse(json);

      if (!parsed.success) {
        setError("Copilot returned an unexpected response.");
        return;
      }

      setSuggestion(parsed.data);
    } catch {
      setError("Could not generate copilot suggestions.");
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
        setError(response.status === 409 ? "This group already has an event." : "Could not post the poll.");
        return;
      }

      const json: unknown = await response.json();
      const parsed = pollPostResponseSchema.safeParse(json);

      if (!parsed.success) {
        setError("Poll was created, but the response was invalid.");
        return;
      }

      setSuggestion(null);
      startTransition(() => {
        router.refresh();
      });
    } catch {
      setError("Could not post the poll.");
    } finally {
      setIsPostingPoll(false);
    }
  }

  return (
    <div className="space-y-4">
      <Button
        className="bg-neutral-950 text-white hover:opacity-95"
        disabled={isLoading || isPostingPoll || isRefreshing}
        onClick={() => void handleGenerateSuggestion()}
        type="button"
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        ✨ AI Captain Copilot
      </Button>

      {error ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {error}
        </div>
      ) : null}

      {suggestion ? (
        <Card className="border-neutral-200 bg-white shadow-sm">
          <CardHeader className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-amber-100 text-amber-900" variant="secondary">
                {suggestion.weatherNote}
              </Badge>
              <Badge className="bg-sky-100 text-sky-800" variant="secondary">
                Suggested time {suggestion.suggestedTime}
              </Badge>
            </div>
            <div>
              <CardTitle className="text-xl">Captain Copilot Picks</CardTitle>
              <CardDescription>{suggestion.draftMessage}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-3">
              {suggestion.ranked.map((venue, index) => (
                <div
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4"
                  key={venue.venueId}
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-medium text-neutral-500">Option {index + 1}</div>
                      <div className="text-lg font-semibold text-neutral-950">{venue.name}</div>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800" variant="secondary">
                      {venue.pricePerHour} RON
                    </Badge>
                  </div>
                  <div className="mb-3 flex items-start gap-2 text-sm text-neutral-600">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{venue.address}</span>
                  </div>
                  <p className="text-sm leading-6 text-neutral-700">{venue.reasoning}</p>
                </div>
              ))}
            </div>

            <Button
              className="bg-emerald-600 text-white hover:opacity-95"
              disabled={isPostingPoll || isRefreshing}
              onClick={() => void handlePostPoll()}
              type="button"
            >
              {isPostingPoll ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Post poll to group
            </Button>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
