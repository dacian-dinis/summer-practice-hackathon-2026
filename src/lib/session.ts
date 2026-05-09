export const SESSION_COOKIE_NAME = "session";
export const SESSION_COOKIE_MAX_AGE = 30 * 24 * 60 * 60;
const AUTH_SECRET_FALLBACK = "dev-only-secret-change-me";

let hasWarnedAboutAuthSecret = false;

function bytesToBinary(bytes: Uint8Array): string {
  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return binary;
}

function binaryToBytes(binary: string): Uint8Array {
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

function toBase64(binary: string): string {
  if (typeof btoa === "function") {
    return btoa(binary);
  }

  return Buffer.from(binary, "binary").toString("base64");
}

function fromBase64(value: string): string {
  if (typeof atob === "function") {
    return atob(value);
  }

  return Buffer.from(value, "base64").toString("binary");
}

export function getAuthSecret(): string {
  if (process.env.AUTH_SECRET) {
    return process.env.AUTH_SECRET;
  }

  if (!hasWarnedAboutAuthSecret) {
    console.warn('AUTH_SECRET is missing. Falling back to "dev-only-secret-change-me".');
    hasWarnedAboutAuthSecret = true;
  }

  return AUTH_SECRET_FALLBACK;
}

export function encodeStringToBase64Url(value: string): string {
  return encodeBytesToBase64Url(new TextEncoder().encode(value));
}

export function encodeBytesToBase64Url(bytes: Uint8Array): string {
  return toBase64(bytesToBinary(bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

export function decodeBase64UrlToString(value: string): string | null {
  try {
    const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    const padding = normalized.length % 4 === 0 ? "" : "=".repeat(4 - (normalized.length % 4));
    const bytes = binaryToBytes(fromBase64(`${normalized}${padding}`));
    return new TextDecoder().decode(bytes);
  } catch {
    return null;
  }
}

export function encodeSessionPayload(userId: string, signature: string): string {
  return encodeStringToBase64Url(`${userId}.${signature}`);
}

export function decodeSessionPayload(
  token: string | null | undefined,
): { signature: string; userId: string } | null {
  if (!token) {
    return null;
  }

  const decoded = decodeBase64UrlToString(token);

  if (!decoded) {
    return null;
  }

  const separatorIndex = decoded.lastIndexOf(".");

  if (separatorIndex <= 0 || separatorIndex === decoded.length - 1) {
    return null;
  }

  const userId = decoded.slice(0, separatorIndex);
  const signature = decoded.slice(separatorIndex + 1);

  if (!userId || !signature) {
    return null;
  }

  return { signature, userId };
}
