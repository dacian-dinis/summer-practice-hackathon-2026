import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const requestSchema = z.object({
  groupId: z.string().trim().min(1),
});

const aiResponseSchema = z.object({
  score: z.number().min(0).max(100),
  summary: z.string().transform((value) => value.slice(0, 90)),
});

const systemPrompt =
  'You assess how well a group of pickup-sports players will gel. Return JSON {"score": 0-100, "summary": "≤90 chars one-line vibe summary"}. Score weights: sport overlap 40%, skill spread 30%, bio personality match 30%. Output JSON only.';

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

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function computeSharedSportCount(
  players: Array<{
    sports: string[];
  }>,
): number {
  const counts = new Map<string, number>();

  players.forEach((player) => {
    new Set(player.sports).forEach((sport) => {
      counts.set(sport, (counts.get(sport) ?? 0) + 1);
    });
  });

  return Array.from(counts.values()).filter((count) => count > 1).length;
}

function computeSkillStddev(skills: number[]): number {
  if (skills.length === 0) {
    return 0;
  }

  const mean = skills.reduce((sum, skill) => sum + skill, 0) / skills.length;
  const variance =
    skills.reduce((sum, skill) => sum + (skill - mean) ** 2, 0) / skills.length;

  return Math.sqrt(variance);
}

function buildFallback(players: Array<{ sports: string[]; skill: number }>) {
  const sharedSportCount = computeSharedSportCount(players);
  const skillStddev = computeSkillStddev(players.map((player) => player.skill));
  const score = clamp(
    Math.round(sharedSportCount * 15 + (5 - skillStddev) * 8),
    30,
    90,
  );

  return {
    score,
    summary: "Solid mix — let's play!",
    fallback: true,
  };
}

async function getAiCompatibility(
  players: Array<{
    name: string;
    bio: string;
    skill: number;
    sports: string[];
  }>,
): Promise<{ score: number; summary: string } | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return null;
  }

  try {
    const anthropic = new Anthropic({ apiKey });
    const response = await Promise.race([
      anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 250,
        temperature: 0.3,
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: JSON.stringify(players),
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

    const parsed = aiResponseSchema.safeParse(extracted);

    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
}

export async function POST(request: Request): Promise<Response> {
  try {
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

    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const group = await prisma.group.findUnique({
      where: { id: parsedBody.data.groupId },
      include: {
        members: {
          include: {
            user: {
              include: {
                userSports: {
                  include: {
                    sport: true,
                  },
                },
              },
            },
          },
          orderBy: {
            user: {
              name: "asc",
            },
          },
        },
      },
    });

    if (!group) {
      return NextResponse.json({ message: "Group not found" }, { status: 404 });
    }

    const membership = group.members.find((member) => member.userId === currentUser.id);

    if (!membership) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const players = group.members.map((member) => ({
      name: member.user.name,
      bio: member.user.bio ?? "",
      skill: member.user.skill,
      sports: member.user.userSports.map((userSport) => userSport.sport.name),
    }));
    const aiCompatibility = await getAiCompatibility(players);

    if (!aiCompatibility) {
      return NextResponse.json(buildFallback(players));
    }

    return NextResponse.json({
      score: aiCompatibility.score,
      summary: aiCompatibility.summary,
      fallback: false,
    });
  } catch (error) {
    console.error("ai compatibility route error", error);
    return NextResponse.json(
      { message: "Unable to score group compatibility" },
      { status: 500 },
    );
  }
}
