import { OnboardingProfileForm } from "@/app/onboarding/onboarding-client";
import { OnboardingStepHeader } from "@/app/onboarding/shared";
import { getCurrentUser } from "@/lib/auth";

export default async function OnboardingProfilePage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();

  return (
    <div className="space-y-8">
      <OnboardingStepHeader
        description="Start with the basics so people recognize you when the app creates matches and groups."
        step={1}
        title="Set up your profile"
      />
      <OnboardingProfileForm
        initialName={currentUser?.name ?? ""}
        photoUrl={currentUser?.photoUrl ?? null}
      />
    </div>
  );
}
