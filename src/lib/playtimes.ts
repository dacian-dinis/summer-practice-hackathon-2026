const PLAYTIMES_PATTERN = /\n\n\[playtimes:\s*([^[\]]*)\]\s*$/i;

export function stripPlaytimesTag(bio: string | null | undefined): string {
  return (bio ?? '').replace(PLAYTIMES_PATTERN, '').trim();
}

export function getPlaytimesFromBio(bio: string | null | undefined): string[] {
  const value = bio ?? '';
  const match = value.match(PLAYTIMES_PATTERN);

  if (!match) {
    return [];
  }

  return match[1]
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

export function mergeBioWithPlaytimes(
  bio: string | null | undefined,
  playtimes: string[],
): string | null {
  const cleanBio = stripPlaytimesTag(bio);
  const normalizedPlaytimes = Array.from(
    new Set(playtimes.map((item) => item.trim().toLowerCase()).filter(Boolean)),
  );

  if (normalizedPlaytimes.length === 0) {
    return cleanBio || null;
  }

  const suffix = `\n\n[playtimes: ${normalizedPlaytimes.join(',')}]`;
  const merged = `${cleanBio}${suffix}`.trim();
  return merged || null;
}
