import Link from "next/link";
import type { ReactNode } from "react";

import { Logo } from "@/components/logo";

type OnboardingLayoutProps = {
  children: ReactNode;
};

export default function OnboardingLayout({
  children,
}: OnboardingLayoutProps): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 py-10 sm:px-6">
      <Link aria-label="ShowUp2Move home" href="/">
        <Logo size="md" />
      </Link>
      <div className="w-full max-w-3xl rounded-md border-2 border-brand-ink bg-white p-6 shadow-none dark:border-neutral-50 dark:bg-neutral-950 sm:p-8">
        {children}
      </div>
    </main>
  );
}
