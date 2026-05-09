import Link from "next/link";
import { redirect } from "next/navigation";

import { RegisterForm } from "@/app/register/register-form";
import { Logo } from "@/components/logo";
import { getCurrentUser } from "@/lib/auth";

type RegisterPageProps = {
  searchParams?: { next?: string };
};

function safeNext(value: string | undefined): string | undefined {
  if (!value) return undefined;
  if (!value.startsWith("/") || value.startsWith("//")) return undefined;
  return value;
}

export default async function RegisterPage({ searchParams }: RegisterPageProps): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();
  const next = safeNext(searchParams?.next);

  if (currentUser) {
    redirect(currentUser.onboardedAt === null ? "/onboarding/profile" : (next ?? "/"));
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-10">
      <Link aria-label="ShowUp2Move home" href="/">
        <Logo size="md" />
      </Link>
      <RegisterForm next={next} />
    </div>
  );
}
