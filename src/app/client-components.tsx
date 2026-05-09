"use client";

import { Loader2, Save, Sparkles, Target, UserRound, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import type { SaveProfileInput } from "@/app/profile/actions";
import { saveProfile } from "@/app/profile/actions";
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
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

type SportOption = {
  id: string;
  name: string;
};

type AvailabilityToggleProps = {
  sportId: string;
  sportName: string;
  currentStatus: "YES" | "NO" | null;
};

type FindGroupButtonProps = {
  sportIds: string[];
};

type ProfileFormProps = {
  initialName: string;
  initialBio: string;
  initialSkill: number;
  sports: SportOption[];
  initialSportIds: string[];
  availabilityToday: Array<{
    sportId: string;
    status: string;
  }>;
};

function Notice({ message }: { message: string | null }): JSX.Element | null {
  if (!message) {
    return null;
  }

  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
      {message}
    </div>
  );
}

export function AvailabilityToggle({
  sportId,
  sportName,
  currentStatus,
}: AvailabilityToggleProps): JSX.Element {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [notice, setNotice] = useState<string | null>(null);

  async function updateAvailability(status: "YES" | "NO"): Promise<void> {
    setNotice(null);

    try {
      const response = await fetch("/api/availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sportId, status }),
      });

      if (!response.ok) {
        setNotice(`Could not update ${sportName}.`);
        toast({ title: "Availability update failed" });
        return;
      }

      startTransition(() => {
        router.refresh();
      });
    } catch {
      setNotice(`Could not update ${sportName}.`);
      toast({ title: "Availability update failed" });
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Button
          className={cn(
            "flex-1",
            currentStatus === "YES" && "bg-emerald-600 text-white hover:opacity-95",
          )}
          disabled={isPending}
          onClick={() => void updateAvailability("YES")}
          size="sm"
          type="button"
          variant={currentStatus === "YES" ? "default" : "outline"}
        >
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Yes
        </Button>
        <Button
          className={cn(
            "flex-1",
            currentStatus === "NO" && "bg-rose-600 text-white hover:opacity-95",
          )}
          disabled={isPending}
          onClick={() => void updateAvailability("NO")}
          size="sm"
          type="button"
          variant={currentStatus === "NO" ? "default" : "outline"}
        >
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          No
        </Button>
      </div>
      <Notice message={notice} />
    </div>
  );
}

export function FindGroupButton({ sportIds }: FindGroupButtonProps): JSX.Element {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [notice, setNotice] = useState<string | null>(null);

  async function handleClick(): Promise<void> {
    setNotice(null);

    try {
      const response = await fetch("/api/match", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sportIds }),
      });

      if (response.status === 404) {
        setNotice("Matching not ready");
        toast({ title: "Matching not ready" });
        return;
      }

      if (!response.ok) {
        setNotice("Could not start matching.");
        return;
      }

      startTransition(() => undefined);
    } catch {
      setNotice("Could not start matching.");
    }
  }

  return (
    <div className="space-y-2">
      <Button
        className="w-full bg-neutral-950 text-white hover:opacity-95"
        disabled={isPending}
        onClick={() => void handleClick()}
        size="lg"
        type="button"
      >
        {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Zap className="mr-2 h-4 w-4" />}
        Find my group now
      </Button>
      <Notice message={notice} />
    </div>
  );
}

function parseSportIdsFromAi(data: unknown, sports: SportOption[]): string[] {
  const record = typeof data === "object" && data !== null ? (data as Record<string, unknown>) : null;

  const directIds = record?.sportIds;
  if (Array.isArray(directIds)) {
    return directIds.filter((value): value is string => typeof value === "string");
  }

  const values = record?.sports;
  if (!Array.isArray(values)) {
    return [];
  }

  const sportByName = new Map(sports.map((sport) => [sport.name.toLowerCase(), sport.id]));

  return values
    .map((value) => {
      if (typeof value === "string") {
        return sportByName.get(value.toLowerCase()) ?? null;
      }

      if (typeof value === "object" && value !== null) {
        const name = "name" in value && typeof value.name === "string" ? value.name : null;
        const id = "id" in value && typeof value.id === "string" ? value.id : null;
        return id ?? (name ? sportByName.get(name.toLowerCase()) ?? null : null);
      }

      return null;
    })
    .filter((value): value is string => value !== null);
}

