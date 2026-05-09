"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

const THEME_OPTIONS = [
  {
    icon: Sun,
    label: "Light",
    value: "light",
  },
  {
    icon: Monitor,
    label: "System",
    value: "system",
  },
  {
    icon: Moon,
    label: "Dark",
    value: "dark",
  },
] as const;

export function ThemeToggle(): JSX.Element {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="h-10 w-full rounded-xl border border-neutral-200 bg-neutral-100/70 sm:w-[252px] dark:border-neutral-800 dark:bg-neutral-800/60"
      />
    );
  }

  return (
    <div className="grid w-full grid-cols-3 rounded-xl border border-neutral-200 bg-neutral-100/80 p-1 sm:w-[252px] dark:border-neutral-800 dark:bg-neutral-800/80">
      {THEME_OPTIONS.map((option) => {
        const isActive = theme === option.value;
        const Icon = option.icon;

        return (
          <button
            className={cn(
              "inline-flex min-h-8 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-colors",
              isActive
                ? "bg-white text-neutral-950 shadow-sm dark:bg-neutral-950 dark:text-neutral-50"
                : "text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50",
            )}
            key={option.value}
            onClick={() => setTheme(option.value)}
            type="button"
          >
            <Icon className="h-3.5 w-3.5" />
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
