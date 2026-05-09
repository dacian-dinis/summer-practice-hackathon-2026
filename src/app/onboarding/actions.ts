"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import { getPlaytimesFromBio, mergeBioWithPlaytimes } from "@/lib/playtimes";
import { prisma } from "@/lib/prisma";

const profileSchema = z.object({
  name: z.string().trim().min(1).max(60),
});

const bioSchema = z.object({
  bio: z.string().trim().max(500),
  sportIds: z.array(z.string().min(1)),
});

const skillSchema = z.object({
  skill: z.number().int().min(1).max(5),
});

const timesSchema = z.object({
  playtimes: z.array(
    z.enum(["mornings", "lunch", "afternoons", "evenings", "weekends"]),
  ),
});

async function markUserOnboarded(userId: string): Promise<void> {
  await prisma.user.update({
    where: { id: userId },
    data: {
      onboardedAt: new Date(),
    },
  });

  revalidatePath("/");
  revalidatePath("/profile");
  revalidatePath("/groups");
}

export async function saveOnboardingProfile(input: {
  name: string;
}): Promise<{ ok: boolean; error?: string }> {
  const parsed = profileSchema.safeParse(input);

  if (!parsed.success) {
    return { ok: false, error: "Enter a valid name." };
  }

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return { ok: false, error: "No user available." };
  }

  try {
    await prisma.user.update({
      where: { id: currentUser.id },
      data: {
        name: parsed.data.name,
      },
    });

    revalidatePath("/");
    revalidatePath("/profile");
    revalidatePath("/onboarding/profile");
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not save your name." };
  }
}

export async function saveOnboardingBio(input: {
  bio: string;
  sportIds: string[];
}): Promise<{ ok: boolean; error?: string }> {
  const parsed = bioSchema.safeParse(input);

  if (!parsed.success) {
    return { ok: false, error: "Enter a valid bio and sport list." };
  }

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return { ok: false, error: "No user available." };
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: { id: currentUser.id },
        data: {
          bio: mergeBioWithPlaytimes(
            parsed.data.bio,
            getPlaytimesFromBio(currentUser.bio),
          ),
        },
      });

      await tx.userSport.deleteMany({
        where: { userId: currentUser.id },
      });

      if (parsed.data.sportIds.length > 0) {
        await tx.userSport.createMany({
          data: Array.from(new Set(parsed.data.sportIds)).map((sportId) => ({
            userId: currentUser.id,
            sportId,
          })),
        });
      }
    });

    revalidatePath("/");
    revalidatePath("/profile");
    revalidatePath("/onboarding/bio");
    revalidatePath("/onboarding/skill");
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not save your bio." };
  }
}

export async function saveOnboardingSkill(input: {
  skill: number;
}): Promise<{ ok: boolean; error?: string }> {
  const parsed = skillSchema.safeParse(input);

  if (!parsed.success) {
    return { ok: false, error: "Choose a valid skill level." };
  }

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return { ok: false, error: "No user available." };
  }

  try {
    await prisma.user.update({
      where: { id: currentUser.id },
      data: {
        skill: parsed.data.skill,
      },
    });

    revalidatePath("/");
    revalidatePath("/profile");
    revalidatePath("/onboarding/skill");
    revalidatePath("/onboarding/times");
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not save your skill." };
  }
}

export async function saveOnboardingTimes(input: {
  playtimes: string[];
}): Promise<{ ok: boolean; error?: string }> {
  const parsed = timesSchema.safeParse(input);

  if (!parsed.success) {
    return { ok: false, error: "Choose at least one valid time." };
  }

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return { ok: false, error: "No user available." };
  }

  try {
    await prisma.user.update({
      where: { id: currentUser.id },
      data: {
        bio: mergeBioWithPlaytimes(
          currentUser.bio,
          parsed.data.playtimes,
        ),
      },
    });

    revalidatePath("/");
    revalidatePath("/profile");
    revalidatePath("/onboarding/times");
    revalidatePath("/onboarding/availability");
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not save your play times." };
  }
}

export async function finishOnboarding(): Promise<{ ok: boolean; error?: string }> {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return { ok: false, error: "No user available." };
  }

  try {
    await markUserOnboarded(currentUser.id);
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not finish onboarding." };
  }
}

export async function skipOnboarding(): Promise<never> {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    await markUserOnboarded(currentUser.id);
  }

  redirect("/");
}
