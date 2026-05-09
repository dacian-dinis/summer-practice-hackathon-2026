import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
};

const SIZE_TO_HEIGHT: Record<NonNullable<LogoProps["size"]>, number> = {
  sm: 28,
  md: 40,
  lg: 56,
  xl: 96,
};

export function Logo({
  className,
  priority = false,
  size = "md",
}: LogoProps): JSX.Element {
  const height = SIZE_TO_HEIGHT[size];
  const width = Math.round(height * (820 / 460));

  return (
    <Image
      alt="showup2move — social, sport, spontaneous"
      className={cn("select-none", className)}
      height={height}
      priority={priority}
      src="/showup2move-logo.png"
      width={width}
    />
  );
}
