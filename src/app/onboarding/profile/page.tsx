import { OnboardingProfileForm } from "@/app/onboarding/onboarding-client";
import { OnboardingStepHeader } from "@/app/onboarding/shared";
import { getCurrentUser } from "@/lib/auth";
import { getDict } from "@/lib/i18n";

export default async function OnboardingProfilePage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();
  const dict = getDict();

  return (
    <div className="space-y-8">
      <OnboardingStepHeader
        description={dict["onb.profile.subhead"]}
        ofLabel={dict["onb.of"]}
        skipLabel={dict["onb.skip"]}
        step={1}
        stepLabel={dict["onb.step"]}
        title={dict["onb.profile.heading"]}
      />
      <OnboardingProfileForm
        initialName={currentUser?.name ?? ""}
        labels={{
          avatarHint: dict["onb.profile.avatarHint"],
          cardBody: dict["onb.profile.cardBody"],
          cardTitle: dict["onb.profile.cardTitle"],
          name: dict["onb.profile.name"],
          namePlaceholder: dict["onb.profile.namePlaceholder"],
          submit: dict["onb.profile.submit"],
        }}
        photoUrl={currentUser?.photoUrl ?? null}
      />
    </div>
  );
}
