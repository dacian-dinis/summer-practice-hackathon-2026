# ShowUp2Move — 5-Hour Solo Build Plan (Designer + Codex Agent)

**Constraints:** solo dev, 5h, live demo at end, Next.js + SQLite + mock auth.
**Goal:** maximize score (~8,500+ pts realistic, 11.5k target) with one polished, demo-able flow + one wow factor.

**Operating model:** **Claude Code is the designer/architect.** Codex CLI is the implementing agent. Claude Code writes briefs, reviews summaries, commits. Codex reads source, writes code, runs migrations. Claude Code's context stays clean — implementation files are never loaded into Claude's window. This conserves tokens for design, prompt-engineering, and the final polish pass.

---

## Roles

| | Claude Code (designer) | Codex (agent) |
|---|---|---|
| Owns | Architecture, data model, AI prompts, demo flow, judging strategy, brief authorship, commit gating | File creation/edit, migrations, package installs, component implementation, fixture data, test runs |
| Reads | `git status`, `git diff --stat`, Codex stdout summaries, *targeted* `grep` only when reviewing | Whole files, package.json, Prisma schema, etc. |
| Writes | This plan, brief texts, commit messages, the demo script | All source code in `src/`, `prisma/`, config files |
| Costs | Premium Claude tokens — preserve | Codex API budget — spend liberally |

**Hard rule:** Claude Code does not `Read` any generated source file unless a Codex run failed and root-cause analysis requires it. Reviews happen via `git diff --stat` + Codex's own summary.

---

## North Star

A judge, in 90 seconds:
1. Logs in as a seed user
2. Taps "ShowUp Today" → matched into a group
3. As captain, clicks **AI Captain Copilot** → venue + weather + drafted poll → group "votes" → event auto-created with map + calendar link

**The wow:** AI Captain Copilot. One button = full event.

---

## Stack (locked — Claude Code's design choices)

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) + TS | API routes built-in |
| UI | Tailwind + shadcn/ui | Polished default |
| DB | Prisma + SQLite | Zero cloud setup |
| Auth | Mock cookie (`userId`) + Switch User dropdown | Saves 45 min |
| AI (Copilot) | Claude Haiku 4.5 (`claude-haiku-4-5-20251001`) | Fast, cheap, smart |
| Maps | Leaflet + OSM tiles | No API key |
| Weather | Open-Meteo | No API key |
| Realtime | 2s polling | Faster to wire than SSE |
| Dev agent | Codex CLI | Executes the plan |

---

## Data Model (Prisma — Claude Code spec, Codex implements)

```
User         id, name, bio, photoUrl?, skill (1-5), createdAt
Sport        id, name, minGroup, maxGroup
UserSport    userId, sportId
Availability userId, date (YYYY-MM-DD), sportId, status (YES/NO)
Group        id, sportId, date, captainId, status (FORMING|CONFIRMED|DONE)
GroupMember  groupId, userId, confirmed (bool)
Message      id, groupId, userId, text, createdAt
Event        id, groupId, venueId, startsAt, weatherSummary?
Venue        id, name, lat, lng, sportIds[], pricePerHour, address
Vote         eventId, userId, venueId
```

Indexes: `Availability(date, sportId)`, `GroupMember(groupId)`, `Message(groupId, createdAt)`.

Seed: 8 Bucharest users, 5 sports (football 10–14, tennis 2–4, basketball 6–10, padel 2–4, volleyball 6–12), 6 real Bucharest venues. Pre-seed today's availability so matching works on demo.

---

## Codex Invocation Templates

All commands include `--skip-git-repo-check` and end with `2>/dev/null` to suppress thinking tokens. Working dir always `-C "C:/Users/Dacian/Desktop/summer-practice-hackathon-2026"`.

