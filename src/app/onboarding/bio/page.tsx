import { OnboardingBioForm } from "@/app/onboarding/onboarding-client";
import { OnboardingStepHeader } from "@/app/onboarding/shared";
import { getCurrentUser } from "@/lib/auth";
import { getDict } from "@/lib/i18n";
import { stripPlaytimesTag } from "@/lib/playtimes";
import { prisma } from "@/lib/prisma";

export default async function OnboardingBioPage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();
  const dict = getDict();

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
        description={dict["onb.bio.subhead"]}
        ofLabel={dict["onb.of"]}
        skipLabel={dict["onb.skip"]}
        step={2}
        stepLabel={dict["onb.step"]}
        title={dict["onb.bio.heading"]}
      />
      <OnboardingBioForm
        initialBio={stripPlaytimesTag(currentUser?.bio)}
        initialSportIds={userSports.map((item) => item.sportId)}
        labels={{
          back: dict["common.back"],
          cardBody: dict["onb.bio.cardBody"],
          cardTitle: dict["onb.bio.cardTitle"],
          detect: dict["onb.bio.detect"],
          detectHint: dict["onb.bio.detectHint"],
          emptySports: dict["onb.bio.emptySports"],
          placeholder: dict["onb.bio.placeholder"],
          previewBody: dict["onb.bio.previewBody"],
          previewTitle: dict["onb.bio.previewTitle"],
          submit: dict["onb.bio.submit"],
        }}
        sports={sports}
      />
    </div>
  );
}
