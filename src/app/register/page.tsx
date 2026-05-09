import Link from "next/link";
import { redirect } from "next/navigation";

import { RegisterForm } from "@/app/register/register-form";
import { Logo } from "@/components/logo";
import { getCurrentUser } from "@/lib/auth";

export default async function RegisterPage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    redirect(currentUser.onboardedAt === null ? "/onboarding/profile" : "/");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-10">
      <Link aria-label="showup2move home" href="/">
        <Logo priority size="lg" />
      </Link>
      <RegisterForm />
    </div>
  );
}
