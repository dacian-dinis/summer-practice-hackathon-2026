import type { Metadata } from "next";
import { Activity, Flame, Swords } from "lucide-react";

import { ProfileForm } from "@/app/client-components";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentUser } from "@/lib/auth";
import { getDict } from "@/lib/i18n";
import { prisma } from "@/lib/prisma";
import { rankFor, RANKS } from "@/lib/ranks";
import { stripPlaytimesTag } from "@/lib/playtimes";
import { todayDate } from "@/lib/today";

export const metadata: Metadata = {
  title: "Profile",
};

function rankLabel(tier: string, dict: Record<string, string>): string {
  const key = `rank.${tier.toLowerCase()}` as keyof typeof dict;
  return dict[key] ?? tier;
}

export default async function ProfilePage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();
  const today = todayDate();
  const dict = getDict();

  const [profileUser, sports, availabilityToday, pastEvents, confirmedEventsCount] = await Promise.all([
    currentUser
      ? prisma.user.findUnique({
          where: { id: currentUser.id },
          include: {
            userSports: {
              include: {
                sport: true,
              },
            },
          },
        })
      : Promise.resolve(null),
    prisma.sport.findMany({
      orderBy: { name: "asc" },
    }),
    currentUser
      ? prisma.availability.findMany({
          where: {
            userId: currentUser.id,
            date: today,
          },
          select: {
            sportId: true,
            status: true,
          },
        })
      : Promise.resolve([]),
    currentUser
      ? prisma.event.findMany({
          where: {
            startsAt: { lt: new Date(`${today}T00:00:00Z`) },
            group: { members: { some: { userId: currentUser.id } } },
          },
          include: {
            group: {
              include: {
                members: true,
              },
            },
          },
        })
      : Promise.resolve([]),
    currentUser
      ? prisma.event.count({
          where: {
            startsAt: { lt: new Date() },
            group: {
              members: {
                some: {
                  confirmed: true,
                  userId: currentUser.id,
                },
              },
            },
          },
        })
      : Promise.resolve(0),
  ]);

  if (!profileUser) {
    return (
      <Card className="rounded-md border-2 border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950">
        <CardHeader>
          <CardTitle>No users found</CardTitle>
        </CardHeader>
        <CardContent>Seed data is missing, so the demo profile cannot load.</CardContent>
      </Card>
    );
  }

  let confirmed = 0;
  let noshow = 0;

  for (const event of pastEvents) {
    const member = event.group.members.find((x) => x.userId === profileUser.id);

    if (!member) {
      continue;
    }

    if (member.confirmed) {
      confirmed += 1;
    } else {
      noshow += 1;
    }
  }

  const score = confirmed * 10 - noshow * 5;
  const rank = rankFor(confirmedEventsCount);
  const nextRank = RANKS.find((item) => item.min > confirmedEventsCount);
  const nextRankGames = nextRank ? nextRank.min - confirmedEventsCount : 0;

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <div className="font-mono-label text-sm text-neutral-500 dark:text-neutral-400">{dict["profile.eyebrow"]}</div>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-display text-3xl text-neutral-950 dark:text-neutral-50 sm:text-4xl">{profileUser.name}</h1>
          <Badge className={`${rank.color} rounded-md px-3 py-1 text-sm font-bold`} variant="secondary">
            {rank.emoji} {rankLabel(rank.tier, dict)}
          </Badge>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {dict["profile.rankCurrent"]}: {rankLabel(rank.tier, dict)}
          {nextRank ? ` · ${dict["profile.rankHint"]} ${nextRankGames} ${dict["profile.rankHintGames"]}` : ""}
        </p>
      </section>

      <Card className="rounded-md border-2 border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950">
        <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-display text-2xl text-neutral-900 dark:text-neutral-50">
                ⭐ {dict["profile.showupScore"]}: {score}
              </span>
              <Badge variant="secondary" className="rounded-md bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                {dict["profile.reliability"]}
              </Badge>
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              ✓ {confirmed} {dict["profile.attended"]} · ✕ {noshow} {dict["profile.noshows"]}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="rounded-md border-2 border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950">
          <CardContent className="flex items-center gap-3 p-5">
            <div className="rounded-md bg-emerald-100 p-2 text-emerald-700">
              <Swords className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">{dict["profile.sports"]}</div>
              <div className="text-2xl font-semibold">{profileUser.userSports.length}</div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-md border-2 border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950">
          <CardContent className="flex items-center gap-3 p-5">
            <div className="rounded-md bg-amber-100 p-2 text-amber-700">
              <Activity className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">{dict["profile.skill"]}</div>
              <div className="text-2xl font-semibold">{profileUser.skill}/5</div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-md border-2 border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950">
          <CardContent className="flex items-center gap-3 p-5">
            <div className="rounded-md bg-rose-100 p-2 text-rose-700">
              <Flame className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">{dict["profile.today"]}</div>
              <div className="mt-1 flex flex-wrap gap-2">
                {availabilityToday.length > 0 ? (
                  availabilityToday.map((item) => (
                    <Badge className="rounded-md" key={item.sportId} variant="secondary">
                      {item.status}
                    </Badge>
                  ))
                ) : (
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">{dict["profile.noStatus"]}</span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <ProfileForm
        availabilityToday={availabilityToday}
        initialBio={stripPlaytimesTag(profileUser.bio ?? "")}
        initialName={profileUser.name}
        initialPhotoUrl={profileUser.photoUrl}
        initialSkill={profileUser.skill}
        initialSportIds={profileUser.userSports.map((item) => item.sportId)}
        labels={{
          advanced: dict["profile.advanced"],
          beginner: dict["profile.beginner"],
          bioPlaceholder: dict["profile.bioPlaceholder"],
          detectBio: dict["profile.detectBio"],
          detectPhoto: dict["profile.detectPhoto"],
          editBio: dict["profile.editBio"],
          identity: dict["profile.identity"],
          level: dict["profile.level"],
          name: dict["profile.name"],
          namePlaceholder: dict["profile.namePlaceholder"],
          photoBody: dict["profile.photoBody"],
          photoTitle: dict["profile.photoTitle"],
          save: dict["profile.save"],
          selectedSports: dict["profile.selectedSports"],
          skill: dict["profile.skill"],
          skillBody: dict["profile.skillBody"],
          sports: dict["profile.sports"],
          subhead: dict["profile.subhead"],
          title: dict["profile.title"],
          today: dict["profile.today"],
          uploadPhoto: dict["profile.uploadPhoto"],
        }}
        sports={sports.map((sport) => ({
          id: sport.id,
          name: sport.name,
        }))}
      />
    </div>
  );
}
