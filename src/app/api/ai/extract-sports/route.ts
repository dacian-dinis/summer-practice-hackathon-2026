import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { z } from "zod";

const requestSchema = z.object({
  bio: z.string().max(2000),
});

import { ALLOWED_SPORTS } from "@/lib/sports";

const allowedSportSet = new Set<string>(ALLOWED_SPORTS);

const systemPrompt =
  'You extract sports from a user bio. Return ONLY a JSON array of sport names from this whitelist (case-sensitive): Football, Tennis, Basketball, Padel, Volleyball, Jogging, Cycling, Running, Yoga, Hiking. No prose, no markdown fences, just the array. Example: ["Tennis","Football"]. Empty array if no sports apply.';

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

async function extractSportsFromBio(bio: string): Promise<string[]> {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return [];
  }

  const anthropic = new Anthropic({ apiKey });
  const response = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 200,
    temperature: 0,
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: bio,
      },
    ],
  });

  const text = response.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("\n");

  return extractFirstJsonArray(text);
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = requestSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ sports: [] }, { status: 400 });
    }

    const result = await Promise.race<string[]>([
      extractSportsFromBio(parsed.data.bio),
      new Promise<string[]>((resolve) => {
        setTimeout(() => resolve([]), 6000);
      }),
    ]);

    return NextResponse.json({ sports: result });
  } catch (error) {
    console.error("extract-sports route error", error);
    return NextResponse.json({ sports: [] });
  }
}
