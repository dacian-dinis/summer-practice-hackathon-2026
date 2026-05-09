import { hash } from "bcrypt-ts";
import { NextResponse } from "next/server";

import { setSessionCookie } from "@/lib/auth";
import { registerRouteInputSchema } from "@/lib/auth-inputs";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request): Promise<Response> {
  const body: unknown = await request.json().catch(() => null);
  const parsed = registerRouteInputSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: "Invalid registration data" }, { status: 400 });
  }

  const email = parsed.data.email.trim().toLowerCase();
  const existingUser = await prisma.user.findUnique({
    where: { email },
    select: { id: true },
  });

  if (existingUser) {
    return NextResponse.json({ message: "Email is already registered" }, { status: 409 });
  }

  const passwordHash = await hash(parsed.data.password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      name: parsed.data.name.trim(),
      onboardedAt: null,
      passwordHash,
    },
    select: {
      id: true,
    },
  });

  setSessionCookie(user.id);

  return NextResponse.json({
    ok: true,
    redirect: "/onboarding/profile",
  });
}
