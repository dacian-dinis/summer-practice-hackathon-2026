import {
  OnboardingAvailabilityList,
  OnboardingFinishButton,
} from "@/app/onboarding/onboarding-client";
import { OnboardingStepHeader } from "@/app/onboarding/shared";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentUser } from "@/lib/auth";
import { getDict } from "@/lib/i18n";
import { prisma } from "@/lib/prisma";
import { todayDate } from "@/lib/today";

export default async function OnboardingAvailabilityPage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();
  const dict = getDict();

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
        description={dict["onb.availability.subhead"]}
        ofLabel={dict["onb.of"]}
        skipLabel={dict["onb.skip"]}
        step={5}
        stepLabel={dict["onb.step"]}
        title={dict["onb.availability.heading"]}
      />
      {user && user.userSports.length > 0 ? (
        <OnboardingAvailabilityList
          descriptionLabel={dict["onb.availability.cardBody"]}
          items={user.userSports.map((item) => ({
            sportId: item.sportId,
            sportName: item.sport.name,
            status: availabilityBySportId.get(item.sportId) ?? null,
          }))}
        />
      ) : (
        <Card className="rounded-md border-2 border-dashed border-brand-ink bg-neutral-50 shadow-none dark:border-neutral-50 dark:bg-neutral-950">
          <CardHeader>
            <CardTitle>{dict["onb.availability.emptyTitle"]}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-neutral-600 dark:text-neutral-400">
            {dict["onb.availability.emptyBody"]}
          </CardContent>
        </Card>
      )}
      <OnboardingFinishButton
        backHref="/onboarding/times"
        backLabel={dict["common.back"]}
        finishLabel={dict["onb.finish"]}
      />
    </div>
  );
}
