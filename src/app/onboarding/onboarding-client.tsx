"use client";

import Link from "next/link";
import { Loader2, Sparkles } from "lucide-react";
import { useEffect, useState, useTransition } from "react";

import { AvailabilityToggle } from "@/app/client-components";
import {
  finishOnboarding,
  saveOnboardingBio,
  saveOnboardingProfile,
  saveOnboardingSkill,
  saveOnboardingTimes,
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
import { cn } from "@/lib/utils";

type SportOption = {
  id: string;
  name: string;
};

type AvailabilityOption = {
  sportId: string;
  sportName: string;
  status: "YES" | "NO" | null;
};

type ProfileLabels = {
  avatarHint: string;
  cardBody: string;
  cardTitle: string;
  name: string;
  namePlaceholder: string;
  submit: string;
};

type BioLabels = {
  back: string;
  cardBody: string;
  cardTitle: string;
  detect: string;
  detectHint: string;
  emptySports: string;
  placeholder: string;
  previewBody: string;
  previewTitle: string;
  submit: string;
};

type SkillLabels = {
  back: string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  desc5: string;
  label1: string;
  label2: string;
  label3: string;
  label4: string;
  label5: string;
  submit: string;
};

type TimesLabels = {
  afternoon: string;
  back: string;
  evening: string;
  lunch: string;
  morning: string;
  submit: string;
  weekends: string;
};

const PLAYTIME_OPTIONS = [
  { id: "mornings", emoji: "🌅" },
  { id: "lunch", emoji: "🥪" },
  { id: "afternoons", emoji: "☀️" },
  { id: "evenings", emoji: "🌙" },
  { id: "weekends", emoji: "🎯" },
] as const;

const SKILL_OPTIONS = [
  { level: 1, emoji: "🙂" },
  { level: 2, emoji: "🎾" },
  { level: 3, emoji: "💪" },
  { level: 4, emoji: "⚡" },
  { level: 5, emoji: "🏅" },
] as const;

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
    <div className="rounded-md border-2 border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/60 dark:text-amber-200">
      {message}
    </div>
  );
}

