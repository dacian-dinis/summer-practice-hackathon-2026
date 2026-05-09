import type { User } from "@prisma/client";
import { cookies } from "next/headers";

import { prisma } from "@/lib/prisma";
import { slugifyUserName } from "@/lib/users";

export async function getCurrentUser(): Promise<User | null> {
  try {
    const cookieStore = cookies();
    const cookieValue = cookieStore.get("userId")?.value;
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "asc" },
    });

    if (cookieValue) {
      const userFromCookie =
        users.find((user) => user.id === cookieValue) ??
        users.find((user) => slugifyUserName(user.name) === cookieValue);

      if (userFromCookie) {
        return userFromCookie;
      }
    }

    return users[0] ?? null;
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
