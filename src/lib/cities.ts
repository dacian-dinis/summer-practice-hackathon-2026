export type CitySlug = "bucharest" | "timisoara";

export type City = {
  slug: CitySlug;
  name: string;
  lat: number;
  lng: number;
};

export const CITIES: Record<CitySlug, City> = {
  bucharest: {
    slug: "bucharest",
    name: "Bucharest",
    lat: 44.4268,
    lng: 26.1025,
  },
  timisoara: {
    slug: "timisoara",
    name: "Timișoara",
    lat: 45.7489,
    lng: 21.2087,
  },
};

export const DEFAULT_CITY: CitySlug = "timisoara";

export function isCitySlug(s: string): s is CitySlug {
  return Object.prototype.hasOwnProperty.call(CITIES, s);
}
