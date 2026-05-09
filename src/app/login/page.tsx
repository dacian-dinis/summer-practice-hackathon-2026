import Link from "next/link";
import { redirect } from "next/navigation";

import { LoginForm } from "@/app/login/login-form";
import { Logo } from "@/components/logo";
import { getCurrentUser } from "@/lib/auth";

export default async function LoginPage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    redirect(currentUser.onboardedAt === null ? "/onboarding/profile" : "/");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-10">
      <Link aria-label="ShowUp2Move home" href="/">
        <Logo size="md" />
      </Link>
      <LoginForm />
    </div>
  );
}
