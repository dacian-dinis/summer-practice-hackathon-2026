"use client";

import { Check, Copy, Loader2, Share2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

type ShareGroupButtonProps = {
  groupId: string;
};

export function ShareGroupButton({ groupId }: ShareGroupButtonProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleShare(): Promise<void> {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`/api/groups/${groupId}/share`, {
        method: "POST",
        credentials: "same-origin",
      });

      if (!response.ok) {
        setError("Could not generate a share link.");
        return;
      }

      const json = (await response.json()) as { url: string };
      const fullUrl = new URL(json.url, window.location.origin).toString();
      setShareUrl(fullUrl);

      try {
        await navigator.clipboard.writeText(fullUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // clipboard may be blocked; URL is still visible
      }
    } catch {
      setError("Could not generate a share link.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCopy(): Promise<void> {
    if (!shareUrl) return;

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  return (
    <div className="space-y-2">
      {!shareUrl ? (
        <Button
          className="min-h-10 rounded-md border-2 border-brand-ink bg-transparent font-bold uppercase tracking-wider text-brand-ink hover:bg-brand-ink hover:text-white dark:border-neutral-50 dark:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-950"
          disabled={isLoading}
          onClick={() => void handleShare()}
          size="sm"
          type="button"
          variant="outline"
        >
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Share2 className="mr-2 h-4 w-4" />}
          Share invite
        </Button>
      ) : (
        <div className="flex flex-wrap items-center gap-2">
          <code className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
            {shareUrl}
          </code>
          <Button
            className="min-h-10 rounded-md"
            onClick={() => void handleCopy()}
            size="sm"
            type="button"
            variant="outline"
          >
            {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
      )}
      {error ? (
        <div className="text-xs text-rose-600 dark:text-rose-300">{error}</div>
      ) : null}
    </div>
  );
}
