import type { User } from "@/generated/prisma";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

import { prisma } from "@/lib/prisma";
import {
  decodeSessionPayload,
  encodeSessionPayload,
  getAuthSecret,
  SESSION_COOKIE_MAX_AGE,
  SESSION_COOKIE_NAME,
} from "@/lib/session";

function createSessionSignature(userId: string): string {
  return createHmac("sha256", getAuthSecret()).update(userId).digest("base64url");
}

function signaturesMatch(actual: string, expected: string): boolean {
  const actualBuffer = Buffer.from(actual, "utf8");
  const expectedBuffer = Buffer.from(expected, "utf8");

  if (actualBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(actualBuffer, expectedBuffer);
}

export function signSession(userId: string): string {
  return encodeSessionPayload(userId, createSessionSignature(userId));
}

export function verifySession(token: string | null | undefined): string | null {
  const payload = decodeSessionPayload(token);

  if (!payload) {
    return null;
  }

  const expectedSignature = createSessionSignature(payload.userId);

  return signaturesMatch(payload.signature, expectedSignature) ? payload.userId : null;
}

export function setSessionCookie(userId: string): void {
  cookies().set(SESSION_COOKIE_NAME, signSession(userId), {
    httpOnly: true,
    maxAge: SESSION_COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax",
  });
}

export function clearSessionCookie(): void {
  cookies().delete(SESSION_COOKIE_NAME);
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const cookieStore = cookies();
    const userId = verifySession(cookieStore.get(SESSION_COOKIE_NAME)?.value);

    if (!userId) {
      return null;
    }

    return await prisma.user.findUnique({
      where: { id: userId },
    });
  } catch {
    return null;
  }
}
