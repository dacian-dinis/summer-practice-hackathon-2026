"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";

type ConfirmGroupButtonProps = {
  confirmed: boolean;
  groupId: string;
};

export function ConfirmGroupButton({
  confirmed: initialConfirmed,
  groupId,
}: ConfirmGroupButtonProps): JSX.Element {
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(initialConfirmed);
  const [isPending, startTransition] = useTransition();

  async function handleToggle(): Promise<void> {
    const response = await fetch(`/api/groups/${groupId}/confirm`, {
      method: "POST",
    });

    if (!response.ok) {
      return;
    }

    const data: unknown = await response.json();
    const nextConfirmed =
      typeof data === "object" &&
      data !== null &&
      "confirmed" in data &&
      typeof data.confirmed === "boolean"
        ? data.confirmed
        : confirmed;

    setConfirmed(nextConfirmed);
    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <Button
      className={confirmed ? "bg-emerald-600 text-white hover:opacity-95" : ""}
      disabled={isPending}
      onClick={() => void handleToggle()}
      type="button"
      variant={confirmed ? "default" : "secondary"}
    >
      {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Confirm I&apos;m in
    </Button>
  );
}