export function OnboardingRedirect({ label }: { label: string }): JSX.Element {
  useEffect(() => {
    window.location.assign("/onboarding/profile");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center px-6 text-sm text-neutral-600 dark:text-neutral-400">
      {label}
    </div>
  );
}

export function OnboardingProfileForm({
  initialName,
  labels,
  photoUrl,
}: {
  initialName: string;
  labels: ProfileLabels;
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
          <Avatar className="h-32 w-32 border-2 border-brand-ink bg-neutral-100 shadow-none dark:border-neutral-50 dark:bg-neutral-800">
            {photoUrl ? <AvatarImage alt={name || "Your avatar"} src={photoUrl} /> : null}
            <AvatarFallback className="bg-neutral-900 text-3xl font-semibold text-white dark:bg-neutral-100 dark:text-neutral-950">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
        </div>
        <Card className="rounded-md border-2 border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950">
          <CardHeader>
            <CardTitle>{labels.cardTitle}</CardTitle>
            <CardDescription>{labels.cardBody}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200" htmlFor="onboarding-name">
                {labels.name}
              </label>
              <Input
                id="onboarding-name"
                maxLength={60}
                onChange={(event) => setName(event.target.value)}
                placeholder={labels.namePlaceholder}
                value={name}
              />
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">{labels.avatarHint}</div>
          </CardContent>
        </Card>
      </div>
      <div className="flex items-center justify-end gap-3">
        <Button
          className="min-h-11 min-w-[170px] rounded-md bg-brand font-bold uppercase tracking-wider text-white hover:bg-brand-deep"
          disabled={isPending}
          type="submit"
        >
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {labels.submit}
        </Button>
      </div>
    </form>
  );
}

export function OnboardingBioForm({
  initialBio,
  initialSportIds,
  labels,
  sports,
}: {
  initialBio: string;
  initialSportIds: string[];
  labels: BioLabels;
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

      window.location.assign("/onboarding/skill");
    });
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <Notice message={notice} />
      <Card className="rounded-md border-2 border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950">
        <CardHeader>
          <CardTitle>{labels.cardTitle}</CardTitle>
          <CardDescription>{labels.cardBody}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            className="min-h-[180px]"
            maxLength={500}
            onChange={(event) => setBio(event.target.value)}
            placeholder={labels.placeholder}
            value={bio}
          />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-neutral-500 dark:text-neutral-400">{labels.detectHint}</div>
            <Button
              className="min-h-11 rounded-md border-2 border-brand-ink"
              disabled={isDetecting}
              onClick={() => void handleDetectSports()}
              type="button"
              variant="outline"
            >
              {isDetecting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              {labels.detect}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-md border-2 border-brand-ink bg-brand-cream shadow-none dark:border-neutral-50 dark:bg-neutral-950">
        <CardHeader>
          <CardTitle>{labels.previewTitle}</CardTitle>
          <CardDescription>{labels.previewBody}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {sports.map((sport) => {
              const selected = selectedSportIds.includes(sport.id);

              return (
                <button
                  aria-pressed={selected}
                  className="rounded-md"
                  key={sport.id}
                  onClick={() => toggleSport(sport.id)}
                  type="button"
                >
                  <Badge
                    className={
                      selected
                        ? "border-2 border-brand bg-brand px-4 py-2 text-white"
                        : "border-2 border-brand-ink bg-white px-4 py-2 text-neutral-700 dark:border-neutral-50 dark:bg-neutral-900 dark:text-neutral-300"
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
            <div className="text-sm text-neutral-500 dark:text-neutral-400">{labels.emptySports}</div>
          ) : null}
        </CardContent>
      </Card>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100" href="/onboarding/profile">
          {labels.back}
        </Link>
        <Button
          className="min-h-11 min-w-[190px] rounded-md bg-brand font-bold uppercase tracking-wider text-white hover:bg-brand-deep"
          disabled={isPending}
          type="submit"
        >
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {labels.submit}
        </Button>
      </div>
    </form>
  );
}

export function OnboardingSkillForm({
  initialSkill,
  labels,
}: {
  initialSkill: number;
  labels: SkillLabels;
}): JSX.Element {
  const [skill, setSkill] = useState(initialSkill);
  const [notice, setNotice] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const optionLabels = [labels.label1, labels.label2, labels.label3, labels.label4, labels.label5];
  const optionDescriptions = [labels.desc1, labels.desc2, labels.desc3, labels.desc4, labels.desc5];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setNotice(null);

    startTransition(async () => {
      const result = await saveOnboardingSkill({ skill });

      if (!result.ok) {
        setNotice(result.error ?? "Could not save your skill.");
        return;
      }

      window.location.assign("/onboarding/times");
    });
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <Notice message={notice} />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {SKILL_OPTIONS.map((option, index) => {
          const selected = skill === option.level;

          return (
            <button
              aria-pressed={selected}
              className={cn(
                "rounded-md border-2 border-brand-ink bg-white p-4 text-left transition-colors hover:border-brand dark:border-neutral-50 dark:bg-neutral-950",
                selected && "border-brand bg-brand text-white",
              )}
              key={option.level}
              onClick={() => setSkill(option.level)}
              type="button"
            >
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="space-y-3 p-0">
                  <div className="text-3xl">{option.emoji}</div>
                  <div className="space-y-1">
                    <div className="font-display text-xl">{optionLabels[index]}</div>
                    <div className={cn("text-sm leading-5 text-neutral-600 dark:text-neutral-400", selected && "text-white/90")}>
                      {optionDescriptions[index]}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100" href="/onboarding/bio">
          {labels.back}
        </Link>
        <Button
          className="min-h-11 min-w-[220px] rounded-md bg-brand font-bold uppercase tracking-wider text-white hover:bg-brand-deep"
          disabled={isPending}
          type="submit"
        >
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {labels.submit}
        </Button>
      </div>
    </form>
  );
}

export function OnboardingTimesForm({
  initialPlaytimes,
  labels,
}: {
  initialPlaytimes: string[];
  labels: TimesLabels;
}): JSX.Element {
  const [playtimes, setPlaytimes] = useState<string[]>(initialPlaytimes);
  const [notice, setNotice] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const optionLabels: Record<string, string> = {
    mornings: labels.morning,
    lunch: labels.lunch,
    afternoons: labels.afternoon,
    evenings: labels.evening,
    weekends: labels.weekends,
  };

  function togglePlaytime(playtime: string): void {
    setPlaytimes((current) =>
      current.includes(playtime)
        ? current.filter((item) => item !== playtime)
        : [...current, playtime],
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setNotice(null);

    startTransition(async () => {
      const result = await saveOnboardingTimes({ playtimes });

      if (!result.ok) {
        setNotice(result.error ?? "Could not save your play times.");
        return;
      }

      window.location.assign("/onboarding/availability");
    });
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <Notice message={notice} />
      <div className="flex flex-wrap gap-3">
        {PLAYTIME_OPTIONS.map((option) => {
          const selected = playtimes.includes(option.id);

          return (
            <button
              aria-pressed={selected}
              className={cn(
                "min-h-11 rounded-md border-2 border-brand-ink bg-white px-4 py-3 text-sm font-semibold transition-colors hover:border-brand dark:border-neutral-50 dark:bg-neutral-950",
                selected && "border-brand bg-brand text-white",
              )}
              key={option.id}
              onClick={() => togglePlaytime(option.id)}
              type="button"
            >
              <span className="mr-2">{option.emoji}</span>
              {optionLabels[option.id]}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100" href="/onboarding/skill">
          {labels.back}
        </Link>
        <Button
          className="min-h-11 min-w-[220px] rounded-md bg-brand font-bold uppercase tracking-wider text-white hover:bg-brand-deep"
          disabled={isPending}
          type="submit"
        >
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {labels.submit}
        </Button>
      </div>
    </form>
  );
}

export function OnboardingAvailabilityList({
  descriptionLabel,
  items,
}: {
  descriptionLabel: string;
  items: AvailabilityOption[];
}): JSX.Element {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <Card className="rounded-md border-2 border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950" key={item.sportId}>
          <CardHeader className="space-y-2">
            <CardTitle className="text-xl">{item.sportName}</CardTitle>
            <CardDescription>{descriptionLabel}</CardDescription>
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

export function OnboardingFinishButton({
  backHref,
  backLabel,
  finishLabel,
}: {
  backHref: string;
  backLabel: string;
  finishLabel: string;
}): JSX.Element {
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
        <Link className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100" href={backHref}>
          {backLabel}
        </Link>
        <Button
          className="min-h-11 min-w-[140px] rounded-md bg-brand font-bold uppercase tracking-wider text-white hover:bg-brand-deep"
          disabled={isPending}
          onClick={handleFinish}
          type="button"
        >
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {finishLabel}
        </Button>
      </div>
    </div>
  );
}