export function ProfileForm({
  initialName,
  initialBio,
  initialSkill,
  sports,
  initialSportIds,
  availabilityToday,
}: ProfileFormProps): JSX.Element {
  const router = useRouter();
  const { toast } = useToast();
  const [isSaving, startSaving] = useTransition();
  const [isDetecting, startDetecting] = useTransition();
  const [name, setName] = useState(initialName);
  const [bio, setBio] = useState(initialBio);
  const [skill, setSkill] = useState(initialSkill);
  const [selectedSportIds, setSelectedSportIds] = useState<string[]>(initialSportIds);
  const [notice, setNotice] = useState<string | null>(null);

  function toggleSport(sportId: string): void {
    setSelectedSportIds((current) =>
      current.includes(sportId)
        ? current.filter((id) => id !== sportId)
        : [...current, sportId],
    );
  }

  function sportStatusLabel(sportId: string): string | null {
    const availability = availabilityToday.find((item) => item.sportId === sportId);
    return availability?.status ?? null;
  }

  function buildPayload(): SaveProfileInput {
    return {
      name: name.trim(),
      bio: bio.trim(),
      skill,
      sportIds: selectedSportIds,
    };
  }

  function showNotice(message: string): void {
    setNotice(message);
    toast({ title: message });
  }

  async function handleDetectSports(): Promise<void> {
    setNotice(null);

    try {
      const response = await fetch("/api/ai/extract-sports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bio }),
      });

      if (response.status === 404) {
        showNotice("AI not ready");
        return;
      }

      if (!response.ok) {
        showNotice("Could not detect sports");
        return;
      }

      const data: unknown = await response.json();
      const nextSportIds = parseSportIdsFromAi(data, sports);

      if (nextSportIds.length === 0) {
        showNotice("No sports detected");
        return;
      }

      setSelectedSportIds(Array.from(new Set(nextSportIds)));
    } catch {
      showNotice("Could not detect sports");
    }
  }

  async function handleSave(): Promise<void> {
    setNotice(null);
    const result = await saveProfile(buildPayload());

    if (!result.ok) {
      showNotice(result.error ?? "Could not save profile");
      return;
    }

    showNotice("Profile saved");
    router.refresh();
  }

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-neutral-200 bg-white shadow-lg shadow-neutral-200/70">
        <div className="bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_30%),linear-gradient(135deg,#111827,#1f2937)] p-6 text-white">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <Badge className="w-fit bg-white/10 text-white" variant="secondary">
                <UserRound className="mr-1 h-3.5 w-3.5" />
                Your sports identity
              </Badge>
              <h1 className="text-3xl font-semibold tracking-tight">Profile</h1>
              <p className="max-w-2xl text-sm text-neutral-200">
                Tune your bio, sports, and level so the matching flow has something useful to work with.
              </p>
            </div>
            <div className="hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-right md:block">
              <div className="text-xs uppercase tracking-[0.24em] text-neutral-300">Today</div>
              <div className="mt-2 text-2xl font-semibold">{selectedSportIds.length}</div>
              <div className="text-sm text-neutral-300">sports selected</div>
            </div>
          </div>
        </div>
        <CardContent className="space-y-6 p-6">
          <Notice message={notice} />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-800" htmlFor="profile-name">
                  Name
                </label>
                <Input
                  id="profile-name"
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  value={name}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <label className="text-sm font-medium text-neutral-800" htmlFor="profile-bio">
                    Bio
                  </label>
                  <Button
                    className="shrink-0"
                    disabled={isDetecting}
                    onClick={() => {
                      startDetecting(() => {
                        void handleDetectSports();
                      });
                    }}
                    size="sm"
                    type="button"
                    variant="outline"
                  >
                    {isDetecting ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    Detect sports from bio
                  </Button>
                </div>
                <Textarea
                  className="min-h-[160px]"
                  id="profile-bio"
                  onChange={(event) => setBio(event.target.value)}
                  placeholder="Tell people what you play, where you play, and when you usually join."
                  value={bio}
                />
              </div>
            </div>

            <Card className="border-neutral-200 bg-neutral-50">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Skill Level</CardTitle>
                <CardDescription>Use a simple 1 to 5 scale for how competitive you are.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-neutral-600">
                  <span>Beginner</span>
                  <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                    Level {skill}
                  </span>
                  <span>Advanced</span>
                </div>
                <input
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-neutral-200 accent-neutral-900"
                  max={5}
                  min={1}
                  onChange={(event) => setSkill(Number(event.target.value))}
                  type="range"
                  value={skill}
                />
                <div className="flex justify-between text-xs text-neutral-500">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <span key={level}>{level}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-neutral-600" />
              <h2 className="text-sm font-medium text-neutral-800">Sports</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {sports.map((sport) => {
                const selected = selectedSportIds.includes(sport.id);
                const status = sportStatusLabel(sport.id);

                return (
                  <button
                    className={cn(
                      "rounded-full border px-0 py-0 transition-transform hover:-translate-y-0.5",
                      selected ? "border-neutral-900" : "border-neutral-200",
                    )}
                    key={sport.id}
                    onClick={() => toggleSport(sport.id)}
                    type="button"
                  >
                    <Badge
                      className={cn(
                        "gap-2 px-4 py-2 text-sm",
                        selected
                          ? "bg-neutral-900 text-white"
                          : "bg-white text-neutral-700",
                      )}
                      variant="outline"
                    >
                      <span>{sport.name}</span>
                      {status ? (
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide",
                            status === "YES"
                              ? "bg-emerald-500/20 text-emerald-100"
                              : "bg-rose-500/20 text-rose-100",
                          )}
                        >
                          {status}
                        </span>
                      ) : null}
                    </Badge>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              className="min-w-[160px] bg-neutral-950 text-white hover:opacity-95"
              disabled={isSaving}
              onClick={() => {
                startSaving(() => {
                  void handleSave();
                });
              }}
              type="button"
            >
              {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
              Save
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
