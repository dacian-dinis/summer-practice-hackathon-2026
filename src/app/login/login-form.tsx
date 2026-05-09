"use client";

import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { loginInputSchema } from "@/lib/auth-inputs";

const DEMO_ACCOUNTS = [
  "andrei@showup2move.dev",
  "maria@showup2move.dev",
  "radu@showup2move.dev",
  "ioana@showup2move.dev",
] as const;

export function LoginForm(): JSX.Element {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setError(null);

    const parsed = loginInputSchema.safeParse({
      email,
      password,
    });

    if (!parsed.success) {
      setError("Enter a valid email and password.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });
      const data: { message?: string; ok?: boolean; redirect?: string } = await response.json();

      if (!response.ok || !data.ok || !data.redirect) {
        const message = data.message ?? "Could not log in";
        setError(message);
        toast({ title: message });
        return;
      }

      router.push(data.redirect);
      router.refresh();
    } catch {
      setError("Could not log in");
      toast({ title: "Could not log in" });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="w-full max-w-md border-neutral-200 bg-white/95 shadow-xl dark:border-neutral-800 dark:bg-neutral-900/95">
      <CardHeader className="space-y-3">
        <CardTitle className="text-3xl">Log in</CardTitle>
        <CardDescription>
          Sign in with your email and password to get back into your groups, profile, and today&apos;s availability.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={(event) => void handleSubmit(event)}>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <Input
              autoComplete="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              type="email"
              value={email}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <Input
              autoComplete="current-password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Your password"
              type="password"
              value={password}
            />
          </div>
          {error ? (
            <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800 dark:border-rose-900 dark:bg-rose-950/50 dark:text-rose-200">
              {error}
            </div>
          ) : null}
          <Button className="w-full" disabled={isSubmitting} type="submit">
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Log in
          </Button>
        </form>

        <details className="mt-5 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm dark:border-neutral-800 dark:bg-neutral-950">
          <summary className="cursor-pointer font-medium">Demo accounts</summary>
          <div className="mt-3 space-y-2 text-neutral-600 dark:text-neutral-400">
            {DEMO_ACCOUNTS.map((demoEmail) => (
              <div key={demoEmail}>
                {demoEmail} / demo1234
              </div>
            ))}
          </div>
        </details>

        <div className="mt-5 text-sm text-neutral-600 dark:text-neutral-400">
          Don&apos;t have an account?{" "}
          <Link className="font-medium text-foreground underline-offset-4 hover:underline" href="/register">
            Register
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
