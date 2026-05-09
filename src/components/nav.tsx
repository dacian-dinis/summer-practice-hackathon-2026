"use client";

import Link from "next/link";
import { Loader2, LogOut } from "lucide-react";
import { useState } from "react";

import { Avatar as UserAvatar } from "@/components/avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/profile", label: "Profile" },
  { href: "/groups", label: "Groups" },
  { href: "/map", label: "Map" },
] as const;

type NavProps = {
  currentUser: {
    name: string;
    photoUrl: string | null;
  } | null;
};

export function Nav({ currentUser }: NavProps): JSX.Element {
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

        <div className="flex w-full flex-wrap items-center justify-between gap-3 sm:w-auto sm:justify-end">
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
                Logout
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
