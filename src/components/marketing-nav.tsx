import Link from "next/link";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function MarketingNav(): JSX.Element {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/80 backdrop-blur-xl dark:border-neutral-800/80 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link className="flex items-center" href="/">
          <Logo priority size="md" />
        </Link>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <ThemeToggle />
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button type="button" variant="ghost">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button
                className="bg-orange-500 text-white hover:bg-orange-600"
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
