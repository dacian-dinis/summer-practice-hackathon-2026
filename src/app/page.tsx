import type { Metadata } from "next";

import { DashboardHome } from "@/components/dashboard-home";
import { Landing } from "@/components/landing";
import { getCurrentUser } from "@/lib/auth";

export const metadata: Metadata = {
  title: "ShowUp2Move",
};

export default async function HomePage(): Promise<JSX.Element> {
  const user = await getCurrentUser();

  if (!user) {
    return <Landing />;
  }

  return <DashboardHome currentUser={user} />;
}
