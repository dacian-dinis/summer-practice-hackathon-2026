"use client";

import type { ChangeEvent } from "react";
import { Loader2, Save, Sparkles, Target, UserRound, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import type { SaveProfileInput } from "@/app/profile/actions";
import { saveProfile } from "@/app/profile/actions";
import { Avatar } from "@/components/avatar";
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
  initialPhotoUrl: string | null;
  initialSkill: number;
  sports: SportOption[];
  initialSportIds: string[];
  availabilityToday: Array<{
    sportId: string;
    status: string;
  }>;
};

const MAX_PHOTO_DIMENSION = 512;
const MAX_PHOTO_DATA_URL_LENGTH = 500_000;
const PHOTO_DETECT_SPORTS = new Set([
  "Football",
  "Tennis",
  "Basketball",
  "Padel",
  "Volleyball",
]);

function Notice({ message }: { message: string | null }): JSX.Element | null {
  if (!message) {
    return null;
  }

  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/60 dark:text-amber-200">
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
  const [pendingStatus, setPendingStatus] = useState<"YES" | "NO" | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  async function updateAvailability(status: "YES" | "NO"): Promise<void> {
    setNotice(null);
    setPendingStatus(status);

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

      router.refresh();
    } catch {
      setNotice(`Could not update ${sportName}.`);
      toast({ title: "Availability update failed" });
    } finally {
      setPendingStatus(null);
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Button
          className={cn(
            "min-h-10 flex-1",
            currentStatus === "YES" && "bg-emerald-600 text-white hover:opacity-95",
          )}
          disabled={pendingStatus !== null}
          onClick={() => void updateAvailability("YES")}
          size="sm"
          type="button"
          variant={currentStatus === "YES" ? "default" : "outline"}
        >
          {pendingStatus === "YES" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Yes
        </Button>
        <Button
          className={cn(
            "min-h-10 flex-1",
            currentStatus === "NO" && "bg-rose-600 text-white hover:opacity-95",
          )}
          disabled={pendingStatus !== null}
          onClick={() => void updateAvailability("NO")}
          size="sm"
          type="button"
          variant={currentStatus === "NO" ? "default" : "outline"}
        >
          {pendingStatus === "NO" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          No
        </Button>
      </div>
      <Notice message={notice} />
    </div>
  );
}

export function FindGroupButton({ sportIds }: FindGroupButtonProps): JSX.Element {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  async function handleClick(): Promise<void> {
    setNotice(null);
    setIsPending(true);

    try {
      const response = await fetch("/api/match", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sportIds }),
      });

      if (!response.ok) {
        setNotice("Could not start matching.");
        toast({ title: "Couldn't run matching." });
        return;
      }

      const data: { created: Array<{ id: string }>; message?: string } = await response.json();

      if (data.created.length > 0) {
        toast({ title: "You joined a group! Check Groups tab." });
        router.refresh();
        return;
      }

      toast({ title: "Not enough players yet — invite a friend!" });
    } catch {
      setNotice("Could not start matching.");
      toast({ title: "Couldn't run matching." });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="space-y-2">
      <Button
        className="min-h-12 w-full rounded-md bg-brand text-white hover:bg-brand-deep font-bold uppercase tracking-wider"
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
  initialPhotoUrl,
  initialSkill,
  sports,
  initialSportIds,
  availabilityToday,
}: ProfileFormProps): JSX.Element {
  const router = useRouter();
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [name, setName] = useState(initialName);
  const [bio, setBio] = useState(initialBio);
  const [skill, setSkill] = useState(initialSkill);
  const [photoUrl, setPhotoUrl] = useState<string | null>(initialPhotoUrl);
  const [isProcessingPhoto, setIsProcessingPhoto] = useState(false);
  const [isDetectingPhotoSports, setIsDetectingPhotoSports] = useState(false);
  const [selectedSportIds, setSelectedSportIds] = useState<string[]>(initialSportIds);
  const [notice, setNotice] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
      photoUrl,
      skill,
      sportIds: selectedSportIds,
    };
  }

  function showNotice(message: string): void {
    setNotice(message);
    toast({ title: message });
  }

  function loadImage(dataUrl: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const image = new Image();

      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Could not read image"));
      image.src = dataUrl;
    });
  }

  function readFileAsDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result !== "string") {
          reject(new Error("Could not read file"));
          return;
        }

        resolve(reader.result);
      };

      reader.onerror = () => reject(new Error("Could not read file"));
      reader.readAsDataURL(file);
    });
  }

  async function resizePhoto(file: File): Promise<string> {
    const sourceDataUrl = await readFileAsDataUrl(file);
    const image = await loadImage(sourceDataUrl);
    const canvas = canvasRef.current;

    if (!canvas) {
      throw new Error("Canvas unavailable");
    }

    let targetWidth = image.naturalWidth;
    let targetHeight = image.naturalHeight;
    const maxDimension = Math.max(targetWidth, targetHeight);

    if (maxDimension > MAX_PHOTO_DIMENSION) {
      const scale = MAX_PHOTO_DIMENSION / maxDimension;
      targetWidth = Math.max(1, Math.round(targetWidth * scale));
      targetHeight = Math.max(1, Math.round(targetHeight * scale));
    }

    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Canvas unavailable");
    }

    for (let attempt = 0; attempt < 5; attempt += 1) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      context.clearRect(0, 0, targetWidth, targetHeight);
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, targetWidth, targetHeight);
      context.drawImage(image, 0, 0, targetWidth, targetHeight);

      for (const quality of [0.9, 0.8, 0.7, 0.6, 0.5]) {
        const candidate = canvas.toDataURL("image/jpeg", quality);

        if (candidate.length <= MAX_PHOTO_DATA_URL_LENGTH) {
          return candidate;
        }
      }

      targetWidth = Math.max(1, Math.round(targetWidth * 0.85));
      targetHeight = Math.max(1, Math.round(targetHeight * 0.85));
    }

    throw new Error("Photo is still too large after resizing");
  }

  async function handlePhotoChange(event: ChangeEvent<HTMLInputElement>): Promise<void> {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) {
      return;
    }

    setNotice(null);
    setIsProcessingPhoto(true);

    try {
      const nextPhotoUrl = await resizePhoto(file);
      setPhotoUrl(nextPhotoUrl);
      toast({ title: "Photo ready" });
    } catch {
      showNotice("Could not process photo");
    } finally {
      setIsProcessingPhoto(false);
    }
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

      if (response.status === 404) {
        showNotice("AI not available");
        return;
      }

      if (!response.ok) {
        showNotice("AI not available");
        return;
      }

      const data: unknown = await response.json();
      const nextSportIds = parseSportIdsFromAi(data, sports);

      if (nextSportIds.length === 0) {
        showNotice("No sports detected");
        return;
      }

      setSelectedSportIds(Array.from(new Set(nextSportIds)));
      toast({ title: `AI extracted ${nextSportIds.length} sports` });
    } catch {
      showNotice("AI not available");
    } finally {
      setIsDetecting(false);
    }
  }

  async function handleDetectSportsFromPhoto(): Promise<void> {
    if (!photoUrl) {
      showNotice("Add a photo first");
      return;
    }

    setNotice(null);
    setIsDetectingPhotoSports(true);

    try {
      const response = await fetch("/api/ai/extract-sports-from-photo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ photoDataUrl: photoUrl }),
      });

      if (!response.ok) {
        showNotice("Photo AI not available");
        return;
      }

      const data: unknown = await response.json();
      const values =
        typeof data === "object" && data !== null && Array.isArray((data as { sports?: unknown }).sports)
          ? (data as { sports: unknown[] }).sports
          : [];

      const sportByName = new Map(sports.map((sport) => [sport.name, sport.id]));
      const nextSportIds = values
        .filter((value): value is string => typeof value === "string" && PHOTO_DETECT_SPORTS.has(value))
        .map((value) => sportByName.get(value) ?? null)
        .filter((value): value is string => value !== null);

      if (nextSportIds.length === 0) {
        showNotice("No sports detected from photo");
        return;
      }

      setSelectedSportIds((current) => Array.from(new Set([...current, ...nextSportIds])));
      toast({ title: `Photo AI detected ${nextSportIds.length} sports` });
    } catch {
      showNotice("Photo AI not available");
    } finally {
      setIsDetectingPhotoSports(false);
    }
  }

  async function handleSave(): Promise<void> {
    setNotice(null);
    setIsSaving(true);

    try {
      const result = await saveProfile(buildPayload());

      if (!result.ok) {
        showNotice(result.error ?? "Could not save profile");
        return;
      }

      showNotice("Profile saved");
      router.refresh();
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-neutral-200 bg-white shadow-lg shadow-neutral-200/70 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-black/30">
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
          <canvas className="hidden" ref={canvasRef} />
          <div className="space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Avatar
                className="h-24 w-24 border border-neutral-200 dark:border-neutral-700"
                fallbackClassName="bg-neutral-200 text-2xl font-semibold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100"
                name={name.trim() || initialName}
                src={photoUrl}
              />
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Profile photo</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    JPG output, max 512x512, kept under roughly 500 KB before save.
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <input
                    accept="image/*"
                    className="block text-sm text-neutral-600 file:mr-4 file:rounded-full file:border-0 file:bg-neutral-900 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white dark:text-neutral-400 dark:file:bg-neutral-100 dark:file:text-neutral-950"
                    disabled={isProcessingPhoto}
                    onChange={(event) => void handlePhotoChange(event)}
                    type="file"
                  />
                  <Button
                    className="min-h-10"
                    disabled={!photoUrl || isDetectingPhotoSports || isProcessingPhoto}
                    onClick={() => void handleDetectSportsFromPhoto()}
                    size="sm"
                    type="button"
                    variant="outline"
                  >
                    {isDetectingPhotoSports ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    ✨ Detect sports from photo
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200" htmlFor="profile-name">
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
                  <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200" htmlFor="profile-bio">
                    Bio
                  </label>
                  <Button
                    className="min-h-10 shrink-0"
                    disabled={isDetecting}
                    onClick={() => void handleDetectSports()}
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

            <Card className="border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Skill Level</CardTitle>
                <CardDescription>Use a simple 1 to 5 scale for how competitive you are.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
                  <span>Beginner</span>
                  <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                    Level {skill}
                  </span>
                  <span>Advanced</span>
                </div>
                <input
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-neutral-200 accent-neutral-900 dark:bg-neutral-800"
                  max={5}
                  min={1}
                  onChange={(event) => setSkill(Number(event.target.value))}
                  type="range"
                  value={skill}
                />
                <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <span key={level}>{level}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
              <h2 className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Sports</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {sports.map((sport) => {
                const selected = selectedSportIds.includes(sport.id);
                const status = sportStatusLabel(sport.id);

                return (
                  <button
                    aria-pressed={selected}
                    className={cn(
                      "min-h-10 rounded-full border px-0 py-0 transition-transform hover:-translate-y-0.5",
                      selected ? "border-neutral-900 dark:border-neutral-100" : "border-neutral-200 dark:border-neutral-800",
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
                          : "bg-white text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300",
                      )}
                      variant="outline"
                    >
                      <span>{sport.name}</span>
                      {status ? (
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide",
                            status === "YES"
                              ? "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300"
                              : "bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950 dark:text-rose-300",
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
              className="min-h-10 min-w-[160px] bg-neutral-950 text-white hover:opacity-95"
              disabled={isSaving}
              onClick={() => void handleSave()}
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
