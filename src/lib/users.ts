export const USER_NAMES = [
  "Andrei",
  "Maria",
  "Radu",
  "Ioana",
  "Mihai",
  "Elena",
  "Cristian",
  "Alexandra",
] as const;

export type UserName = (typeof USER_NAMES)[number];

export function slugifyUserName(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

export function slugifyUser(name: UserName): string {
  return slugifyUserName(name);
}

export function isUserName(value: string): value is UserName {
  return (USER_NAMES as readonly string[]).includes(value);
}

export function getUserNameFromSlug(slug: string): UserName {
  const matchedUser = USER_NAMES.find((name) => slugifyUserName(name) === slug);
  return matchedUser ?? USER_NAMES[0];
}
