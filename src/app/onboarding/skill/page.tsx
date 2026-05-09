import { OnboardingSkillForm } from "@/app/onboarding/onboarding-client";
import { OnboardingStepHeader } from "@/app/onboarding/shared";
import { getCurrentUser } from "@/lib/auth";
import { getDict } from "@/lib/i18n";

export default async function OnboardingSkillPage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();
  const dict = getDict();

  return (
    <div className="space-y-8">
      <OnboardingStepHeader
        description={dict["onb.skill.subhead"]}
        ofLabel={dict["onb.of"]}
        skipLabel={dict["onb.skip"]}
        step={3}
        stepLabel={dict["onb.step"]}
        title={dict["onb.skill.heading"]}
      />
      <OnboardingSkillForm
        initialSkill={currentUser?.skill ?? 3}
        labels={{
          back: dict["common.back"],
          label1: dict["onb.skill.label1"],
          label2: dict["onb.skill.label2"],
          label3: dict["onb.skill.label3"],
          label4: dict["onb.skill.label4"],
          label5: dict["onb.skill.label5"],
          desc1: dict["onb.skill.desc1"],
          desc2: dict["onb.skill.desc2"],
          desc3: dict["onb.skill.desc3"],
          desc4: dict["onb.skill.desc4"],
          desc5: dict["onb.skill.desc5"],
          submit: dict["onb.skill.submit"],
        }}
      />
    </div>
  );
}
