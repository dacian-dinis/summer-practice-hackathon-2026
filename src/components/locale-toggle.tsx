"use client";

import { Globe } from "lucide-react";
import { useState } from "react";

type LocaleToggleProps = {
  locale: "en" | "ro";
};

export function LocaleToggle({ locale }: LocaleToggleProps): JSX.Element {
  const [current, setCurrent] = useState(locale);
  const [isPending, setIsPending] = useState(false);

  async function handleSwitch(): Promise<void> {
    const next = current === "en" ? "ro" : "en";
    setIsPending(true);

    try {
      await fetch("/api/locale", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale: next }),
      });
      setCurrent(next);
      window.location.reload();
    } catch {
      setIsPending(false);
    }
  }

  return (
    <button
      aria-label="Switch language"
      className="inline-flex h-10 items-center gap-1 rounded-md border border-neutral-200 bg-white px-3 text-xs font-bold uppercase tracking-wider text-neutral-700 transition-colors hover:bg-neutral-100 disabled:opacity-60 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
      disabled={isPending}
      onClick={() => void handleSwitch()}
      type="button"
    >
      <Globe className="h-3.5 w-3.5" />
      {current.toUpperCase()}
    </button>
  );
}
