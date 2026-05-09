import { Activity, Flame, Swords } from "lucide-react";

import { ProfileForm } from "@/app/client-components";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { todayDate } from "@/lib/today";

export default async function ProfilePage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();
  const today = todayDate();

  const [profileUser, sports, availabilityToday] = await Promise.all([
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

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-neutral-200 bg-white">
          <CardContent className="flex items-center gap-3 p-5">
            <div className="rounded-full bg-emerald-100 p-2 text-emerald-700">
              <Swords className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm text-neutral-500">Selected sports</div>
              <div className="text-2xl font-semibold">{profileUser.userSports.length}</div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-neutral-200 bg-white">
          <CardContent className="flex items-center gap-3 p-5">
            <div className="rounded-full bg-amber-100 p-2 text-amber-700">
              <Activity className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm text-neutral-500">Skill level</div>
              <div className="text-2xl font-semibold">{profileUser.skill}/5</div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-neutral-200 bg-white">
          <CardContent className="flex items-center gap-3 p-5">
            <div className="rounded-full bg-rose-100 p-2 text-rose-700">
              <Flame className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm text-neutral-500">Today</div>
              <div className="mt-1 flex flex-wrap gap-2">
                {availabilityToday.length > 0 ? (
                  availabilityToday.map((item) => (
                    <Badge key={item.sportId} variant="secondary">
                      {item.status}
                    </Badge>
                  ))
                ) : (
                  <span className="text-sm text-neutral-500">No status set yet</span>
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
