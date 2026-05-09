import Link from "next/link";

import { LocaleToggle } from "@/components/locale-toggle";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { getLocale } from "@/lib/i18n";

export function MarketingNav(): JSX.Element {
  const locale = getLocale();

  return (
    <header className="sticky top-0 z-40 border-b-2 border-brand-ink bg-brand-cream/90 backdrop-blur-xl dark:border-neutral-50/30 dark:bg-neutral-950/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link className="flex items-center" href="/">
          <Logo size="md" />
        </Link>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <LocaleToggle locale={locale} />
          <ThemeToggle />
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button
                className="rounded-md font-bold uppercase tracking-wider"
                type="button"
                variant="ghost"
              >
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button
                className="rounded-md bg-brand text-white hover:bg-brand-deep font-bold uppercase tracking-wider"
                type="button"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
