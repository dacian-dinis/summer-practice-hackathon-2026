import type { ReactNode } from "react";

import { skipOnboarding } from "@/app/onboarding/actions";

type OnboardingStepHeaderProps = {
  step: 1 | 2 | 3 | 4 | 5;
  title: string;
  description: string;
  stepLabel: string;
  ofLabel: string;
  skipLabel: string;
};

export function OnboardingStepHeader({
  step,
  title,
  description,
  stepLabel,
  ofLabel,
  skipLabel,
}: OnboardingStepHeaderProps): JSX.Element {
  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="font-mono-label text-sm text-neutral-500 dark:text-neutral-400">
            {stepLabel} {step} {ofLabel} {totalSteps}
          </div>
          <div className="space-y-1">
            <h1 className="font-display text-3xl tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">
              {title}
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">{description}</p>
          </div>
        </div>
        <form action={skipOnboarding}>
          <button
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            type="submit"
          >
            {skipLabel}
          </button>
        </form>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: totalSteps }, (_, index) => {
          const active = index + 1 <= step;

          return (
            <div
              aria-hidden="true"
              className={
                active
                  ? "h-2 rounded-md bg-brand"
                  : "h-2 rounded-md bg-neutral-200 dark:bg-neutral-800"
              }
              key={index}
            />
          );
        })}
      </div>
      <div className="h-2 overflow-hidden rounded-md bg-neutral-200 dark:bg-neutral-800">
        <div
          aria-hidden="true"
          className="h-full rounded-md bg-neutral-950 transition-all dark:bg-neutral-50"
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
