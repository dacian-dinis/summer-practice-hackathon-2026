import type { Metadata } from "next";
import { headers } from "next/headers";
import type { ReactNode } from "react";

import { OnboardingRedirect } from "@/app/onboarding/onboarding-client";
import { Nav } from "@/components/nav";
import { Toaster } from "@/components/ui/toaster";
import { getCurrentUser } from "@/lib/auth";
import { USER_NAMES } from "@/lib/users";

import "./globals.css";

export const metadata: Metadata = {
  title: "ShowUp2Move",
  description: "Pickup sports without the chaos.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps): Promise<JSX.Element> {
  const headerStore = headers();
  const pathname = headerStore.get("x-pathname") ?? "";
  const isOnboardingPath = pathname.startsWith("/onboarding");
  const currentUser = await getCurrentUser();
  const needsOnboarding = currentUser !== null && currentUser.onboardedAt === null && !isOnboardingPath;

  if (needsOnboarding) {
    return (
      <html lang="en">
        <body className="min-h-screen bg-neutral-50 text-neutral-950">
          <OnboardingRedirect />
          <Toaster />
        </body>
      </html>
    );
  }

  if (isOnboardingPath) {
    return (
      <html lang="en">
        <body className="min-h-screen bg-neutral-50 text-neutral-950">
          {children}
          <Toaster />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-950">
        <Nav currentUserName={currentUser?.name ?? USER_NAMES[0]} />
        <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
