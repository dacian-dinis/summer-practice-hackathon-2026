import { OnboardingBioForm } from "@/app/onboarding/onboarding-client";
import { OnboardingStepHeader } from "@/app/onboarding/shared";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function OnboardingBioPage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();

  const [sports, userSports] = await Promise.all([
    prisma.sport.findMany({
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
      },
    }),
    currentUser
      ? prisma.userSport.findMany({
          where: { userId: currentUser.id },
          select: {
            sportId: true,
          },
        })
      : Promise.resolve([]),
  ]);

  return (
    <div className="space-y-8">
      <OnboardingStepHeader
        description="Write a short bio, then let AI suggest the sports you probably want to play."
        step={2}
        title="Describe your game"
      />
      <OnboardingBioForm
        initialBio={currentUser?.bio ?? ""}
        initialSportIds={userSports.map((item) => item.sportId)}
        sports={sports}
      />
    </div>
  );
}
