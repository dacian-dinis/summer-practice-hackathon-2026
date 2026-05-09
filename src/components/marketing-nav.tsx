import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function MarketingNav(): JSX.Element {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/80 backdrop-blur-xl dark:border-neutral-800/80 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link className="flex items-center gap-3" href="/">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#22d3ee_0%,#8b5cf6_50%,#f97316_100%)] text-sm font-black uppercase tracking-[0.3em] text-white shadow-lg shadow-cyan-500/20">
            SU
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
              ShowUp2Move
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-300">
              Pickup sports without the chaos.
            </div>
          </div>
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
              <Button type="button">Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
