import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { OnboardingRedirect } from "@/app/onboarding/onboarding-client";
import { MarketingNav } from "@/components/marketing-nav";
import { Nav } from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { getCurrentUser } from "@/lib/auth";
import { getDict, getLocale } from "@/lib/i18n";

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
  const isAuthPath = pathname === "/login" || pathname === "/register";
  const isOnboardingPath = pathname.startsWith("/onboarding");
  const isSharePath = pathname.startsWith("/g/");
  const currentUser = await getCurrentUser();
  const locale = getLocale();
  const dict = getDict(locale);
  const navLabels = {
    daysAgo: dict["notif.daysAgo"],
    emptyNotifications: dict["notif.empty"],
    home: dict["nav.home"],
    groups: dict["nav.groups"],
    hoursAgo: dict["notif.hoursAgo"],
    justNow: dict["notif.justNow"],
    logout: dict["nav.logout"],
    map: dict["nav.map"],
    menu: dict["nav.menu"],
    minutesAgo: dict["notif.minutesAgo"],
    notifications: dict["nav.notifications"],
    profile: dict["nav.profile"],
  };
  const isMarketingHome = currentUser === null && pathname === "/";
  const needsOnboarding = currentUser !== null && currentUser.onboardedAt === null && !isOnboardingPath && !isSharePath;
  const bodyClassName = "min-h-screen bg-neutral-50 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50";

  if (currentUser === null && !isAuthPath && !isSharePath && pathname !== "/") {
    redirect("/login");
  }

  if (needsOnboarding) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={bodyClassName}>
          <ThemeProvider>
            <OnboardingRedirect label={dict["onb.redirect"]} />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    );
  }

  if (isSharePath) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={bodyClassName}>
          <ThemeProvider>
            <main>{children}</main>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    );
  }

  if (isOnboardingPath || isAuthPath) {
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

  if (isMarketingHome) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={bodyClassName}>
          <ThemeProvider>
            <MarketingNav
              labels={{
                login: dict["nav.login"],
                menu: dict["nav.menu"],
                signup: dict["nav.signup"],
              }}
              locale={locale}
            />
            <main>{children}</main>
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
          <Nav
            currentUser={
              currentUser
                ? {
                    name: currentUser.name,
                    photoUrl: currentUser.photoUrl,
                  }
                : null
            }
            labels={navLabels}
            locale={locale}
          />
          <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
