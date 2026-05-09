"use client";

import Link from "next/link";
import { Loader2, LogOut } from "lucide-react";
import { useState } from "react";

import { Avatar as UserAvatar } from "@/components/avatar";
import { LocaleToggle } from "@/components/locale-toggle";
import { LogoMark } from "@/components/logo";
import { NotificationBell } from "@/components/notification-bell";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

type NavLabels = {
  home: string;
  profile: string;
  groups: string;
  map: string;
  logout: string;
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
  const NAV_LINKS = [
    { href: "/", label: labels.home },
    { href: "/profile", label: labels.profile },
    { href: "/groups", label: labels.groups },
    { href: "/map", label: labels.map },
  ];

  const [isLoggingOut, setIsLoggingOut] = useState(false);

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

  return (
    <header className="border-b bg-white/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/90">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex flex-wrap items-center gap-4">
          <Link aria-label="ShowUp2Move home" className="flex items-center" href="/">
            <LogoMark size={28} />
          </Link>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium">
            {NAV_LINKS.map((link) => (
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

        <div className="flex w-full flex-wrap items-center justify-between gap-3 sm:w-auto sm:justify-end">
          {currentUser ? <NotificationBell /> : null}
          <LocaleToggle locale={locale} />
          <ThemeToggle />
          {currentUser ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-background px-2 py-1 dark:border-neutral-800">
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
                className="min-h-10"
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
      </div>
    </header>
  );
}
