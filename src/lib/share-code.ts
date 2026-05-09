import { randomBytes } from "node:crypto";

import { prisma } from "@/lib/prisma";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function generateCode(): string {
  const bytes = randomBytes(8);
  let result = "";

  for (let i = 0; i < bytes.length; i += 1) {
    result += ALPHABET[bytes[i] % ALPHABET.length];
  }

  return result;
}

export async function ensureGroupShareCode(groupId: string): Promise<string> {
  const existing = await prisma.group.findUnique({
    where: { id: groupId },
    select: { shareCode: true },
  });

  if (existing?.shareCode) {
    return existing.shareCode;
  }

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const code = generateCode();

    try {
      const updated = await prisma.group.update({
        where: { id: groupId },
        data: { shareCode: code },
        select: { shareCode: true },
      });

      if (updated.shareCode) {
        return updated.shareCode;
      }
    } catch {
      // collision — retry
    }
  }

  throw new Error("Could not allocate share code");
}
