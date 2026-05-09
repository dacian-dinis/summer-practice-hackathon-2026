import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { notify } from "@/lib/notifications";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: { id: string };
};

export async function POST(_request: Request, { params }: RouteContext): Promise<NextResponse> {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const group = await prisma.group.findUnique({
    where: { id: params.id },
    select: {
      id: true,
      sportId: true,
      captainId: true,
      status: true,
      sport: { select: { maxGroup: true, name: true } },
      members: { select: { userId: true } },
    },
  });

  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  if (group.status === "DONE") {
    return NextResponse.json({ error: "Group is already finished" }, { status: 409 });
  }

  if (group.members.some((member) => member.userId === currentUser.id)) {
    return NextResponse.json({ ok: true, alreadyMember: true, groupId: group.id });
  }

  if (group.members.length >= group.sport.maxGroup) {
    return NextResponse.json({ error: "Group is full" }, { status: 409 });
  }

  await prisma.groupMember.create({
    data: {
      groupId: group.id,
      userId: currentUser.id,
      confirmed: false,
    },
  });

  await notify({
    userId: group.captainId,
    kind: "MEMBER_JOINED",
    title: "New member joined",
    body: `${currentUser.name} joined your ${group.sport.name} group via shared link.`,
    link: `/groups/${group.id}`,
  });

  revalidatePath(`/groups/${group.id}`);

  return NextResponse.json({ ok: true, groupId: group.id });
}
