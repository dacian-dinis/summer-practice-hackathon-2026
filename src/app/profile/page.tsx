import type { Metadata } from "next";
import { Activity, Flame, Swords } from "lucide-react";

import { ProfileForm } from "@/app/client-components";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { todayDate } from "@/lib/today";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function ProfilePage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();
  const today = todayDate();

  const [profileUser, sports, availabilityToday, pastEvents] = await Promise.all([
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
  ]);

  if (!profileUser) {
    return (
      <Card>
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

  return (
    <div className="space-y-6">
      <Card className="border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
        <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                &#11088; ShowUp Score: {score}
              </span>
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                Reliability
              </Badge>
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              &#10003; {confirmed} attended &middot; &#10007; {noshow} no-shows
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
          <CardContent className="flex items-center gap-3 p-5">
            <div className="rounded-full bg-emerald-100 p-2 text-emerald-700">
              <Swords className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Selected sports</div>
              <div className="text-2xl font-semibold">{profileUser.userSports.length}</div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
          <CardContent className="flex items-center gap-3 p-5">
            <div className="rounded-full bg-amber-100 p-2 text-amber-700">
              <Activity className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Skill level</div>
              <div className="text-2xl font-semibold">{profileUser.skill}/5</div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
          <CardContent className="flex items-center gap-3 p-5">
            <div className="rounded-full bg-rose-100 p-2 text-rose-700">
              <Flame className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Today</div>
              <div className="mt-1 flex flex-wrap gap-2">
                {availabilityToday.length > 0 ? (
                  availabilityToday.map((item) => (
                    <Badge key={item.sportId} variant="secondary">
                      {item.status}
                    </Badge>
                  ))
                ) : (
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">No status set yet</span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <ProfileForm
        availabilityToday={availabilityToday}
        initialBio={profileUser.bio ?? ""}
        initialName={profileUser.name}
        initialPhotoUrl={profileUser.photoUrl}
        initialSkill={profileUser.skill}
        initialSportIds={profileUser.userSports.map((item) => item.sportId)}
        sports={sports.map((sport) => ({
          id: sport.id,
          name: sport.name,
        }))}
      />
    </div>
  );
}
