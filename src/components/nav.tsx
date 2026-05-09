"use client";

import Link from "next/link";
import { useRef } from "react";

import { USER_NAMES, type UserName } from "@/lib/users";
import { switchUserAction } from "@/app/actions";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/profile", label: "Profile" },
  { href: "/groups", label: "Groups" },
  { href: "/map", label: "Map" },
] as const;

type NavProps = {
  currentUserName: UserName;
};

function slugifyUser(name: UserName): string {
  return name.toLowerCase();
}

export function Nav({ currentUserName }: NavProps): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <header className="border-b bg-white/90 backdrop-blur">
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

        <form action={switchUserAction} ref={formRef} className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:flex-nowrap">
          <label htmlFor="userId" className="whitespace-nowrap text-sm font-medium">
            Switch User
          </label>
          <select
            id="userId"
            name="userId"
            defaultValue={currentUserName}
            onChange={() => formRef.current?.requestSubmit()}
            className="h-10 min-w-0 flex-1 rounded-md border bg-background px-3 text-sm sm:min-w-44"
          >
            {USER_NAMES.map((name) => {
              const slug = slugifyUser(name);

              return (
                <option key={slug} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </header>
  );
}
