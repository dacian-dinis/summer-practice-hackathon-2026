"use server";

import { cookies } from "next/headers";
import { isUserName, slugifyUser } from "@/lib/users";

export async function switchUserAction(formData: FormData): Promise<void> {
  const rawValue = formData.get("userId");

  if (typeof rawValue !== "string" || !isUserName(rawValue)) {
    return;
  }

  cookies().set("userId", slugifyUser(rawValue), {
    path: "/",
    sameSite: "lax",
  });
}
