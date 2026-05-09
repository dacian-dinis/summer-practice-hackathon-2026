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

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FEATURE_CARDS = [
  {
    description: "One click -> venue, weather, draft message. Ranked by AI.",
    icon: Sparkles,
    title: "AI Captain Copilot",
  },
  {
    description: "One tap Yes. Auto-matched into a group with the right size.",
    icon: Zap,
    title: "ShowUp Today",
  },
  {
    description: "See live pickup games happening across your city.",
    icon: Map,
    title: "Pulse Map",
  },
] as const;

const AI_CAPABILITIES = [
  {
    description: "Sport extraction from your bio",
    icon: Users,
  },
  {
    description: "Sport detection from your photo",
    icon: Camera,
  },
  {
    description: "Compatibility scoring across the group",
    icon: Target,
  },
  {
    description: "Weather-aware venue ranking",
    icon: CloudSun,
  },
] as const;

const HOW_IT_WORKS = [
  "Sign up (10s)",
  "Mark Yes for tonight",
  "Get matched",
  "Show up & play",
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
      <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#e0f2fe_0%,#f8fafc_30%,#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_top,#172554_0%,#0a0a0a_28%,#0a0a0a_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_52%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.2),transparent_46%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_48%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_46%)]" />

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(120deg,rgba(34,211,238,0.92)_0%,rgba(139,92,246,0.92)_52%,rgba(249,115,22,0.9)_100%)] bg-[length:200%_200%] animate-[hero-pan_18s_linear_infinite] shadow-[0_40px_120px_-48px_rgba(14,116,144,0.75)] dark:border-white/10 dark:shadow-[0_40px_120px_-48px_rgba(14,165,233,0.4)]">
            <div className="grid gap-12 px-6 py-14 text-white sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:px-12 lg:py-16">
              <div className="flex flex-col justify-center">
                <Badge className="mb-5 w-fit border-white/20 bg-white/[0.12] px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md">
                  Social · Sport · Spontaneous
                </Badge>
                <h1 className="max-w-3xl text-5xl font-black tracking-tight sm:text-6xl">
                  Pickup sports, without the chaos.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.88] sm:text-xl">
                  ShowUp Today. Get matched. Captain a game in one tap.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/register">
                    <Button
                      className="min-h-12 rounded-full bg-white px-6 text-sm font-semibold text-neutral-950 shadow-lg shadow-black/10 hover:bg-neutral-100"
                      size="lg"
                      type="button"
                    >
                      Get started - it&apos;s free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button
                      className="min-h-12 rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20"
                      size="lg"
                      type="button"
                      variant="ghost"
                    >
                      I have an account
                    </Button>
                  </Link>
                </div>
                <Badge className="mt-5 w-fit rounded-full border-white/20 bg-black/[0.15] px-4 py-2 text-xs font-medium text-white/95 backdrop-blur-md">
                  Try it instantly: andrei@showup2move.dev / demo1234
                </Badge>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_62%)]" />
                <Card className="relative w-full max-w-xl rounded-[2rem] border-white/20 bg-slate-950/70 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
                  <CardContent className="space-y-5 p-5 sm:p-6">
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <div>
                        <div className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">Tonight&apos;s thread</div>
                        <div className="mt-1 text-lg font-semibold">Wednesday football run</div>
                      </div>
                      <Badge className="border-emerald-400/30 bg-emerald-400/[0.15] px-3 py-1 text-emerald-100">
                        8/10 locked
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="mr-10 rounded-2xl rounded-bl-md bg-white/10 px-4 py-3 text-sm leading-6 text-white/[0.88]">
                        Captain Copilot found an indoor venue and drafted the invite.
                      </div>
                      <div className="ml-8 rounded-2xl rounded-br-md bg-cyan-300/20 px-4 py-3 text-sm leading-6 text-cyan-50">
                        Weather risk is low. Best fit: Arena Park, 19:30, balanced skill mix.
                      </div>
                      <div className="mr-12 flex items-center gap-3 rounded-2xl rounded-bl-md bg-white/10 px-4 py-3 text-sm text-white/[0.88]">
                        <Users className="h-4 w-4 text-violet-200" />
                        3 more players match your pace and position.
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-xs uppercase tracking-[0.24em] text-orange-200/80">Venue pick</div>
                          <div className="mt-1 text-xl font-semibold">Arena Park Dome</div>
                          <div className="mt-2 text-sm leading-6 text-white/[0.72]">
                            Indoor pitch, 12 min away, best score across weather, skill fit, and player count.
                          </div>
                        </div>
                        <div className="rounded-2xl bg-white/10 p-3">
                          <Map className="h-5 w-5 text-cyan-100" />
                        </div>
                      </div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl bg-white/[0.08] px-3 py-3">
                          <div className="text-xs uppercase tracking-[0.22em] text-white/50">Weather</div>
                          <div className="mt-1 text-sm font-medium">19 C, clear</div>
                        </div>
                        <div className="rounded-2xl bg-white/[0.08] px-3 py-3">
                          <div className="text-xs uppercase tracking-[0.22em] text-white/50">Draft</div>
                          <div className="mt-1 text-sm font-medium">Invite ready</div>
                        </div>
                        <div className="rounded-2xl bg-white/[0.08] px-3 py-3">
                          <div className="text-xs uppercase tracking-[0.22em] text-white/50">Start</div>
                          <div className="mt-1 text-sm font-medium">19:30 tonight</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-8 max-w-2xl">
            <Badge className="mb-4 w-fit" variant="secondary">
              What makes it feel effortless
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">
              Built for same-day momentum, not scheduling overhead.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {FEATURE_CARDS.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card
                  className="rounded-[1.75rem] border-neutral-200/80 bg-white/80 shadow-lg shadow-cyan-950/5 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80"
                  key={feature.title}
                >
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#cffafe_0%,#ede9fe_55%,#ffedd5_100%)] text-neutral-950 dark:bg-[linear-gradient(135deg,#164e63_0%,#312e81_55%,#9a3412_100%)] dark:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-950 dark:text-neutral-50">{feature.title}</h3>
                    <p className="mt-3 max-w-xs text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="border-y border-neutral-200/70 bg-neutral-950 py-16 text-white dark:border-neutral-800 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
              <div>
                <Badge className="mb-4 w-fit border-white/10 bg-white/10 text-white">AI layer</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Powered by Claude</h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-neutral-300">
                  The product acts like an assistant captain: it interprets signals, checks the conditions, and helps the
                  group converge faster.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {AI_CAPABILITIES.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Card className="rounded-[1.5rem] border-white/10 bg-white/5 text-white" key={item.description}>
                      <CardContent className="flex items-start gap-4 p-5">
                        <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                          <Icon className="h-5 w-5 text-cyan-200" />
                        </div>
                        <div className="text-sm font-medium leading-7 text-neutral-100">{item.description}</div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-8 max-w-2xl">
            <Badge className="mb-4 w-fit" variant="secondary">
              From sign-up to kickoff
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">
              Four moves, then you&apos;re on the pitch.
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, index) => (
              <Card
                className="relative overflow-hidden rounded-[1.75rem] border-neutral-200/80 bg-white/85 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/85"
                key={step}
              >
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950 text-lg font-bold text-white dark:bg-white dark:text-neutral-950">
                    {index + 1}
                  </div>
                  <div className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">{step}</div>
                  <div className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                    {index === 0 && "Create your profile and let the app understand what you actually play."}
                    {index === 1 && "Signal your availability for tonight instead of managing another group chat thread."}
                    {index === 2 && "ShowUp groups players into the right sport, size, and vibe for that session."}
                    {index === 3 && "You already have the venue, message, and group. Just walk in and play."}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-neutral-200 bg-white px-6 py-10 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.35)] dark:border-neutral-800 dark:bg-neutral-900 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <Badge className="mb-4 w-fit" variant="secondary">
                  Ready when you are
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">
                  Ready to ShowUp?
                </h2>
                <p className="mt-4 text-base leading-8 text-neutral-600 dark:text-neutral-400">
                  Join faster games, cleaner coordination, and a product that feels like it actually wants you out
                  playing tonight.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/register">
                  <Button className="min-h-12 rounded-full px-6" size="lg" type="button">
                    Get started - it&apos;s free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button className="min-h-12 rounded-full px-6" size="lg" type="button" variant="outline">
                    I have an account
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 border-t border-neutral-200 pt-6 dark:border-neutral-800">
              {STACK_BADGES.map((item) => (
                <Badge className="rounded-full px-3 py-1" key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes hero-pan {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `,
        }}
      />
    </>
  );
}
