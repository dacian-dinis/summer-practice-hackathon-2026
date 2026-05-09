"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

const THEME_OPTIONS = [
  { icon: Sun, label: "Light", value: "light" },
  { icon: Monitor, label: "System", value: "system" },
  { icon: Moon, label: "Dark", value: "dark" },
] as const;

export function ThemeToggle(): JSX.Element {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent): void {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  if (!mounted) {
    return <div aria-hidden="true" className="h-10 w-10 rounded-md border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative" ref={containerRef}>
      <button
        aria-label="Toggle theme"
        className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <Sun
          className={cn(
            "absolute h-4 w-4 transition-all duration-300",
            isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
          )}
        />
        <Moon
          className={cn(
            "absolute h-4 w-4 transition-all duration-300",
            isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0",
          )}
        />
      </button>

      {open ? (
        <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-md border-2 border-brand-ink bg-white shadow-lg dark:border-neutral-50 dark:bg-neutral-950">
          <div className="border-b-2 border-brand-ink px-3 py-2 dark:border-neutral-700">
            <div className="font-mono-label text-brand-ink/60 dark:text-neutral-400">Theme</div>
          </div>
          <ul className="p-1">
            {THEME_OPTIONS.map((option) => {
              const isActive = theme === option.value;
              const Icon = option.icon;

              return (
                <li key={option.value}>
                  <button
                    className={cn(
                      "flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition-colors",
                      isActive
                        ? "bg-brand text-white"
                        : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800",
                    )}
                    onClick={() => {
                      setTheme(option.value);
                      setOpen(false);
                    }}
                    type="button"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span className={cn(isActive ? "font-bold uppercase tracking-wider" : "")}>
                      {option.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
