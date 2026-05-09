import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
};

const SIZE_TO_HEIGHT: Record<NonNullable<LogoProps["size"]>, number> = {
  sm: 32,
  md: 44,
  lg: 64,
  xl: 96,
};

const ASPECT = 1340 / 287;

export function Logo({
  className,
  priority = false,
  size = "md",
}: LogoProps): JSX.Element {
  const height = SIZE_TO_HEIGHT[size];
  const width = Math.round(height * ASPECT);

  return (
    <span className={cn("relative inline-block select-none", className)} style={{ width, height }}>
      <Image
        alt="showup2move — social, sport, spontaneous"
        className="block dark:hidden"
        height={height}
        priority={priority}
        src="/showup2move-logo.png"
        width={width}
      />
      <Image
        alt=""
        aria-hidden="true"
        className="hidden dark:block"
        height={height}
        priority={priority}
        src="/showup2move-logo-dark.png"
        width={width}
      />
    </span>
  );
}
