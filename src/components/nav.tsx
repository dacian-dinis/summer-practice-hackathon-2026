"use client";

import Link from "next/link";
import { Loader2, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

import { Avatar as UserAvatar } from "@/components/avatar";
import { LocaleToggle } from "@/components/locale-toggle";
import { LogoMark } from "@/components/logo";
import { NotificationBell } from "@/components/notification-bell";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

type NavLabels = {
  daysAgo: string;
  emptyNotifications: string;
  groups: string;
  home: string;
  hoursAgo: string;
  justNow: string;
  logout: string;
  map: string;
  menu: string;
  minutesAgo: string;
  notifications: string;
  profile: string;
};

type NavProps = {
  currentUser: {
    name: string;
    photoUrl: string | null;
  } | null;
  locale: "en" | "ro";
  labels: NavLabels;
};

export function Nav({ currentUser, locale, labels }: NavProps): JSX.Element {
  const navLinks = [
    { href: "/", label: labels.home },
    { href: "/profile", label: labels.profile },
    { href: "/groups", label: labels.groups },
    { href: "/map", label: labels.map },
  ];
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  async function handleLogout(): Promise<void> {
    setIsLoggingOut(true);

    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "same-origin",
      });
    } finally {
      window.location.assign("/");
    }
  }

  const notificationLabels = {
    daysAgo: labels.daysAgo,
    empty: labels.emptyNotifications,
    hoursAgo: labels.hoursAgo,
    justNow: labels.justNow,
    minutesAgo: labels.minutesAgo,
    notifications: labels.notifications,
  };

  return (
    <header className="border-b-2 border-brand-ink bg-white/90 backdrop-blur dark:border-neutral-50 dark:bg-neutral-900/90">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link aria-label="ShowUp2Move home" className="flex items-center" href="/" onClick={() => setIsMenuOpen(false)}>
              <LogoMark size={28} />
            </Link>
            <nav className="hidden flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium sm:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-10 items-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden flex-wrap items-center justify-end gap-3 sm:flex">
            {currentUser ? <NotificationBell labels={notificationLabels} /> : null}
            <LocaleToggle locale={locale} />
            <ThemeToggle />
            {currentUser ? (
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-md border-2 border-brand-ink bg-background px-2 py-1 dark:border-neutral-50">
                  <UserAvatar
                    className="h-8 w-8"
                    fallbackClassName="bg-neutral-200 text-xs font-semibold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100"
                    name={currentUser.name}
                    src={currentUser.photoUrl}
                  />
                  <span className="max-w-[10rem] truncate text-sm font-medium text-foreground">
                    {currentUser.name}
                  </span>
                </div>
                <Button
                  className="min-h-10 rounded-md border-2 border-brand-ink"
                  disabled={isLoggingOut}
                  onClick={() => void handleLogout()}
                  size="sm"
                  type="button"
                  variant="outline"
                >
                  {isLoggingOut ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LogOut className="mr-2 h-4 w-4" />}
                  {labels.logout}
                </Button>
              </div>
            ) : null}
          </div>

          <button
            aria-expanded={isMenuOpen}
            aria-label={labels.menu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-brand-ink text-neutral-900 dark:border-neutral-50 dark:text-neutral-50 sm:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {isMenuOpen ? (
          <div className="space-y-3 border-t-2 border-brand-ink pt-4 dark:border-neutral-50 sm:hidden">
            <nav className="flex flex-col gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-10 items-center rounded-md border-2 border-brand-ink px-3 dark:border-neutral-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-wrap items-center gap-3">
              {currentUser ? <NotificationBell labels={notificationLabels} /> : null}
              <LocaleToggle locale={locale} />
              <ThemeToggle />
            </div>
            {currentUser ? (
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-md border-2 border-brand-ink bg-background px-2 py-1 dark:border-neutral-50">
                  <UserAvatar
                    className="h-8 w-8"
                    fallbackClassName="bg-neutral-200 text-xs font-semibold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100"
                    name={currentUser.name}
                    src={currentUser.photoUrl}
                  />
                  <span className="max-w-[10rem] truncate text-sm font-medium text-foreground">
                    {currentUser.name}
                  </span>
                </div>
                <Button
                  className="min-h-10 rounded-md border-2 border-brand-ink"
                  disabled={isLoggingOut}
                  onClick={() => void handleLogout()}
                  size="sm"
                  type="button"
                  variant="outline"
                >
                  {isLoggingOut ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LogOut className="mr-2 h-4 w-4" />}
                  {labels.logout}
                </Button>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </header>
  );
}
