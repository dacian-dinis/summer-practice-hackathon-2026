import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type DialogProps = {
  open?: boolean;
  children: ReactNode;
};

export function Dialog({ open = false, children }: DialogProps): JSX.Element | null {
  if (!open) {
    return null;
  }

  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">{children}</div>;
}

export function DialogContent({ children, className }: { children: ReactNode; className?: string }): JSX.Element {
  return <div className={cn("w-full max-w-lg rounded-lg bg-background p-6 shadow-lg", className)}>{children}</div>;
}

export function DialogHeader({ children }: { children: ReactNode }): JSX.Element {
  return <div className="flex flex-col space-y-1.5 text-center sm:text-left">{children}</div>;
}

export function DialogTitle({ children }: { children: ReactNode }): JSX.Element {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}

export function DialogDescription({ children }: { children: ReactNode }): JSX.Element {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}

export function DialogTrigger({ children }: { children: ReactNode }): JSX.Element {
  return <>{children}</>;
}
