"use client";

import Link from "next/link";
import { Loader2, Sparkles } from "lucide-react";
import { useEffect, useState, useTransition } from "react";

import { AvailabilityToggle } from "@/app/client-components";
import {
  finishOnboarding,
  saveOnboardingBio,
  saveOnboardingProfile,
} from "@/app/onboarding/actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type SportOption = {
  id: string;
  name: string;
};

type AvailabilityOption = {
  sportId: string;
  sportName: string;
  status: "YES" | "NO" | null;
};

function getInitials(name: string): string {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);

  if (parts.length === 0) {
    return "?";
  }

  return parts.map((part) => part.charAt(0).toUpperCase()).join("");
}

function Notice({ message }: { message: string | null }): JSX.Element | null {
  if (!message) {
    return null;
  }

  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/60 dark:text-amber-200">
      {message}
    </div>
  );
}

export function OnboardingRedirect(): JSX.Element {
  useEffect(() => {
    window.location.assign("/onboarding/profile");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center px-6 text-sm text-neutral-600 dark:text-neutral-400">
      Redirecting to onboarding...
    </div>
  );
}

export function OnboardingProfileForm({
  initialName,
  photoUrl,
}: {
  initialName: string;
  photoUrl: string | null;
}): JSX.Element {
  const [name, setName] = useState(initialName);
  const [notice, setNotice] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setNotice(null);

    startTransition(async () => {
      const result = await saveOnboardingProfile({
        name: name.trim(),
      });

      if (!result.ok) {
        setNotice(result.error ?? "Could not save your name.");
        return;
      }

      window.location.assign("/onboarding/bio");
    });
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <Notice message={notice} />
      <div className="grid gap-6 md:grid-cols-[160px_1fr] md:items-center">
        <div className="flex justify-center">
          <Avatar className="h-32 w-32 border border-neutral-200 bg-neutral-100 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
            {photoUrl ? <AvatarImage alt={name || "Your avatar"} src={photoUrl} /> : null}
            <AvatarFallback className="bg-neutral-900 text-3xl font-semibold text-white dark:bg-neutral-100 dark:text-neutral-950">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
        </div>
        <Card className="border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <CardHeader>
            <CardTitle>Your profile name</CardTitle>
            <CardDescription>
              This is what other players will see when groups and matches are formed.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200" htmlFor="onboarding-name">
                Name
              </label>
              <Input
                id="onboarding-name"
                maxLength={60}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                value={name}
              />
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">Avatar initials update automatically from your name.</div>
          </CardContent>
        </Card>
      </div>
      <div className="flex items-center justify-end gap-3">
        <Button className="min-w-[170px]" disabled={isPending} type="submit">
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Save and continue
        </Button>
      </div>
    </form>
  );
}

export function OnboardingBioForm({
  initialBio,
  initialSportIds,
  sports,
}: {
  initialBio: string;
  initialSportIds: string[];
  sports: SportOption[];
}): JSX.Element {
  const [bio, setBio] = useState(initialBio);
  const [selectedSportIds, setSelectedSportIds] = useState<string[]>(initialSportIds);
  const [notice, setNotice] = useState<string | null>(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [isPending, startTransition] = useTransition();

  function toggleSport(sportId: string): void {
    setSelectedSportIds((current) =>
      current.includes(sportId) ? current.filter((id) => id !== sportId) : [...current, sportId],
    );
  }

  async function handleDetectSports(): Promise<void> {
    setNotice(null);
    setIsDetecting(true);

    try {
      const response = await fetch("/api/ai/extract-sports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bio }),
      });

      if (!response.ok) {
        setNotice("AI sport detection is unavailable right now.");
        return;
      }

      const data: unknown = await response.json();
      const values =
        typeof data === "object" &&
        data !== null &&
        "sports" in data &&
        Array.isArray(data.sports)
          ? data.sports
          : [];

      const sportNameToId = new Map(sports.map((sport) => [sport.name.toLowerCase(), sport.id]));
      const nextSportIds = values
        .map((value) => (typeof value === "string" ? sportNameToId.get(value.toLowerCase()) ?? null : null))
        .filter((value): value is string => value !== null);

      if (nextSportIds.length === 0) {
        setNotice("No sports were detected in that bio. You can still pick them manually.");
        return;
      }

      setSelectedSportIds(Array.from(new Set(nextSportIds)));
    } catch {
      setNotice("AI sport detection is unavailable right now.");
    } finally {
      setIsDetecting(false);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setNotice(null);

    startTransition(async () => {
      const result = await saveOnboardingBio({
        bio: bio.trim(),
        sportIds: selectedSportIds,
      });

      if (!result.ok) {
        setNotice(result.error ?? "Could not save your bio.");
        return;
      }

      window.location.assign("/onboarding/availability");
    });
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <Notice message={notice} />
      <Card className="border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <CardHeader>
          <CardTitle>Tell people what you play</CardTitle>
          <CardDescription>
            Mention your sports, level, and when you usually join so matching has better context.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            className="min-h-[180px]"
            maxLength={500}
            onChange={(event) => setBio(event.target.value)}
            placeholder="I play tennis on weeknights, football on weekends, and I'm up for doubles most evenings."
            value={bio}
          />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Need help? Let AI pull likely sports from your bio.</div>
            <Button disabled={isDetecting} onClick={() => void handleDetectSports()} type="button" variant="outline">
              {isDetecting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              {"\u2728"} Detect my sports
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
        <CardHeader>
          <CardTitle>Preview sports</CardTitle>
          <CardDescription>Adjust the selection before continuing.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {sports.map((sport) => {
              const selected = selectedSportIds.includes(sport.id);

              return (
                <button
                  aria-pressed={selected}
                  className="rounded-full"
                  key={sport.id}
                  onClick={() => toggleSport(sport.id)}
                  type="button"
                >
                  <Badge
                    className={
                      selected
                        ? "border-neutral-900 bg-neutral-900 px-4 py-2 text-white"
                        : "border-neutral-300 bg-white px-4 py-2 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                    }
                    variant="outline"
                  >
                    {sport.name}
                  </Badge>
                </button>
              );
            })}
          </div>
          {selectedSportIds.length === 0 ? (
            <div className="text-sm text-neutral-500 dark:text-neutral-400">No sports selected yet.</div>
          ) : null}
        </CardContent>
      </Card>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100" href="/onboarding/profile">
          Back
        </Link>
        <Button className="min-w-[190px]" disabled={isPending} type="submit">
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Looks good, continue
        </Button>
      </div>
    </form>
  );
}

export function OnboardingAvailabilityList({
  items,
}: {
  items: AvailabilityOption[];
}): JSX.Element {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <Card className="border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900" key={item.sportId}>
          <CardHeader className="space-y-2">
            <CardTitle className="text-xl">{item.sportName}</CardTitle>
            <CardDescription>Are you available to play this one today?</CardDescription>
          </CardHeader>
          <CardContent>
            <AvailabilityToggle
              currentStatus={item.status}
              sportId={item.sportId}
              sportName={item.sportName}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function OnboardingFinishButton(): JSX.Element {
  const [notice, setNotice] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleFinish(): void {
    setNotice(null);

    startTransition(async () => {
      const result = await finishOnboarding();

      if (!result.ok) {
        setNotice(result.error ?? "Could not finish onboarding.");
        return;
      }

      window.location.assign("/");
    });
  }

  return (
    <div className="space-y-3">
      <Notice message={notice} />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100" href="/onboarding/bio">
          Back
        </Link>
        <Button className="min-w-[140px]" disabled={isPending} onClick={handleFinish} type="button">
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Finish
        </Button>
      </div>
    </div>
  );
}
