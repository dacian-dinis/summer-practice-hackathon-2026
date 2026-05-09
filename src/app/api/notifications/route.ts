import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(): Promise<NextResponse> {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const items = await prisma.notification.findMany({
    where: { userId: currentUser.id },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  const unreadCount = await prisma.notification.count({
    where: { userId: currentUser.id, readAt: null },
  });

  return NextResponse.json({
    unreadCount,
    items: items.map((item) => ({
      id: item.id,
      kind: item.kind,
      title: item.title,
      body: item.body,
      link: item.link,
      readAt: item.readAt ? item.readAt.toISOString() : null,
      createdAt: item.createdAt.toISOString(),
    })),
  });
}

export async function POST(): Promise<NextResponse> {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await prisma.notification.updateMany({
    where: { userId: currentUser.id, readAt: null },
    data: { readAt: new Date() },
  });

  return NextResponse.json({ ok: true });
}
