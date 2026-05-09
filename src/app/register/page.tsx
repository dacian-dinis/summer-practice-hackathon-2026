import { redirect } from "next/navigation";

import { RegisterForm } from "@/app/register/register-form";
import { getCurrentUser } from "@/lib/auth";

export default async function RegisterPage(): Promise<JSX.Element> {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    redirect(currentUser.onboardedAt === null ? "/onboarding/profile" : "/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <RegisterForm />
    </div>
  );
}