```bash
# T1 — Codegen (default)
codex exec --skip-git-repo-check -m gpt-5.4 \
  --config model_reasoning_effort="medium" \
  --sandbox workspace-write --full-auto \
  -C "<dir>" "BRIEF" 2>/dev/null

# T2 — Hard design / algorithmic work
codex exec --skip-git-repo-check -m gpt-5.5 \
  --config model_reasoning_effort="high" \
  --sandbox workspace-write --full-auto \
  -C "<dir>" "BRIEF" 2>/dev/null

# T3 — Boilerplate / fixtures
codex exec --skip-git-repo-check -m gpt-5.4-mini \
  --config model_reasoning_effort="low" \
  --sandbox workspace-write --full-auto \
  -C "<dir>" "BRIEF" 2>/dev/null

# T4 — Read-only review
codex exec --skip-git-repo-check -m gpt-5.5 \
  --config model_reasoning_effort="high" \
  --sandbox read-only \
  -C "<dir>" "BRIEF" 2>/dev/null

# Resume last session (NO flags between resume and prompt)
echo "follow-up" | codex exec --skip-git-repo-check resume --last 2>/dev/null
```

---

## Designer Protocol (Claude Code, every hour)

1. **Brief.** Write a self-contained spec: goal, files to create/modify, contract, what NOT to touch, model name pinning.
2. **Commit baseline.** `git add -A && git commit -m "checkpoint: pre-<task>"` so Codex's diff is isolated.
3. **Launch.** Send the chosen template above to Codex via `Bash(run_in_background: true)` when independent work follows; foreground when blocking.
4. **Review.** Read **only** `git diff --stat` + Codex's stdout summary. Spot-check 1–2 risky files via `grep` if needed. Never `Read` the full file.
5. **Decide.** Commit, ask Codex to amend (one resume max), or `git restore` and rewrite the brief.
6. **Move on.** Tick the checkpoint. Next hour.

If a Codex run fails twice on the same brief: rewrite the brief from scratch with sharper constraints. Three failures: skip the task and use the cut list.

---

## Hour-by-Hour: Briefs to Codex

### Hour 0:00 – 0:35 — Bootstrap (T1 then T2)

**Brief CX-1 (foreground, T1):**
> "Bootstrap a Next.js 14 TypeScript app with Tailwind, App Router, src/ dir, no ESLint prompts. Run `npm install` for: `prisma @prisma/client @anthropic-ai/sdk leaflet react-leaflet zod`. Initialize shadcn/ui and add components: button, card, input, textarea, badge, dialog, avatar, select, toast. Create stubbed pages `/`, `/profile`, `/groups`, `/map`. Build a top nav with a 'Switch User' dropdown that sets a `userId` cookie via a server action. Do NOT implement profile editing or matching — only the shell. Report file count and any install warnings."

**Brief CX-2 (foreground, T2):**
> "Create `prisma/schema.prisma` with the models below verbatim (paste the spec above). SQLite, `cuid()` ids, add indexes on `Availability(date, sportId)`, `GroupMember(groupId)`, `Message(groupId, createdAt)`. Run `npx prisma migrate dev --name init`. Do not modify other files. Report the migration name."

**Claude Code review:** `git diff --stat`, confirm `prisma/`, `src/app/`, `package.json` changes only. Commit.

**Checkpoint:** App boots, Switch User toggles cookie, schema migrated.

---

### Hour 0:35 – 1:25 — Seed + Profile + ShowUpToday (parallel)

**Brief CX-3 (background, T3):**
> "Write `prisma/seed.ts`: 8 Bucharest users with realistic Romanian first names (Andrei, Maria, Radu, Ioana, Mihai, Elena, Cristian, Alexandra), each with a 1–2 sentence bio and 1–2 sport interests. 5 sports per spec. 6 real Bucharest venues with lat/lng/pricePerHour/address (e.g. Stadionul Național, BNR Tennis, Sala Polivalentă, Padel Park Băneasa, Sky Arena, World Class Sun Plaza). Seed today's `Availability` so 6 of the 8 users have YES on tennis or basketball. Add scripts to package.json: `seed`, `demo:reset` (wipe + reseed). Touch only `prisma/seed.ts` and `package.json`."

