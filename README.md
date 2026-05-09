# ShowUp2Move

Pickup sports die from coordination friction: picking the sport, figuring out who is in, aligning on time and place, checking weather, comparing venues, and handling the final message blast. ShowUp2Move removes that overhead with one tap on "ShowUp Today" to trigger AI-powered group matching, then hands the captain an AI Copilot that drafts the venue, time, and group message in one click. The group votes, the event is created automatically, and everyone gets the calendar and map details without back-and-forth. It is a fast path from "anyone up for tennis?" to an actual game happening today.

## Features
- ✨ AI Captain Copilot — Claude Haiku picks venue + drafts message + ranks options based on weather
- 🤖 AI sport extraction from bios (Claude Haiku)
- ⚡ One-tap ShowUpToday matching
- 💬 Group chat (2s polling)
- 🗺️ Pulse Map — live pickup games across Bucharest
- 📅 Calendar download (.ics)
- 🌤️ Weather-aware suggestions (Open-Meteo)
- ⭐ ShowUp Score gamification

## Stack
Next.js 14 · TypeScript · Prisma + SQLite · Tailwind + shadcn/ui · Claude Haiku 4.5 · Leaflet + OSM · Open-Meteo

## Run

```bash
npm install
cp .env.local .env  # or set DATABASE_URL=file:./dev.db
echo 'ANTHROPIC_API_KEY=sk-ant-...' >> .env.local
npx prisma migrate dev
npm run demo:reset
npm run dev
```

Open http://localhost:3000. Use the "Switch User" dropdown (top-right) to demo as different seed users.

## Demo flow (90s)
1. Login as Andrei → Profile → "Detect sports from bio" → AI auto-fills chips
2. Home → ShowUp Today: Tennis YES → "Find my group now"
3. Open the matched Group → as captain click ✨ AI Captain Copilot → venues + weather → "Post poll"
4. Switch to Maria, Radu → vote on poll → Event auto-created
5. /map → see the live pin

## Scoring map
| Bucket | Where |
|---|---|
| Foundation | full app shell, mobile-friendly, builds clean |
| Profiles | /profile, sports, skill, photo placeholder |
| Matching | /api/match, group formation, captain assignment |
| AI | /api/ai/extract-sports, /api/ai/copilot |
| Communication | /groups/[id] chat with 2s polling |
| Events & Location | auto-event from poll, Leaflet map, Google Maps link, pricing |
| Bonus | weather, ICS calendar, ShowUp Score |
| Innovation | Captain Copilot one-button event + Pulse Map |
