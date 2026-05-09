export const SPORT_EMOJI: Record<string, string> = {
  Basketball: "🏀",
  Football: "⚽",
  Padel: "🎾",
  Tennis: "🎾",
  Volleyball: "🏐",
  Jogging: "🏃",
  Running: "🏃‍♂️",
  Cycling: "🚴",
  Yoga: "🧘",
  Hiking: "🥾",
};

export function sportEmoji(name: string): string {
  return SPORT_EMOJI[name] ?? "🏅";
}

export const ALLOWED_SPORTS = [
  "Football",
  "Tennis",
  "Basketball",
  "Padel",
  "Volleyball",
  "Jogging",
  "Cycling",
  "Running",
  "Yoga",
  "Hiking",
] as const;
