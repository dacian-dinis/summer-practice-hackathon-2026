import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: {
    id: string;
  };
};

export async function POST(
  _request: Request,
  { params }: RouteContext,
): Promise<NextResponse> {
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
    select: {
      confirmed: true,
    },
  });

  if (!member) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const updatedMember = await prisma.groupMember.update({
    where: {
      groupId_userId: {
        groupId: params.id,
        userId: currentUser.id,
      },
    },
    data: {
      confirmed: !member.confirmed,
    },
    select: {
      confirmed: true,
    },
  });

  revalidatePath("/groups");
  revalidatePath(`/groups/${params.id}`);

  return NextResponse.json({ confirmed: updatedMember.confirmed });
}
