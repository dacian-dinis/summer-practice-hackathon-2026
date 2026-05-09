import type { User } from "@prisma/client";
import { cookies } from "next/headers";

import { prisma } from "@/lib/prisma";

function capitalizeSlug(slug: string): string {
  if (!slug) {
    return slug;
  }

  return slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase();
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const cookieStore = cookies();
    const cookieValue = cookieStore.get("userId")?.value;

    if (cookieValue) {
      const userFromCookie = await prisma.user.findUnique({
        where: { name: capitalizeSlug(cookieValue) },
      });

      if (userFromCookie) {
        return userFromCookie;
      }
    }

    return await prisma.user.findFirst({
      orderBy: { createdAt: "asc" },
    });
  } catch {
    try {
      return await prisma.user.findFirst({
        orderBy: { createdAt: "asc" },
      });
    } catch {
      return null;
    }
  }
}
