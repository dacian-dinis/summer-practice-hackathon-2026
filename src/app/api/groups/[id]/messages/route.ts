import { NextResponse } from "next/server";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const createMessageSchema = z.object({
  text: z.string().trim().min(1).max(500),
});

type RouteContext = {
  params: {
    id: string;
  };
};

async function ensureMembership(groupId: string, userId: string): Promise<boolean> {
  const member = await prisma.groupMember.findUnique({
    where: {
      groupId_userId: {
        groupId,
        userId,
      },
    },
    select: {
      userId: true,
    },
  });

  return member !== null;
}

export async function GET(
  _request: Request,
  { params }: RouteContext,
): Promise<NextResponse> {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const isMember = await ensureMembership(params.id, currentUser.id);

  if (!isMember) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const messages = await prisma.message.findMany({
    where: {
      groupId: params.id,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return NextResponse.json({
    messages: messages.map((message) => ({
      id: message.id,
      userId: message.userId,
      userName: message.user.name,
      text: message.text,
      createdAt: message.createdAt.toISOString(),
    })),
  });
}

export async function POST(
  request: Request,
  { params }: RouteContext,
): Promise<NextResponse> {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const isMember = await ensureMembership(params.id, currentUser.id);

  if (!isMember) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const json: unknown = await request.json();
  const parsed = createMessageSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });
  }

  const message = await prisma.message.create({
    data: {
      groupId: params.id,
      userId: currentUser.id,
      text: parsed.data.text,
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  return NextResponse.json(
    {
      message: {
        id: message.id,
        userId: currentUser.id,
        userName: message.user.name,
        text: message.text,
        createdAt: message.createdAt.toISOString(),
      },
    },
    { status: 201 },
  );
}