**Brief CX-4 (foreground after CX-3 commits, T1):**
> "Build `/profile` page: name input, bio textarea, sports multi-select chips (load sports from DB), skill slider 1–5. Add a button 'Detect sports from bio' next to the bio field. Build the home page `/`: a 'ShowUp Today?' card per user-sport with Yes/No buttons that POST to `/api/availability` (create the route too) and write `Availability` rows for today. Show a summary 'You're in for: 🎾 Tennis'. Read current user from the `userId` cookie via a `getCurrentUser` helper in `src/lib/auth.ts`. No AI yet."

**Brief CX-5 (background, T1):**
> "Create `POST /api/ai/extract-sports` at `src/app/api/ai/extract-sports/route.ts`. Accepts `{ bio: string }`, calls Claude Haiku 4.5 — model id literally `claude-haiku-4-5-20251001` — via `@anthropic-ai/sdk` reading `ANTHROPIC_API_KEY`. System prompt: extract sports from bio. Whitelist output to: football, tennis, basketball, padel, volleyball. Return `{ sports: string[] }`, JSON-only. 1.2s timeout fallback returning empty array. Wire the 'Detect sports from bio' button on `/profile` to this endpoint. Do not change schema."

**Checkpoint:** Profile editable, AI extracts sports (✅ AI bonus 500p), availability writable.

---

### Hour 1:25 – 2:25 — Matching + Groups + Chat (parallel)

**Brief CX-6 (foreground, T2):**
> "Implement `POST /api/match` at `src/app/api/match/route.ts`. For each (sport, today) pair, gather users whose `Availability.status=YES` for today. If `count >= sport.minGroup`, create one `Group(status=FORMING)`, pick a random captain among the YES users, insert `GroupMember` rows for up to `sport.maxGroup` users, prefer users with non-empty bios. Idempotent: skip if a FORMING/CONFIRMED group already exists for that (sport, today). Use Prisma transactions. Return `{ created: Group[] }`. Add a 'Find my group now' button on the home page that POSTs and refreshes."

**Brief CX-7 (foreground, T1):**
> "Build `/groups` (list current user's groups with sport icon + member avatars) and `/groups/[id]` (members list with captain badge ⭐, chat panel polled every 2s, 'Confirm I'm in' button flipping `GroupMember.confirmed`). Implement `POST /api/groups/[id]/messages` and `GET /api/groups/[id]/messages`. Optimistic UI on chat send."

**Claude Code:** Manually test with two seed users via Switch User.

**Checkpoint:** Two seed users get matched; chat works between them.

---

### Hour 2:25 – 3:25 — 🌟 AI Captain Copilot (Claude Code-led brief, Codex implements)

This is the wow. Claude Code writes the prompt-engineering spec because Claude knows Claude. Codex implements verbatim.

**Brief CX-8 (foreground, T2):**
> "Create `POST /api/ai/copilot` at `src/app/api/ai/copilot/route.ts`. Input `{ groupId }`. Steps:
> 1. Load group, sport, captain. Use Bucharest center 44.4268, 26.1025 if missing.
> 2. Pick top-3 venues for that sport from DB (any criteria — keep simple).
> 3. Fetch Open-Meteo current weather for Bucharest (1.5s timeout).
> 4. Call Claude Haiku 4.5 (`claude-haiku-4-5-20251001`) with this exact system prompt:
>    *'You are a pickup-sports captain assistant. Given a sport, weather, and 3 candidate venues, return JSON {ranked: [{venueId, reasoning}], suggestedTime: \"HH:MM\", draftMessage: string ≤120 chars, weatherNote: string ≤60 chars}. Pick venues that suit weather. Time should be 18:00–20:00 today. Output JSON only, no prose.'*
>    User message: structured JSON with sport name, weatherSummary, venues array.
>    Set `response_format` via tool-use or rely on JSON-only system prompt. 2s timeout.
> 5. Hardcoded fallback if Claude or Open-Meteo fails: pick first venue, suggestedTime '19:00', draftMessage 'Tonight at 19:00 — let's play!', weatherNote 'Mild ☀️'.
> Return the JSON. Reject if response venueIds are not in the input set."

