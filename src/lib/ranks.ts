export type Rank = { tier: string; emoji: string; min: number; color: string };

export const RANKS: Rank[] = [
  {
    tier: 'Rookie',
    emoji: '🌱',
    min: 0,
    color: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300',
  },
  {
    tier: 'Regular',
    emoji: '🔥',
    min: 3,
    color: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300',
  },
  {
    tier: 'Captain',
    emoji: '⭐',
    min: 8,
    color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
  },
  {
    tier: 'MVP',
    emoji: '🏆',
    min: 18,
    color: 'bg-bluebold text-white',
  },
  {
    tier: 'Legend',
    emoji: '👑',
    min: 35,
    color: 'bg-brand text-white',
  },
];

export function rankFor(confirmedEventsCount: number): Rank {
  const sorted = [...RANKS].sort((a, b) => a.min - b.min);
  let activeRank = sorted[0];

  for (const rank of sorted) {
    if (confirmedEventsCount >= rank.min) {
      activeRank = rank;
    }
  }

  return activeRank;
}
