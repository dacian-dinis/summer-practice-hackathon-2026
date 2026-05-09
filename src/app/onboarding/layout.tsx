import type { ReactNode } from "react";

type OnboardingLayoutProps = {
  children: ReactNode;
};

export default function OnboardingLayout({
  children,
}: OnboardingLayoutProps): JSX.Element {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
      <div className="w-full max-w-3xl rounded-[28px] border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-200/70 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-black/30 sm:p-8">
        {children}
      </div>
    </main>
  );
}
