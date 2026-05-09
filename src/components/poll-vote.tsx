"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const votesResponseSchema = z
  .object({
    votes: z.array(
      z
        .object({
          venueId: z.string().min(1),
          count: z.number().int().nonnegative(),
        })
        .strict(),
    ),
    total: z.number().int().nonnegative(),
    winner: z.string().min(1).optional(),
  })
  .strict();

const votePostResponseSchema = z
  .object({
    votes: z.number().int().nonnegative(),
    total: z.number().int().nonnegative(),
    winner: z
      .object({
        venueId: z.string().min(1),
        name: z.string().min(1),
      })
      .optional(),
  })
  .strict();

type PollVoteProps = {
  eventId: string;
  candidates: Array<{
    venueId: string;
    name: string;
  }>;
  totalMembers: number;
};

export function PollVote({
  eventId,
  candidates,
  totalMembers,
}: PollVoteProps): JSX.Element {
  const router = useRouter();
  const [tallies, setTallies] = useState<Record<string, number>>(
    Object.fromEntries(candidates.map((candidate) => [candidate.venueId, 0])),
  );
  const [selectedVenueId, setSelectedVenueId] = useState<string | null>(null);
  const [winnerVenueId, setWinnerVenueId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmittingVenueId, setIsSubmittingVenueId] = useState<string | null>(null);
  const [isRefreshing, startTransition] = useTransition();
  const hasRequestedRefresh = useRef(false);

  const candidateById = useMemo(
    () => new Map(candidates.map((candidate) => [candidate.venueId, candidate])),
    [candidates],
  );

  const totalVotesCast = useMemo(
    () => Object.values(tallies).reduce((sum, count) => sum + count, 0),
    [tallies],
  );

  function handleWinner(nextWinnerVenueId: string): void {
    setWinnerVenueId(nextWinnerVenueId);

    if (hasRequestedRefresh.current) {
      return;
    }

    hasRequestedRefresh.current = true;
    startTransition(() => {
      router.refresh();
    });
  }

  async function loadVotes(): Promise<void> {
    try {
      const response = await fetch(`/api/events/${eventId}/votes`, {
        cache: "no-store",
      });

      if (!response.ok) {
        return;
      }

      const json: unknown = await response.json();
      const parsed = votesResponseSchema.safeParse(json);

      if (!parsed.success) {
        return;
      }

      const nextTallies = Object.fromEntries(candidates.map((candidate) => [candidate.venueId, 0]));

      for (const vote of parsed.data.votes) {
        if (vote.venueId in nextTallies) {
          nextTallies[vote.venueId] = vote.count;
        }
      }

      setTallies(nextTallies);

      if (parsed.data.winner) {
        handleWinner(parsed.data.winner);
      }
    } catch {
      return;
    }
  }

  useEffect(() => {
    void loadVotes();

    const interval = window.setInterval(() => {
      void loadVotes();
    }, 2000);

    return () => {
      window.clearInterval(interval);
    };
  }, [eventId]);

  async function handleVote(venueId: string): Promise<void> {
    setError(null);
    setSelectedVenueId(venueId);
    setIsSubmittingVenueId(venueId);

    try {
      const response = await fetch(`/api/events/${eventId}/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ venueId }),
      });

      if (!response.ok) {
        setError(response.status === 409 ? "Voting has already closed." : "Could not submit your vote.");
        return;
      }

      const json: unknown = await response.json();
      const parsed = votePostResponseSchema.safeParse(json);

      if (!parsed.success) {
        setError("Vote was saved, but the response was invalid.");
        return;
      }

      if (parsed.data.winner) {
        handleWinner(parsed.data.winner.venueId);
        return;
      }

      await loadVotes();
    } catch {
      setError("Could not submit your vote.");
    } finally {
      setIsSubmittingVenueId(null);
    }
  }

  if (winnerVenueId) {
    return (
      <Card className="border-emerald-200 bg-emerald-50 shadow-sm dark:border-emerald-900 dark:bg-emerald-950/60">
        <CardContent className="flex items-center gap-3 p-6 text-emerald-900 dark:text-emerald-200">
          <CheckCircle2 className="h-5 w-5" />
          <div>
            <div className="font-semibold">Venue confirmed</div>
            <div className="text-sm text-emerald-800 dark:text-emerald-300">
              {candidateById.get(winnerVenueId)?.name ?? "The poll winner"} is now locked in.
            </div>
          </div>
          {isRefreshing ? <Loader2 className="ml-auto h-4 w-4 animate-spin" /> : null}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <CardHeader>
        <CardTitle className="text-xl">Vote on the venue</CardTitle>
        <CardDescription>
          Pick one option. The venue with the most votes wins once at least {Math.ceil(totalMembers / 2)} members vote.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-3">
          {candidates.map((candidate) => {
            const count = tallies[candidate.venueId] ?? 0;
            const isSelected = selectedVenueId === candidate.venueId;
            const isSubmitting = isSubmittingVenueId === candidate.venueId;

            return (
              <Button
                className={cn(
                  "h-auto min-h-10 rounded-full border px-4 py-3 text-left",
                  isSelected
                    ? "border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 dark:hover:bg-emerald-900"
                    : "border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800",
                )}
                disabled={Boolean(isSubmittingVenueId) || isRefreshing}
                key={candidate.venueId}
                onClick={() => void handleVote(candidate.venueId)}
                type="button"
                variant="ghost"
              >
                <div className="flex flex-col items-start">
                  <span className="font-medium">{candidate.name}</span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {count} / {totalMembers} votes
                  </span>
                </div>
                {isSubmitting ? <Loader2 className="ml-3 h-4 w-4 animate-spin" /> : null}
              </Button>
            );
          })}
        </div>

        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          {totalVotesCast} of {totalMembers} votes submitted
        </div>

        {error ? (
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-900 dark:bg-rose-950/60 dark:text-rose-200">
            {error}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
