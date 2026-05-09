import { NextResponse } from "next/server";

import { clearSessionCookie } from "@/lib/auth";

export async function POST(): Promise<Response> {
  clearSessionCookie();

  return NextResponse.json({ ok: true });
}
