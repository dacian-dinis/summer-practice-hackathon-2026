import { prisma } from "@/lib/prisma";

export type NotificationKind =
  | "GROUP_MATCHED"
  | "POLL_POSTED"
  | "EVENT_CREATED"
  | "MEMBER_JOINED";

export type NotifyInput = {
  userId: string;
  kind: NotificationKind;
  title: string;
  body: string;
  link?: string;
};

export async function notify(inputs: NotifyInput | NotifyInput[]): Promise<void> {
  const data = (Array.isArray(inputs) ? inputs : [inputs]).map((input) => ({
    userId: input.userId,
    kind: input.kind,
    title: input.title,
    body: input.body,
    link: input.link ?? null,
  }));

  if (data.length === 0) {
    return;
  }

  try {
    await prisma.notification.createMany({ data });
  } catch {
    // notifications are best-effort; never break the calling flow
  }
}
