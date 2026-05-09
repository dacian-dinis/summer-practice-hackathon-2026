import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { resolveCity } from "@/lib/geo";

const requestSchema = z
  .object({
    groupId: z.string().min(1),
  })
  .strict();

const weatherResponseSchema = z.object({
  current_weather: z.object({
    temperature: z.number(),
    weathercode: z.number(),
    windspeed: z.number(),
  }),
});

const baseAiSystemPrompt =
  'You are a pickup-sports captain assistant. Given a sport, weather, and 3 candidate venues, return JSON {"ranked":[{"venueId":"...","reasoning":"..."}, ...3 items], "suggestedTime":"HH:MM", "draftMessage":"<=120 chars", "weatherNote":"<=60 chars"}. Pick venues that suit the weather (indoor when raining/cold, any when sunny). suggestedTime must be 18:00-20:00. Output JSON only, no prose, no markdown fences.';

const defaultWeatherSummary = "🌤️ pleasant";

function createAiResponseSchema(validVenueIds: Set<string>) {
  return z
    .object({
      ranked: z
        .array(
          z.object({
            venueId: z.string().min(1),
            reasoning: z.string().min(1),
          }),
        )
        .length(3),
      suggestedTime: z
        .string()
        .regex(/^[0-2]\d:\d{2}$/)
        .refine((value) => {
          const [hourText, minuteText] = value.split(":");
          const hour = Number(hourText);
          const minute = Number(minuteText);

          if (
            Number.isNaN(hour) ||
            Number.isNaN(minute) ||
            minute < 0 ||
            minute > 59
          ) {
            return false;
          }

          const totalMinutes = hour * 60 + minute;

          return totalMinutes >= 18 * 60 && totalMinutes <= 20 * 60;
        }),
      draftMessage: z.string().transform((s) => s.slice(0, 140)),
      weatherNote: z.string().transform((s) => s.slice(0, 80)),
    })
    .superRefine((value, context) => {
      const seenVenueIds = new Set<string>();

      value.ranked.forEach((item, index) => {
        if (!validVenueIds.has(item.venueId)) {
          context.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Unknown venueId",
            path: ["ranked", index, "venueId"],
          });
        }

        if (seenVenueIds.has(item.venueId)) {
          context.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Duplicate venueId",
            path: ["ranked", index, "venueId"],
          });
        }

        seenVenueIds.add(item.venueId);
      });
    });
}

function buildAiSystemPrompt(cityName: string): string {
  return `${baseAiSystemPrompt} The captain is in ${cityName}; prefer venues in ${cityName}.`;
}

function describeWind(windSpeed: number): string {
  if (windSpeed < 15) {
    return "light wind";
  }

  if (windSpeed < 30) {
    return "breezy";
  }

  return "windy";
}

function weatherEmoji(code: number): string {
  if (code === 0) {
    return "☀️";
  }

  if (code >= 1 && code <= 3) {
    return "⛅";
  }

  if (code >= 45 && code <= 48) {
    return "🌫️";
  }

  if (code >= 51 && code <= 67) {
    return "🌧️";
  }

  if (code >= 71 && code <= 77) {
    return "❄️";
  }

  if (code >= 80 && code <= 99) {
    return "⛈️";
  }

  return "🌤️";
}

function extractFirstJsonObject(input: string): unknown | null {
  const startIndex = input.indexOf("{");

  if (startIndex === -1) {
    return null;
  }

  for (let endIndex = startIndex + 1; endIndex <= input.length; endIndex += 1) {
    const candidate = input.slice(startIndex, endIndex);

    try {
      const parsed = JSON.parse(candidate);

      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return parsed;
      }
    } catch {
      continue;
    }
  }

  return null;
}

async function getWeatherSummary(lat: number, lng: number): Promise<string> {
  try {
    const weatherUrl = new URL("https://api.open-meteo.com/v1/forecast");

    weatherUrl.searchParams.set("latitude", String(lat));
    weatherUrl.searchParams.set("longitude", String(lng));
    weatherUrl.searchParams.set("current_weather", "true");
    weatherUrl.searchParams.set("timezone", "Europe/Bucharest");

    const response = await fetch(weatherUrl, {
      cache: "no-store",
      signal: AbortSignal.timeout(1500),
    });

    if (!response.ok) {
      return defaultWeatherSummary;
    }

    const json: unknown = await response.json();
    const parsed = weatherResponseSchema.safeParse(json);

    if (!parsed.success) {
      return defaultWeatherSummary;
    }

    const { temperature, weathercode, windspeed } = parsed.data.current_weather;

    return `${weatherEmoji(weathercode)} ${Math.round(temperature)}°C, ${describeWind(windspeed)}`;
  } catch {
    return defaultWeatherSummary;
  }
}