**Brief CX-9 (foreground, T1):**
> "In `/groups/[id]`, if current user is captain, show an 'AI Captain Copilot' button. On click → call `/api/ai/copilot`. Display panel: 3 venue cards with reasoning, weather badge, suggestedTime, 'Post poll to group' button. Post poll → creates a chat message AND opens vote chips inline (one per venue). Each member click writes a `Vote` row. When `count(Votes) >= count(GroupMembers)/2`, auto-create `Event` with the highest-voted venue and lock the poll. Render an Event card at the top of the group page: venue name, time, weather, small Leaflet preview, 'Open in Google Maps' link (`https://www.google.com/maps/search/?api=1&query=lat,lng`)."

**Brief CX-10 (background, T4 — read-only critique):**
> "Read `src/app/api/ai/copilot/route.ts`. Critique the Claude prompt and JSON contract for: (1) likelihood of malformed JSON, (2) hallucinated venue IDs not in input, (3) handling when weather fetch fails. Suggest concrete edits — do not apply. Top 3 issues only."

**Claude Code:** Read Codex's CX-10 summary (small). Decide which issues to send back as a CX-11 amendment.

**Checkpoint:** Captain → one click → venues + weather → poll → vote → event materializes. **Demo moment.**

---

### Hour 3:25 – 4:10 — Pulse Map + Calendar + Score (parallel)

**Brief CX-12 (background, T1):**
> "Create `src/components/PulseMap.tsx`: react-leaflet map, must be loaded with `next/dynamic({ ssr: false })`. Props: `{ groups, venues, events }`. Center 44.4268, 26.1025. Pins: green per FORMING group ('needs N more'), gray per venue, orange per today's Event. Pin popup with detail and 'I'm in' button if FORMING. OSM tiles. Default export. Then make `/map` page a server component that fetches the data and renders `<PulseMap>` via dynamic import."

**Brief CX-13 (background, T3):**
> "On the Event card, add a 'Add to calendar' link that downloads a `.ics` file via `GET /api/events/[id]/ics`. Implement the ICS endpoint: VEVENT with summary, location, start/end (1h), description with weatherSummary. Pure string template, no library."

**Brief CX-14 (background, T3):**
> "Add ShowUp Score on `/profile`: compute `confirmedEventsCount * 10 - noShowsCount * 5` server-side and render as a badge ⭐ N. Treat 'no-show' as `GroupMember.confirmed=false` on a past Event."

**Checkpoint:** Map with pins, calendar download, score badge.

---

### Hour 4:10 – 4:45 — Polish & QA (Codex does the QA pass)

**Brief CX-15 (foreground, T1):**
> "Audit pass: add loading spinners on every async button, toast on AI call success/fail, empty states with CTAs ('mark availability to find a group'), and a mobile pass at 375px width — fix overflow and ensure tap targets ≥40px. Touch only the files needed."

**Brief CX-16 (background, T4):**
> "Read-only audit. Walk the diff against `main` and report top 5 issues ranked by severity: (1) React hydration risks, (2) API routes missing input validation a judge could break in 30s, (3) console errors at boot, (4) accessibility issues that hurt UX score, (5) missing error states. Do not edit."

**Claude Code:** Read CX-16 summary. Pick top 2 only. Issue CX-17 to fix them (T1, workspace-write). Stop.

