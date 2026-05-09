"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { LocaleToggle } from "@/components/locale-toggle";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function MarketingNav({
  labels,
  locale,
}: {
  labels: {
    login: string;
    menu: string;
    signup: string;
  };
  locale: "en" | "ro";
}): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-brand-ink bg-brand-cream/90 backdrop-blur-xl dark:border-neutral-50/30 dark:bg-neutral-950/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link className="flex items-center" href="/" onClick={() => setIsMenuOpen(false)}>
            <Logo size="md" />
          </Link>

          <div className="hidden items-center gap-3 sm:flex">
            <LocaleToggle locale={locale} />
            <ThemeToggle />
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/login">
                <Button
                  className="rounded-md font-bold uppercase tracking-wider"
                  type="button"
                  variant="ghost"
                >
                  {labels.login}
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  className="rounded-md bg-brand text-white hover:bg-brand-deep font-bold uppercase tracking-wider"
                  type="button"
                >
                  {labels.signup}
                </Button>
              </Link>
            </div>
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
            <div className="flex flex-wrap items-center gap-3">
              <LocaleToggle locale={locale} />
              <ThemeToggle />
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button
                  className="min-h-11 w-full rounded-md border-2 border-brand-ink font-bold uppercase tracking-wider"
                  type="button"
                  variant="outline"
                >
                  {labels.login}
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                <Button
                  className="min-h-11 w-full rounded-md bg-brand text-white hover:bg-brand-deep font-bold uppercase tracking-wider"
                  type="button"
                >
                  {labels.signup}
                </Button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
