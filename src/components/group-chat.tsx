"use client";

import { Loader2, SendHorizonal } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type GroupChatMessage = {
  id: string;
  userId: string;
  userName: string;
  text: string;
  createdAt: string;
};

type GroupChatProps = {
  currentUserId: string;
  groupId: string;
  initialMessages: GroupChatMessage[];
};

type MessagesResponse = {
  messages: GroupChatMessage[];
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2);
}

function formatMessageTime(createdAt: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(createdAt));
}

function isMessagesResponse(value: unknown): value is MessagesResponse {
  if (typeof value !== "object" || value === null || !("messages" in value)) {
    return false;
  }

  return Array.isArray(value.messages);
}

export function GroupChat({
  currentUserId,
  groupId,
  initialMessages,
}: GroupChatProps): JSX.Element {
  const [messages, setMessages] = useState<GroupChatMessage[]>(initialMessages);
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    let active = true;

    async function loadMessages(): Promise<void> {
      try {
        const response = await fetch(`/api/groups/${groupId}/messages`, {
          cache: "no-store",
        });

        if (!response.ok) {
          return;
        }

        const data: unknown = await response.json();

        if (!active || !isMessagesResponse(data)) {
          return;
        }

        setMessages(data.messages);
      } catch {
        return;
      }
    }

    void loadMessages();
    const interval = window.setInterval(() => {
      void loadMessages();
    }, 2000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, [groupId]);

  const orderedMessages = useMemo(
    () =>
      [...messages].sort(
        (left, right) => new Date(left.createdAt).getTime() - new Date(right.createdAt).getTime(),
      ),
    [messages],
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const trimmed = text.trim();
    if (!trimmed || trimmed.length > 500) {
      return;
    }

    setIsSending(true);

    const optimisticMessage: GroupChatMessage = {
      id: `optimistic-${Date.now()}`,
      userId: currentUserId,
      userName: "You",
      text: trimmed,
      createdAt: new Date().toISOString(),
    };

    setMessages((current) => [...current, optimisticMessage]);
    setText("");

    try {
      const response = await fetch(`/api/groups/${groupId}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: trimmed }),
      });

      if (!response.ok) {
        setMessages((current) => current.filter((message) => message.id !== optimisticMessage.id));
        return;
      }

      const data: unknown = await response.json();
      const createdMessage =
        typeof data === "object" &&
        data !== null &&
        "message" in data &&
        typeof data.message === "object" &&
        data.message !== null
          ? (data.message as GroupChatMessage)
          : null;

      if (!createdMessage) {
        return;
      }

      setMessages((current) =>
        [...current.filter((message) => message.id !== optimisticMessage.id), createdMessage].sort(
          (left, right) => new Date(left.createdAt).getTime() - new Date(right.createdAt).getTime(),
        ),
      );
    } catch {
      setMessages((current) => current.filter((message) => message.id !== optimisticMessage.id));
    } finally {
      setIsSending(false);
    }
  }

  return (
    <Card className="border-neutral-200 bg-white">
      <CardHeader>
        <CardTitle className="text-xl">Group Chat</CardTitle>
        <CardDescription>Coordinate the plan without leaving the group page.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="max-h-[420px] space-y-3 overflow-y-auto rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
          {orderedMessages.length === 0 ? (
            <div className="text-sm text-neutral-500">No messages yet. Start the conversation.</div>
          ) : null}
          {orderedMessages.map((message) => {
            const isCurrentUser = message.userId === currentUserId;

            return (
              <div
                className={cn("flex gap-3", isCurrentUser && "justify-end")}
                key={message.id}
              >
                {!isCurrentUser ? (
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-neutral-200 text-xs font-semibold text-neutral-700">
                      {getInitials(message.userName)}
                    </AvatarFallback>
                  </Avatar>
                ) : null}
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm",
                    isCurrentUser
                      ? "bg-neutral-950 text-white"
                      : "border border-neutral-200 bg-white text-neutral-900",
                  )}
                >
                  <div
                    className={cn(
                      "mb-1 flex items-center gap-2 text-xs",
                      isCurrentUser ? "text-neutral-300" : "text-neutral-500",
                    )}
                  >
                    <span className="font-semibold">
                      {isCurrentUser ? "You" : message.userName}
                    </span>
                    <span>{formatMessageTime(message.createdAt)}</span>
                  </div>
                  <div className="whitespace-pre-wrap break-words">{message.text}</div>
                </div>
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        <form className="flex flex-col gap-2 sm:flex-row" onSubmit={(event) => void handleSubmit(event)}>
          <Input
            className="min-h-10"
            maxLength={500}
            onChange={(event) => setText(event.target.value)}
            placeholder="Send a message to the group"
            value={text}
          />
          <Button className="min-h-10 sm:w-auto" disabled={isSending || text.trim().length === 0} type="submit">
            {isSending ? <Loader2 className="h-4 w-4 animate-spin" /> : <SendHorizonal className="h-4 w-4" />}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
