import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  decodeSessionPayload,
  encodeBytesToBase64Url,
  getAuthSecret,
  SESSION_COOKIE_NAME,
} from "@/lib/session";

const PUBLIC_PATHS = new Set(["/", "/favicon.ico", "/login", "/register"]);
const PUBLIC_ASSET_RE = /\.(?:png|jpe?g|svg|webp|gif|ico|css|js|woff2?|ttf|map|txt)$/i;

function isPublicPath(pathname: string): boolean {
  return (
    PUBLIC_PATHS.has(pathname) ||
    pathname.startsWith("/api/auth/") ||
    pathname === "/api/auth" ||
    pathname.startsWith("/_next/") ||
    PUBLIC_ASSET_RE.test(pathname)
  );
}

async function createSessionSignature(userId: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getAuthSecret()),
    {
      hash: "SHA-256",
      name: "HMAC",
    },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(userId));

  return encodeBytesToBase64Url(new Uint8Array(signature));
}

async function hasValidSession(request: NextRequest): Promise<boolean> {
  const payload = decodeSessionPayload(request.cookies.get(SESSION_COOKIE_NAME)?.value);

  if (!payload) {
    return false;
  }

  const expectedSignature = await createSessionSignature(payload.userId);
  return payload.signature === expectedSignature;
}

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const pathname = request.nextUrl.pathname;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  if (!isPublicPath(pathname) && !(await hasValidSession(request))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
