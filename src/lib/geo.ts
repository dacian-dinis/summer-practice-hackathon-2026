import "server-only";

import { headers } from "next/headers";

import { CITIES, DEFAULT_CITY, type City } from "@/lib/cities";

const ipCityCache = new Map<string, City>();

function normalizeForwardedIp(rawIp: string): string {
  const candidate = rawIp.trim();

  if (candidate.startsWith("::ffff:")) {
    return candidate.slice("::ffff:".length);
  }

  const ipv4WithPortMatch = candidate.match(/^(\d{1,3}(?:\.\d{1,3}){3})(?::\d+)?$/);

  return ipv4WithPortMatch?.[1] ?? candidate;
}

function extractForwardedIp(value: string | null): string | null {
  if (!value) {
    return null;
  }

  const [first] = value.split(",");

  if (!first) {
    return null;
  }

  const normalized = normalizeForwardedIp(first);

  if (!normalized || normalized.toLowerCase() === "unknown") {
    return null;
  }

  return normalized;
}

function isPrivateOrLocalhostIp(ip: string): boolean {
  const normalized = ip.toLowerCase();

  if (
    normalized === "::1" ||
    normalized === "0:0:0:0:0:0:0:1" ||
    normalized === "localhost"
  ) {
    return true;
  }

  if (
    normalized.startsWith("127.") ||
    normalized.startsWith("10.") ||
    normalized.startsWith("192.168.")
  ) {
    return true;
  }

  const private172Match = normalized.match(/^172\.(\d{1,2})\./);

  if (private172Match) {
    const secondOctet = Number(private172Match[1]);

    if (secondOctet >= 16 && secondOctet <= 31) {
      return true;
    }
  }

  return normalized.startsWith("fc") || normalized.startsWith("fd");
}

function normalizeCityName(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getCityFromName(name: string | null | undefined): City {
  const normalized = normalizeCityName(name ?? "");

  if (normalized === "bucharest" || normalized === "bucuresti") {
    return CITIES.bucharest;
  }

  if (normalized === "timisoara") {
    return CITIES.timisoara;
  }

  return CITIES[DEFAULT_CITY];
}

async function fetchCityForIp(ip: string): Promise<City> {
  const cachedCity = ipCityCache.get(ip);

  if (cachedCity) {
    return cachedCity;
  }

  try {
    const response = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/json/`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(1500),
    });

    if (!response.ok) {
      const fallbackCity = CITIES[DEFAULT_CITY];

      ipCityCache.set(ip, fallbackCity);

      return fallbackCity;
    }

    const payload: unknown = await response.json();
    const cityName =
      payload && typeof payload === "object" && "city" in payload && typeof payload.city === "string"
        ? payload.city
        : null;
    const city = getCityFromName(cityName);

    ipCityCache.set(ip, city);

    return city;
  } catch {
    const fallbackCity = CITIES[DEFAULT_CITY];

    ipCityCache.set(ip, fallbackCity);

    return fallbackCity;
  }
}

export async function resolveCity(): Promise<City> {
  try {
    const forwardedFor = headers().get("x-forwarded-for");
    const ip = extractForwardedIp(forwardedFor);

    if (!ip || isPrivateOrLocalhostIp(ip)) {
      return CITIES[DEFAULT_CITY];
    }

    return await fetchCityForIp(ip);
  } catch {
    return CITIES[DEFAULT_CITY];
  }
}
