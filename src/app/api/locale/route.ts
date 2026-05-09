import { NextResponse } from "next/server";

import { LOCALE_COOKIE, SUPPORTED_LOCALES, type Locale } from "@/lib/i18n";

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json().catch(() => ({}))) as { locale?: string };
  const candidate = body.locale;

  if (!candidate || !SUPPORTED_LOCALES.includes(candidate as Locale)) {
    return NextResponse.json({ error: "Unsupported locale" }, { status: 400 });
  }

  const response = NextResponse.json({ ok: true, locale: candidate });
  response.cookies.set(LOCALE_COOKIE, candidate, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return response;
}
