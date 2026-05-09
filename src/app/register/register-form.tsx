"use client";

import Link from "next/link";
import { Loader2 } from "lucide-react";
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
import { registerInputSchema } from "@/lib/auth-inputs";

type RegisterFormProps = {
  next?: string;
};

export function RegisterForm({ next }: RegisterFormProps = {}): JSX.Element {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setError(null);

    const parsed = registerInputSchema.safeParse({
      confirmPassword,
      email,
      name,
      password,
    });

    if (!parsed.success) {
      const issueMessage = parsed.error.issues[0]?.message ?? "Enter valid registration details.";
      setError(issueMessage);
      return;
    }

    setIsSubmitting(true);

    try {
      const url = next ? `/api/auth/register?next=${encodeURIComponent(next)}` : "/api/auth/register";
      const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: parsed.data.email,
          name: parsed.data.name,
          password: parsed.data.password,
        }),
      });
      const data: { message?: string; ok?: boolean; redirect?: string } = await response.json();

      if (!response.ok || !data.ok || !data.redirect) {
        const message = data.message ?? "Could not create account";
        setError(message);
        toast({ title: message });
        return;
      }

      window.location.assign(data.redirect);
    } catch {
      setError("Could not create account");
      toast({ title: "Could not create account" });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="w-full max-w-md rounded-md border-2 border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950">
      <CardHeader className="space-y-3">
        <CardTitle className="font-display text-4xl">Create account</CardTitle>
        <CardDescription>
          Set up a new player account and continue straight into onboarding.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={(event) => void handleSubmit(event)}>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="register-email">
              Email
            </label>
            <Input
              autoComplete="email"
              id="register-email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              type="email"
              value={email}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="register-name">
              Name
            </label>
            <Input
              autoComplete="name"
              id="register-name"
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              value={name}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="register-password">
              Password
            </label>
            <Input
              autoComplete="new-password"
              id="register-password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="At least 8 characters"
              type="password"
              value={password}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="register-confirm-password">
              Confirm password
            </label>
            <Input
              autoComplete="new-password"
              id="register-confirm-password"
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Repeat your password"
              type="password"
              value={confirmPassword}
            />
          </div>
          {error ? (
            <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800 dark:border-rose-900 dark:bg-rose-950/50 dark:text-rose-200">
              {error}
            </div>
          ) : null}
          <Button
            className="w-full rounded-md bg-brand text-white hover:bg-brand-deep font-bold uppercase tracking-wider"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Create account
          </Button>
        </form>

        <div className="mt-5 text-sm text-neutral-600 dark:text-neutral-400">
          Already have an account?{" "}
          <Link className="font-medium text-foreground underline-offset-4 hover:underline" href="/login">
            Log in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
