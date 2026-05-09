import type { ReactNode } from "react";

import { skipOnboarding } from "@/app/onboarding/actions";

type OnboardingStepHeaderProps = {
  step: 1 | 2 | 3;
  title: string;
  description: string;
};

export function OnboardingStepHeader({
  step,
  title,
  description,
}: OnboardingStepHeaderProps): JSX.Element {
  const progress = (step / 3) * 100;

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Step {step} of 3</div>
          <div className="space-y-1">
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">{title}</h1>
            <p className="max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">{description}</p>
          </div>
        </div>
        <form action={skipOnboarding}>
          <button
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            type="submit"
          >
            Skip for now
          </button>
        </form>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
        <div
          aria-hidden="true"
          className="h-full rounded-full bg-neutral-950 transition-all dark:bg-neutral-50"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export function OnboardingStepActions({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <div className="flex flex-wrap items-center justify-between gap-3">{children}</div>;
}
