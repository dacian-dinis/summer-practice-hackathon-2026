import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Avatar({ className, ...props }: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)} {...props} />;
}

export function AvatarImage({
  alt,
  className,
  src,
}: {
  alt: string;
  className?: string;
  src: string;
}): JSX.Element {
  return <img alt={alt} className={cn("aspect-square h-full w-full", className)} src={src} />;
}

export function AvatarFallback({ className, ...props }: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)} {...props} />;
}
