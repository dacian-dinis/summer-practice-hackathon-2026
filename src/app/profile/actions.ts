"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import { getPlaytimesFromBio, mergeBioWithPlaytimes } from "@/lib/playtimes";
import { prisma } from "@/lib/prisma";

const saveProfileSchema = z.object({
  name: z.string().trim().min(1).max(60),
  bio: z.string().trim().max(500),
  skill: z.number().int().min(1).max(5),
  photoUrl: z.union([z.string().max(800_000), z.null()]),
  sportIds: z.array(z.string().min(1)),
});

export type SaveProfileInput = z.infer<typeof saveProfileSchema>;

export async function saveProfile(
  input: SaveProfileInput,
): Promise<{ ok: boolean; error?: string }> {
  const parsed = saveProfileSchema.safeParse(input);

  if (!parsed.success) {
    return { ok: false, error: "Invalid profile data" };
  }

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return { ok: false, error: "No user available" };
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: { id: currentUser.id },
        data: {
          name: parsed.data.name,
          bio: mergeBioWithPlaytimes(parsed.data.bio, getPlaytimesFromBio(currentUser.bio)),
          skill: parsed.data.skill,
          photoUrl: parsed.data.photoUrl,
        },
      });

      await tx.userSport.deleteMany({
        where: { userId: currentUser.id },
      });

      if (parsed.data.sportIds.length > 0) {
        await tx.userSport.createMany({
          data: parsed.data.sportIds.map((sportId) => ({
            userId: currentUser.id,
            sportId,
          })),
        });
      }
    });

    revalidatePath("/");
    revalidatePath("/profile");
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not save profile" };
  }
}
