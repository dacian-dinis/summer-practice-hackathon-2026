import { OnboardingTimesForm } from "@/app/onboarding/onboarding-client";
import { OnboardingStepHeader } from "@/app/onboarding/shared";
import { getCurrentUser } from "@/lib/auth";
import { getDict } from "@/lib/i18n";
import { getPlaytimesFromBio } from "@/lib/playtimes";

export default async function OnboardingTimesPage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();
  const dict = getDict();

  return (
    <div className="space-y-8">
      <OnboardingStepHeader
        description={dict["onb.times.subhead"]}
        ofLabel={dict["onb.of"]}
        skipLabel={dict["onb.skip"]}
        step={4}
        stepLabel={dict["onb.step"]}
        title={dict["onb.times.heading"]}
      />
      <OnboardingTimesForm
        initialPlaytimes={getPlaytimesFromBio(currentUser?.bio)}
        labels={{
          afternoon: dict["onb.times.afternoon"],
          back: dict["common.back"],
          evening: dict["onb.times.evening"],
          lunch: dict["onb.times.lunch"],
          morning: dict["onb.times.morning"],
          submit: dict["onb.times.submit"],
          weekends: dict["onb.times.weekends"],
        }}
      />
    </div>
  );
}
