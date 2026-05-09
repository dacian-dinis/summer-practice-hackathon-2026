import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { z } from "zod";

const requestSchema = z
  .object({
    photoDataUrl: z.string().startsWith("data:image/").max(800_000),
  })
  .strict();

import { ALLOWED_SPORTS } from "@/lib/sports";

const allowedSportSet = new Set<string>(ALLOWED_SPORTS);
const imageMediaTypeSchema = z.enum([
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
]);

function extractFirstJsonArray(input: string): string[] {
  const startIndex = input.indexOf("[");

  if (startIndex === -1) {
    return [];
  }

  for (let endIndex = startIndex + 1; endIndex <= input.length; endIndex += 1) {
    const candidate = input.slice(startIndex, endIndex);

    try {
      const parsed = JSON.parse(candidate);

      if (!Array.isArray(parsed)) {
        continue;
      }

      return Array.from(
        new Set(
          parsed.filter(
            (value): value is string =>
              typeof value === "string" && allowedSportSet.has(value),
          ),
        ),
      );
    } catch {
      continue;
    }
  }

  return [];
}

async function detectSportsFromPhoto(photoDataUrl: string): Promise<string[]> {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return [];
  }

  const matches = /^data:(image\/[a-zA-Z0-9.+-]+);base64,([A-Za-z0-9+/=]+)$/.exec(photoDataUrl);

  if (!matches) {
    return [];
  }

  const mediaType = imageMediaTypeSchema.safeParse(matches[1]);

  if (!mediaType.success) {
    return [];
  }

  const base64Data = matches[2];
  const anthropic = new Anthropic({ apiKey });
  const response = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 100,
    temperature: 0,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            source: {
              type: "base64",
              media_type: mediaType.data,
              data: base64Data,
            },
          },
          {
            type: "text",
            text: "What sports does this person play, judging by the photo? Reply with ONLY a JSON array of names from this whitelist (case-sensitive): Football, Tennis, Basketball, Padel, Volleyball, Jogging, Cycling, Running, Yoga, Hiking. Empty array if unclear.",
          },
        ],
      },
    ],
  });

  const text = response.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("\n");

  return extractFirstJsonArray(text);
}

export async function POST(request: Request): Promise<Response> {
  try {
    const json = await request.json();
    const parsed = requestSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ sports: [] });
    }

    const sports = await Promise.race<string[]>([
      detectSportsFromPhoto(parsed.data.photoDataUrl),
      new Promise<string[]>((resolve) => {
        setTimeout(() => resolve([]), 7000);
      }),
    ]);

    return NextResponse.json({ sports });
  } catch (error) {
    console.error("extract-sports-from-photo route error", error);
    return NextResponse.json({ sports: [] });
  }
}
