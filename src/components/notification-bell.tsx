"use client";

import { Bell } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NotificationItem = {
  id: string;
  kind: string;
  title: string;
  body: string;
  link: string | null;
  readAt: string | null;
  createdAt: string;
};

type NotificationsResponse = {
  unreadCount: number;
  items: NotificationItem[];
};

type NotificationBellLabels = {
  daysAgo: string;
  empty: string;
  hoursAgo: string;
  justNow: string;
  minutesAgo: string;
  notifications: string;
};

function formatRelative(iso: string, labels: NotificationBellLabels): string {
  const diff = Date.now() - new Date(iso).getTime();
  const seconds = Math.floor(diff / 1000);

  if (seconds < 60) return labels.justNow;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} ${labels.minutesAgo}`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} ${labels.hoursAgo}`;

  const days = Math.floor(hours / 24);
  return `${days} ${labels.daysAgo}`;
}

export function NotificationBell({
  labels,
}: {
  labels: NotificationBellLabels;
}): JSX.Element {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<NotificationsResponse>({ unreadCount: 0, items: [] });
  const containerRef = useRef<HTMLDivElement | null>(null);

  async function load(): Promise<void> {
    try {
      const response = await fetch("/api/notifications", {
        method: "GET",
        credentials: "same-origin",
        cache: "no-store",
      });

      if (!response.ok) return;

      const json = (await response.json()) as NotificationsResponse;
      setData(json);
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    void load();
    const interval = setInterval(() => {
      void load();
    }, 15000);
    return () => clearInterval(interval);
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

  async function handleOpen(): Promise<void> {
    const willOpen = !open;
    setOpen(willOpen);

    if (willOpen && data.unreadCount > 0) {
      try {
        await fetch("/api/notifications", {
          method: "POST",
          credentials: "same-origin",
        });
        setData((prev) => ({
          ...prev,
          unreadCount: 0,
          items: prev.items.map((item) => (item.readAt ? item : { ...item, readAt: new Date().toISOString() })),
        }));
      } catch {
        // ignore
      }
    }
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        aria-label={labels.notifications}
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-brand-ink bg-white text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-50 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
        onClick={() => void handleOpen()}
        type="button"
      >
        <Bell className="h-4 w-4" />
        {data.unreadCount > 0 ? (
          <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-white">
            {data.unreadCount > 9 ? "9+" : data.unreadCount}
          </span>
        ) : null}
      </button>

      {open ? (
        <div className="absolute right-0 z-50 mt-2 w-80 rounded-md border-2 border-brand-ink bg-white shadow-lg dark:border-neutral-50 dark:bg-neutral-950">
          <div className="border-b-2 border-brand-ink px-4 py-3 dark:border-neutral-700">
            <div className="font-mono-label text-brand-ink/60 dark:text-neutral-400">{labels.notifications}</div>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {data.items.length === 0 ? (
              <div className="px-4 py-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
                {labels.empty}
              </div>
            ) : (
              <ul className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {data.items.map((item) => {
                  const content = (
                    <div className="flex flex-col gap-1 px-4 py-3 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900">
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-sm font-semibold text-neutral-950 dark:text-neutral-50">{item.title}</div>
                        <div className="shrink-0 text-[11px] text-neutral-400">{formatRelative(item.createdAt, labels)}</div>
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400">{item.body}</div>
                    </div>
                  );

                  return (
                    <li key={item.id}>
                      {item.link ? (
                        <Link href={item.link} onClick={() => setOpen(false)}>
                          {content}
                        </Link>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
