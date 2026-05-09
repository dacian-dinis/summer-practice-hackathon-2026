import { cn } from "@/lib/utils";

const ACCENT = "#FC5200";

type LogoMarkProps = {
  size?: number;
  className?: string;
  accent?: string;
  on?: string;
  title?: string;
};

export function LogoMark({
  size = 40,
  className,
  accent = ACCENT,
  on = "#ffffff",
  title = "ShowUp2Move",
}: LogoMarkProps): JSX.Element {
  const ratio = 130 / 100;
  return (
    <svg
      aria-label={title}
      className={className}
      height={size * ratio}
      role="img"
      viewBox="0 0 100 130"
      width={size}
    >
      <title>{title}</title>
      <path
        d="M50 4 C25 4 8 22 8 48 C8 78 50 126 50 126 C50 126 92 78 92 48 C92 22 75 4 50 4 Z"
        fill={accent}
      />
      <g transform="translate(50 50) rotate(-90)">
        <path d="M-22 -16 L-12 -16 L-2 0 L-12 16 L-22 16 L-12 0 Z" fill={on} opacity="0.4" />
        <path d="M-8 -16 L2 -16 L12 0 L2 16 L-8 16 L2 0 Z" fill={on} opacity="0.7" />
        <path d="M6 -16 L16 -16 L26 0 L16 16 L6 16 L16 0 Z" fill={on} />
      </g>
    </svg>
  );
}

type LogoProps = {
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
  className?: string;
};

export function Logo({ size = "md", withTagline = false, className }: LogoProps): JSX.Element {
  const markSize = size === "sm" ? 28 : size === "lg" ? 64 : 40;
  const wordSizeClass =
    size === "sm" ? "text-xl" : size === "lg" ? "text-5xl sm:text-6xl" : "text-2xl sm:text-3xl";
  const chipPaddingClass = size === "sm" ? "px-1.5" : "px-2.5";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark size={markSize} />
      <div>
        <div
          className={cn(
            "flex flex-wrap items-center font-extrabold tracking-tight leading-none text-neutral-950 dark:text-neutral-50",
            wordSizeClass,
          )}
          style={{ fontFamily: "'Archivo', system-ui, sans-serif", letterSpacing: "-0.04em" }}
        >
          <span>showup</span>
          <span
            className={cn(
              "mx-1 inline-flex items-center rounded-md text-white",
              chipPaddingClass,
            )}
            style={{ backgroundColor: ACCENT }}
          >
            2
          </span>
          <span>move</span>
        </div>
        {withTagline ? (
          <>
            <div className="mt-2 h-px bg-neutral-900/85 dark:bg-neutral-50/70" />
            <div
              className="mt-2 flex justify-between gap-3 text-[10px] font-medium uppercase text-neutral-500 dark:text-neutral-400"
              style={{ letterSpacing: "0.2em", fontFamily: "ui-monospace, SFMono-Regular, monospace" }}
            >
              <span>SOCIAL</span>
              <span>SPORT</span>
              <span>SPONTANEOUS</span>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
