import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Toast({ className, ...props }: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div className={cn("rounded-md border bg-background p-4 shadow-md", className)} {...props} />;
}

export function ToastTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>): JSX.Element {
  return <h4 className={cn("text-sm font-semibold", className)} {...props} />;
}

export function ToastDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>): JSX.Element {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />;
}
