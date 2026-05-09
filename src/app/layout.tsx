import type { Metadata } from "next";
import { headers } from "next/headers";
import type { ReactNode } from "react";

import { OnboardingRedirect } from "@/app/onboarding/onboarding-client";
import { Nav } from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
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
  const bodyClassName = "min-h-screen bg-neutral-50 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50";

  if (needsOnboarding) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={bodyClassName}>
          <ThemeProvider>
            <OnboardingRedirect />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    );
  }

  if (isOnboardingPath) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={bodyClassName}>
          <ThemeProvider>
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bodyClassName}>
        <ThemeProvider>
          <Nav currentUserName={currentUser?.name ?? USER_NAMES[0]} />
          <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
