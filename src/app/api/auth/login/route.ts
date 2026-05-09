import { compare } from "bcrypt-ts";
import { NextResponse } from "next/server";

import { setSessionCookie } from "@/lib/auth";
import { loginInputSchema } from "@/lib/auth-inputs";
import { prisma } from "@/lib/prisma";

const INVALID_CREDENTIALS_MESSAGE = "Invalid email or password";

export async function POST(request: Request): Promise<Response> {
  const body: unknown = await request.json().catch(() => null);
  const parsed = loginInputSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: "Invalid login data" }, { status: 400 });
  }

  const email = parsed.data.email.trim().toLowerCase();
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      passwordHash: true,
    },
  });

  if (!user) {
    return NextResponse.json({ message: INVALID_CREDENTIALS_MESSAGE }, { status: 401 });
  }

  const passwordMatches = await compare(parsed.data.password, user.passwordHash);

  if (!passwordMatches) {
    return NextResponse.json({ message: INVALID_CREDENTIALS_MESSAGE }, { status: 401 });
  }

  setSessionCookie(user.id);

  return NextResponse.json({
    ok: true,
    redirect: "/",
  });
}
