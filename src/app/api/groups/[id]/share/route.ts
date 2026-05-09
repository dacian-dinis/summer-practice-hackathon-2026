import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ensureGroupShareCode } from "@/lib/share-code";

type RouteContext = {
  params: { id: string };
};

export async function POST(_request: Request, { params }: RouteContext): Promise<NextResponse> {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const member = await prisma.groupMember.findUnique({
    where: {
      groupId_userId: {
        groupId: params.id,
        userId: currentUser.id,
      },
    },
    select: { groupId: true },
  });

  if (!member) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const code = await ensureGroupShareCode(params.id);

  return NextResponse.json({ code, url: `/g/${code}` });
}
