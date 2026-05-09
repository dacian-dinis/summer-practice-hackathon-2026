import { z } from "zod";

const PENDING_POLL_PREFIX = "__captain_poll__:";

export const suggestedTimeSchema = z
  .string()
  .regex(/^([01]\d|2[0-3]):[0-5]\d$/, "suggestedTime must match HH:MM");

export const venueIdsSchema = z
  .array(z.string().min(1))
  .length(3)
  .superRefine((venueIds, context) => {
    if (new Set(venueIds).size !== venueIds.length) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "venueIds must be unique",
      });
    }
  });

export const groupPollBodySchema = z
  .object({
    venueIds: venueIdsSchema,
    suggestedTime: suggestedTimeSchema,
    draftMessage: z.string().trim().min(1).max(120),
  })
  .strict();

export const eventVoteBodySchema = z
  .object({
    venueId: z.string().min(1),
  })
  .strict();

const pendingPollSchema = z
  .object({
    candidateVenueIds: venueIdsSchema,
    draftMessage: z.string().trim().min(1).max(120),
  })
  .strict();

export type PendingPoll = z.infer<typeof pendingPollSchema>;

export function serializePendingPoll(value: PendingPoll): string {
  return `${PENDING_POLL_PREFIX}${JSON.stringify(value)}`;
}

export function parsePendingPoll(weatherSummary: string | null): PendingPoll | null {
  if (!weatherSummary?.startsWith(PENDING_POLL_PREFIX)) {
    return null;
  }

  try {
    const parsed = JSON.parse(weatherSummary.slice(PENDING_POLL_PREFIX.length)) as unknown;
    const result = pendingPollSchema.safeParse(parsed);

    return result.success ? result.data : null;
  } catch {
    return null;
  }
}

export function buildVoteTallies(
  candidateVenueIds: string[],
  votes: Array<{ venueId: string }>,
): Array<{ venueId: string; count: number }> {
  const counts = new Map<string, number>();

  for (const candidateVenueId of candidateVenueIds) {
    counts.set(candidateVenueId, 0);
  }

  for (const vote of votes) {
    if (!counts.has(vote.venueId)) {
      continue;
    }

    counts.set(vote.venueId, (counts.get(vote.venueId) ?? 0) + 1);
  }

  return candidateVenueIds.map((venueId) => ({
    venueId,
    count: counts.get(venueId) ?? 0,
  }));
}

export function pickWinningVenueId(input: {
  candidateVenueIds: string[];
  totalMembers: number;
  votes: Array<{ venueId: string }>;
}): string | null {
  const majorityThreshold = Math.ceil(input.totalMembers / 2);

  if (input.votes.length < majorityThreshold) {
    return null;
  }

  const tallies = buildVoteTallies(input.candidateVenueIds, input.votes);
  let winnerVenueId: string | null = null;
  let winnerCount = -1;

  for (const tally of tallies) {
    if (tally.count > winnerCount) {
      winnerVenueId = tally.venueId;
      winnerCount = tally.count;
    }
  }

  return winnerVenueId;
}
