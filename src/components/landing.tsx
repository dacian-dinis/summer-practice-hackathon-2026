import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CloudSun,
  Map,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

import { LogoMark } from "@/components/logo";
import { Button } from "@/components/ui/button";

const FEATURE_CARDS = [
  {
    description: "One click → venue, weather, draft message. Ranked by AI.",
    icon: Sparkles,
    title: "AI Captain Copilot",
    tag: "01",
  },
  {
    description: "One tap Yes. Auto-matched into a group with the right size.",
    icon: Zap,
    title: "ShowUp Today",
    tag: "02",
  },
  {
    description: "See live pickup games happening across your city.",
    icon: Map,
    title: "Pulse Map",
    tag: "03",
  },
] as const;

const AI_CAPABILITIES = [
  { tag: "BIO", icon: Users, description: "Sport extraction from your bio" },
  { tag: "PHOTO", icon: Camera, description: "Sport detection from your photo" },
  { tag: "FIT", icon: Target, description: "Compatibility scoring across the group" },
  { tag: "WEATHER", icon: CloudSun, description: "Weather-aware venue ranking" },
] as const;

const HOW_IT_WORKS = [
  { title: "Sign up", desc: "10 seconds. Email + password." },
  { title: "Mark Yes", desc: "Tap once for tonight." },
  { title: "Get matched", desc: "AI groups you with the right size + skill." },
  { title: "Show up & play", desc: "Venue, time, message — done." },
] as const;

const STACK_BADGES = [
  "Next.js",
  "Prisma",
  "SQLite",
  "Tailwind",
  "shadcn",
  "Claude Haiku 4.5",
  "Leaflet",
] as const;

export function Landing(): JSX.Element {
  return (
    <>
      {/* HERO — cream block */}
      <section className="relative overflow-hidden border-y-2 border-brand-ink bg-brand-cream dark:border-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <div className="font-mono-label mb-6 text-brand-ink/70 dark:text-neutral-50/70">
              SOCIAL · SPORT · SPONTANEOUS
            </div>
            <h1 className="font-display text-brand-ink dark:text-neutral-50 text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
              Pickup sports,
              <br />
              <span className="text-brand">without</span> the chaos.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-brand-ink/80 dark:text-neutral-300 sm:text-xl">
              ShowUp Today. Get matched. Captain a game in one tap. AI handles the venue, the weather, and the message.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/register">
                <Button
                  className="min-h-12 rounded-md bg-brand px-7 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-deep"
                  size="lg"
                  type="button"
                >
                  Get started — it&apos;s free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  className="min-h-12 rounded-md border-2 border-brand-ink bg-transparent px-7 text-sm font-bold uppercase tracking-wider text-brand-ink hover:bg-brand-ink hover:text-white dark:border-neutral-50 dark:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-950"
                  size="lg"
                  type="button"
                  variant="outline"
                >
                  I have an account
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute inset-0 hidden lg:block bg-[radial-gradient(circle_at_70%_50%,rgba(252,82,0,0.18),transparent_60%)]" />
            <LogoMark size={260} />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mb-12 max-w-3xl">
            <div className="font-mono-label mb-4 text-brand-ink/60 dark:text-neutral-400">
              WHAT MAKES IT EFFORTLESS
            </div>
            <h2 className="font-display text-4xl text-brand-ink dark:text-neutral-50 sm:text-5xl lg:text-6xl">
              Built for same-day momentum,
              <br />
              not scheduling overhead.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {FEATURE_CARDS.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  className="group flex h-full flex-col rounded-md border-2 border-brand-ink bg-white p-7 transition-colors hover:border-brand dark:border-neutral-50 dark:bg-neutral-950 dark:hover:border-brand"
                  key={feature.title}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-cream text-brand-ink dark:bg-neutral-50 dark:text-neutral-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="font-mono-label text-brand-ink/40 dark:text-neutral-400">
                      {feature.tag}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl text-brand-ink dark:text-neutral-50">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-brand-ink/70 dark:text-neutral-400">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI BAND — bold blue */}
      <section className="border-y-2 border-brand-ink bg-bluebold text-white dark:border-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
            <div>
              <div className="font-mono-label mb-4 text-white/70">AI LAYER</div>
              <h2 className="font-display text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
                Powered by Claude.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/85">
                The product acts like an assistant captain. It reads signals, checks the conditions, and helps the group
                converge faster — so you stop scheduling and start playing.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {AI_CAPABILITIES.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    className="rounded-md border-2 border-white/30 bg-white/[0.06] p-5"
                    key={item.description}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <Icon className="h-5 w-5" />
                      <span className="font-mono-label text-white/70">{item.tag}</span>
                    </div>
                    <div className="font-display text-base leading-snug">{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-brand-cream dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mb-12 max-w-3xl">
            <div className="font-mono-label mb-4 text-brand-ink/60 dark:text-neutral-400">
              FROM SIGN-UP TO KICKOFF
            </div>
            <h2 className="font-display text-4xl text-brand-ink dark:text-neutral-50 sm:text-5xl lg:text-6xl">
              Four moves, then you&apos;re on the pitch.
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-0 right-0 top-[3.5rem] hidden h-[2px] bg-brand-ink/20 dark:bg-neutral-700 lg:block" />
            <div className="grid gap-6 lg:grid-cols-4">
              {HOW_IT_WORKS.map((step, index) => (
                <div className="relative" key={step.title}>
                  <div className="font-display text-7xl leading-none text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-4 font-display text-xl text-brand-ink dark:text-neutral-50">
                    {step.title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-brand-ink/70 dark:text-neutral-400">
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="border-t-2 border-brand-ink bg-brand-ink text-white dark:border-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="font-mono-label mb-4 text-white/60">READY WHEN YOU ARE</div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
                Ready to <span className="text-brand">ShowUp?</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-white/80">
                Faster games. Cleaner coordination. A product that wants you out playing tonight.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/register">
                <Button
                  className="min-h-12 rounded-md bg-brand px-7 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-deep"
                  size="lg"
                  type="button"
                >
                  Get started — it&apos;s free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  className="min-h-12 rounded-md border-2 border-white bg-transparent px-7 text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-brand-ink"
                  size="lg"
                  type="button"
                  variant="outline"
                >
                  I have an account
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-2 border-t border-white/15 pt-8">
            {STACK_BADGES.map((item) => (
              <span
                className="font-mono-label rounded-sm border border-white/20 px-3 py-1.5 text-white/70"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
