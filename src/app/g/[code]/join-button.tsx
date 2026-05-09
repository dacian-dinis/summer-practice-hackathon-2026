"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

type JoinGroupButtonProps = {
  groupId: string;
  label: string;
};

export function JoinGroupButton({ groupId, label }: JoinGroupButtonProps): JSX.Element {
  const [isJoining, setIsJoining] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleJoin(): Promise<void> {
    setError(null);
    setIsJoining(true);

    try {
      const response = await fetch(`/api/groups/${groupId}/join`, {
        method: "POST",
        credentials: "same-origin",
      });

      if (!response.ok) {
        const json = (await response.json().catch(() => ({}))) as { error?: string };
        setError(json.error ?? "Could not join the group.");
        return;
      }

      window.location.assign(`/groups/${groupId}`);
    } catch {
      setError("Could not join the group.");
    } finally {
      setIsJoining(false);
    }
  }

  return (
    <div className="space-y-2">
      <Button
        className="min-h-11 w-full rounded-md bg-brand text-white hover:bg-brand-deep font-bold uppercase tracking-wider"
        disabled={isJoining}
        onClick={() => void handleJoin()}
        type="button"
      >
        {isJoining ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {label}
      </Button>
      {error ? (
        <div className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700 dark:border-rose-900 dark:bg-rose-950/60 dark:text-rose-200">
          {error}
        </div>
      ) : null}
    </div>
  );
}
