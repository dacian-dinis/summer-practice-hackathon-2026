import Link from "next/link";
import { notFound } from "next/navigation";

import { JoinGroupButton } from "@/app/g/[code]/join-button";
import { Avatar } from "@/components/avatar";
import { Logo } from "@/components/logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/auth";
import { getDict } from "@/lib/i18n";
import { prisma } from "@/lib/prisma";

const SPORT_EMOJI: Record<string, string> = {
  Basketball: "\u{1F3C0}",
  Football: "⚽",
  Padel: "\u{1F3BE}",
  Tennis: "\u{1F3BE}",
  Volleyball: "\u{1F3D0}",
};

function formatGroupDate(date: string): string {
  const parsed = new Date(`${date}T00:00:00`);

  return new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(parsed);
}

type SharePageProps = {
  params: { code: string };
};

export default async function SharePage({ params }: SharePageProps): Promise<JSX.Element> {
  const t = getDict();
  const group = await prisma.group.findUnique({
    where: { shareCode: params.code },
    include: {
      sport: true,
      captain: true,
      members: {
        include: { user: true },
        orderBy: { user: { name: "asc" } },
      },
      event: { include: { venue: true } },
    },
  });

  if (!group) {
    notFound();
  }

  const currentUser = await getCurrentUser();
  const isMember = currentUser ? group.members.some((member) => member.userId === currentUser.id) : false;
  const isFull = group.members.length >= group.sport.maxGroup;
  const isFinished = group.status === "DONE";

  return (
    <main className="min-h-screen bg-brand-cream px-4 py-10 dark:bg-neutral-950">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="flex justify-center">
          <Link aria-label="ShowUp2Move home" href="/">
            <Logo size="md" />
          </Link>
        </div>

        <div className="rounded-md border-2 border-brand-ink bg-white p-8 shadow-none dark:border-neutral-50 dark:bg-neutral-950">
          <div className="space-y-4">
            <div className="font-mono-label text-brand-ink/60 dark:text-neutral-400">{t["share.eyebrow"]}</div>
            <h1 className="font-display text-4xl leading-tight text-brand-ink dark:text-neutral-50 sm:text-5xl">
              {t["share.invitedToPlay"]} <span className="text-brand">{group.sport.name}</span>
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
              <Badge className="bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300" variant="secondary">
                {SPORT_EMOJI[group.sport.name] ?? "\u{1F3C5}"} {group.sport.name}
              </Badge>
              <span>·</span>
              <span>{formatGroupDate(group.date)}</span>
              <span>·</span>
              <span>Captain {group.captain.name} ⭐</span>
            </div>
          </div>

          {group.event && group.event.venue ? (
            <div className="mt-6 rounded-md border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="font-mono-label mb-1 text-brand-ink/60 dark:text-neutral-400">{t["share.venue"]}</div>
              <div className="font-semibold text-neutral-950 dark:text-neutral-50">{group.event.venue.name}</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">{group.event.venue.address}</div>
            </div>
          ) : null}

          <div className="mt-6">
            <div className="font-mono-label mb-3 text-brand-ink/60 dark:text-neutral-400">
              {t["share.members"]} · {group.members.length}/{group.sport.maxGroup}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.members.map((member) => (
                <div
                  className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900"
                  key={member.userId}
                >
                  <Avatar
                    className="h-6 w-6"
                    fallbackClassName="bg-neutral-200 text-[10px] font-semibold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100"
                    name={member.user.name}
                    src={member.user.photoUrl}
                  />
                  <span className="text-neutral-800 dark:text-neutral-200">
                    {member.user.name}
                    {member.userId === group.captainId ? " ⭐" : ""}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            {!currentUser ? (
              <div className="space-y-3">
                <Link href={`/register?next=/g/${params.code}`}>
                  <Button
                    className="min-h-11 w-full rounded-md bg-brand text-white hover:bg-brand-deep font-bold uppercase tracking-wider"
                    type="button"
                  >
                    {t["share.signupToJoin"]}
                  </Button>
                </Link>
                <Link className="block text-center text-sm text-neutral-600 hover:text-brand dark:text-neutral-400" href={`/login?next=/g/${params.code}`}>
                  {t["share.alreadyHaveAccount"]}
                </Link>
              </div>
            ) : isMember ? (
              <Link href={`/groups/${group.id}`}>
                <Button
                  className="min-h-11 w-full rounded-md bg-brand text-white hover:bg-brand-deep font-bold uppercase tracking-wider"
                  type="button"
                >
                  {t["share.openGroup"]}
                </Button>
              </Link>
            ) : isFinished ? (
              <Button className="min-h-11 w-full rounded-md" disabled type="button" variant="outline">
                {t["share.finished"]}
              </Button>
            ) : isFull ? (
              <Button className="min-h-11 w-full rounded-md" disabled type="button" variant="outline">
                {t["share.full"]}
              </Button>
            ) : (
              <JoinGroupButton groupId={group.id} label={t["share.joinGroup"]} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