async function getAiSuggestion(input: {
  sport: string;
  weatherSummary: string;
  cityName: string;
  venues: Array<{
    venueId: string;
    name: string;
    address: string;
    pricePerHour: number;
  }>;
}) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return null;
  }

  try {
    const anthropic = new Anthropic({ apiKey });
    const response = await Promise.race([
      anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        temperature: 0.3,
        system: buildAiSystemPrompt(input.cityName),
        messages: [
          {
            role: "user",
            content: JSON.stringify({
              sport: input.sport,
              weatherSummary: input.weatherSummary,
              venues: input.venues,
            }),
          },
        ],
      }),
      new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("Anthropic timeout")), 8000);
      }),
    ]);

    const text = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n");

    const extracted = extractFirstJsonObject(text);

    if (!extracted) {
      return null;
    }

    const parsed = createAiResponseSchema(
      new Set(input.venues.map((venue) => venue.venueId)),
    ).safeParse(extracted);

    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
}

function buildFallback(input: {
  sport: string;
  weatherSummary: string;
  venues: Array<{
    id: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    pricePerHour: number;
  }>;
}) {
  return {
    ranked: input.venues.slice(0, 3).map((venue) => ({
      venueId: venue.id,
      name: venue.name,
      address: venue.address,
      lat: venue.lat,
      lng: venue.lng,
      pricePerHour: venue.pricePerHour,
      reasoning: `Solid pick for ${input.sport}.`,
    })),
    suggestedTime: "19:00",
    draftMessage: "Tonight at 19:00 - let's play!",
    weatherNote: input.weatherSummary || "Mild ☀️",
    fallback: true,
  };
}

export async function POST(request: Request): Promise<Response> {
  try {
    const city = await resolveCity();
    const rawBody = await request.text();
    let json: unknown = null;

    if (rawBody.trim().length > 0) {
      try {
        json = JSON.parse(rawBody);
      } catch {
        return NextResponse.json(
          { message: "Invalid request body" },
          { status: 400 },
        );
      }
    }

    const parsedBody = requestSchema.safeParse(json);

    if (!parsedBody.success) {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 },
      );
    }

    const [currentUser, group] = await Promise.all([
      getCurrentUser(),
      prisma.group.findUnique({
        where: { id: parsedBody.data.groupId },
        include: { sport: true, captain: true },
      }),
    ]);

    if (!group) {
      return NextResponse.json({ message: "Group not found" }, { status: 404 });
    }

    if (!currentUser || currentUser.id !== group.captainId) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const prioritizedVenueRows = await prisma.venueSport.findMany({
      where: {
        sportId: group.sportId,
        venue: {
          city: city.slug,
        },
      },
      include: { venue: true },
      take: 3,
    });
    const prioritizedVenues = prioritizedVenueRows.map((row) => row.venue);

    const fallbackVenues =
      prioritizedVenues.length < 3
        ? await prisma.venue.findMany({
            where: {
              id: {
                notIn: prioritizedVenues.map((venue) => venue.id),
              },
            },
            take: 3 - prioritizedVenues.length,
          })
        : [];

    const venues = [...prioritizedVenues, ...fallbackVenues];

    if (venues.length < 3) {
      return NextResponse.json(
        { message: "Not enough venues available" },
        { status: 500 },
      );
    }

    const weatherSummary = await getWeatherSummary(city.lat, city.lng);
    const aiSuggestion = await getAiSuggestion({
      sport: group.sport.name,
      weatherSummary,
      cityName: city.name,
      venues: venues.map((venue) => ({
        venueId: venue.id,
        name: venue.name,
        address: venue.address,
        pricePerHour: venue.pricePerHour,
      })),
    });

    if (!aiSuggestion) {
      return NextResponse.json(
        buildFallback({
          sport: group.sport.name,
          weatherSummary,
          venues,
        }),
      );
    }

    const venueById = new Map(venues.map((venue) => [venue.id, venue]));
    const ranked = aiSuggestion.ranked.map((item) => {
      const venue = venueById.get(item.venueId);

      if (!venue) {
        throw new Error("AI selected an unknown venue");
      }

      return {
        venueId: venue.id,
        name: venue.name,
        address: venue.address,
        lat: venue.lat,
        lng: venue.lng,
        pricePerHour: venue.pricePerHour,
        reasoning: item.reasoning,
      };
    });

    return NextResponse.json({
      ranked,
      suggestedTime: aiSuggestion.suggestedTime,
      draftMessage: aiSuggestion.draftMessage,
      weatherNote: aiSuggestion.weatherNote,
      fallback: false,
    });
  } catch (error) {
    console.error("ai copilot route error", error);
    return NextResponse.json(
      { message: "Unable to generate copilot suggestion" },
      { status: 500 },
    );
  }
}
