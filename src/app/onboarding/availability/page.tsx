import {
  OnboardingAvailabilityList,
  OnboardingFinishButton,
} from "@/app/onboarding/onboarding-client";
import { OnboardingStepHeader } from "@/app/onboarding/shared";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { todayDate } from "@/lib/today";

export default async function OnboardingAvailabilityPage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();

  const user =
    currentUser &&
    (await prisma.user.findUnique({
      where: { id: currentUser.id },
      include: {
        userSports: {
          include: {
            sport: true,
          },
        },
      },
    }));

  const availabilityToday =
    user && user.userSports.length > 0
      ? await prisma.availability.findMany({
          where: {
            userId: user.id,
            date: todayDate(),
            sportId: {
              in: user.userSports.map((item) => item.sportId),
            },
          },
          select: {
            sportId: true,
            status: true,
          },
        })
      : [];

  const availabilityBySportId = new Map<string, "YES" | "NO" | null>(
    availabilityToday.map(
      (item): [string, "YES" | "NO" | null] => [
        item.sportId,
        item.status === "YES" || item.status === "NO" ? item.status : null,
      ],
    ),
  );

  return (
    <div className="space-y-8">
      <OnboardingStepHeader
        description="Mark what you would actually play today so the matching flow starts with real availability."
        step={3}
        title="Set today's availability"
      />
      {user && user.userSports.length > 0 ? (
        <OnboardingAvailabilityList
          items={user.userSports.map((item) => ({
            sportId: item.sportId,
            sportName: item.sport.name,
            status: availabilityBySportId.get(item.sportId) ?? null,
          }))}
        />
      ) : (
        <Card className="border-dashed border-neutral-300 bg-neutral-50">
          <CardHeader>
            <CardTitle>No sports selected yet</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-neutral-600">
            Go back and add at least one sport if you want availability matching to be useful.
          </CardContent>
        </Card>
      )}
      <OnboardingFinishButton />
    </div>
  );
}
