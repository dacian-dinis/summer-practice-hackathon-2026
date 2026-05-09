import type { Metadata } from "next";
import { cookies } from "next/headers";
import type { ReactNode } from "react";

import { getUserNameFromSlug, slugifyUser, USER_NAMES } from "@/lib/users";
import { Nav } from "@/components/nav";

import "./globals.css";

export const metadata: Metadata = {
  title: "Summer Practice Hackathon 2026",
  description: "Next.js shell with navigation and user switching.",
};

function getInitialUserName() {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get("userId")?.value;

  if (cookieValue) {
    return getUserNameFromSlug(cookieValue);
  }

  return getUserNameFromSlug(slugifyUser(USER_NAMES[0]));
}

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-950">
        <Nav currentUserName={getInitialUserName()} />
        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