**Brief CX-18 (background, T3):**
> "Rewrite README.md: 1-paragraph product pitch, run instructions (`npm install && npm run demo:reset && npm run dev`), screenshot placeholder section, the scoring map. Keep ≤80 lines. Move the original challenge brief to `CHALLENGE.md`."

**Human (you):** Rehearse demo script below twice with stopwatch.

---

### Hour 4:45 – 5:00 — Final reseed + breathe

- `npm run demo:reset`
- Boot, click full golden path end-to-end
- Phone silent, browser zoom 110%, dark/light decided

---

## Demo Script (90 seconds)

1. (10s) "Pickup sports die from coordination friction. ShowUp2Move kills it."
2. (15s) Login as **Andrei** → bio pre-filled → "Detect sports from bio" → chips auto-fill → *"AI reads who you are"*
3. (15s) Home → "ShowUp Today" tennis Yes → "Find my group" → matched with Maria + Radu
4. (10s) Open group → captain → click **AI Captain Copilot**
5. (20s) 3 venues + weather reasoning → "Post poll" → switch to Maria → vote → switch to Radu → vote → event auto-created
6. (15s) `/map` → green pin shows live event → "Anyone in the city sees pickup games happening right now."
7. (5s) "ShowUp. Move. Done."

---

## Cut List (drop in this order if behind)

1. Photo upload (skip from start)
2. ShowUp Score badge (cosmetic)
3. Pulse Map (defer last; if cut, `/map` shows venues only)
4. Calendar `.ics` (drop CX-13 if blocked)
5. Weather (hardcode "☀️ 22°C" if Open-Meteo flakes)
6. Voting (auto-pick top-1 venue if voting UI lags)

**Never cut:** auth/profile/availability/matching/group chat/AI Copilot. The spine.

---

## Risk Log

| Risk | Mitigation |
|---|---|
| Claude API key missing/rate-limited | Hardcoded Copilot fallback in CX-8 |
| Codex enters a re-brief loop | Hard rule: max 1 amendment per task; else `git restore` and rewrite brief |
| Codex edits a file Claude is editing | Designer never edits source — only briefs. Conflict eliminated by construction |
| Codex hallucinates wrong Claude model id | Every AI brief pins `claude-haiku-4-5-20251001` literally; reject if changed |
| Leaflet SSR hydration | CX-12 brief explicitly mandates `next/dynamic({ ssr: false })` |
| Codex CLI auth/network drops | Plan halts — there is no fallback. Mitigation: confirm `codex --version` in pre-flight |
| Token blowout reading Codex output | Designer reads `git diff --stat` + Codex stdout summary only; never full files |
| Demo DB dirty | Final 4:45 step reseeds |

---

## Score Projection

| Bucket | Target | Source |
|---|---|---|
| Foundation (runs, integrated, clean, mobile) | 1100 | Hours 0–1 + CX-15 |
| Profiles (login, profile, sports, skill) | 1100 | Hour 0–1 |
| Matching (ShowUpToday, auto-match, group-size, confirmation) | 1600 | Hour 1–2 |
| AI (sport extraction, compatibility) | 700 | CX-5 + Copilot |
| Communication (group chat, event chat, real-ish-time) | 1100 | CX-7 |
| Events & Location (auto-event, captain, venue, voting, maps, pricing) | 3500 | CX-8/9/12 |
| Bonus (weather, calendar, gamification) | 900 | CX-13/14 + Copilot |
| Innovation (Copilot one-button event + Pulse Map) | 1500 | Inherent |
| **Target** | **~11,500** | Realistic with Codex executing: **~8,500–9,000** |

---

## Pre-flight Checklist (before Hour 0)

- [ ] Node 20+
- [ ] `ANTHROPIC_API_KEY` in `.env.local`
- [ ] `codex --version` ≥ 0.130 (confirmed)
- [ ] `git status` clean — designer protocol depends on it
- [ ] This file open in a side tab
- [ ] Stopwatch ready
- [ ] Phone silent
