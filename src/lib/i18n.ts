import { cookies } from "next/headers";

export type Locale = "en" | "ro";

export const SUPPORTED_LOCALES: Locale[] = ["en", "ro"];
export const LOCALE_COOKIE = "locale";

const dict = {
  en: {
    "nav.home": "Home",
    "nav.profile": "Profile",
    "nav.groups": "Groups",
    "nav.map": "Map",
    "nav.logout": "Logout",
    "nav.notifications": "Notifications",
    "dash.eyebrow": "SHOWUPTODAY",
    "dash.heading.before": "What are you up for today, ",
    "dash.heading.q": "?",
    "dash.subhead": "Mark each sport once and matching uses your real availability instead of guessing.",
    "dash.create": "+ Create event",
    "dash.youAreIn": "YOU'RE IN FOR TODAY",
    "dash.nothing": "Nothing locked yet.",
    "dash.markYesTitle": "Mark Yes for any sport to find a group",
    "dash.markYesBody": "Your sports are set. Add today's availability so matching has something to work with.",
    "dash.findGroup": "Find my group now",
    "land.heroTop": "Pickup sports,",
    "land.heroBottomA": "without",
    "land.heroBottomB": "the chaos.",
    "land.subhead": "ShowUp2Move matches you into pickup games today, finds the venue, drafts the message — you just show up and play.",
    "land.signUp": "Get started",
    "land.login": "Log in",
    "land.feature1Title": "One tap availability",
    "land.feature1Body": "Say yes to a sport. We handle the matching, the venue, and the draft message.",
    "land.feature2Title": "AI Captain Copilot",
    "land.feature2Body": "Captains get a one-button assistant: 3 venues, weather-aware reasoning, draft poll.",
    "land.feature3Title": "Pulse map",
    "land.feature3Body": "See the city's pickup games happening right now. Hop into one with one click.",
    "share.invitedToPlay": "You're invited to play",
    "share.signupToJoin": "Sign up to join",
    "share.alreadyHaveAccount": "Already have an account? Log in",
    "share.openGroup": "Open group",
    "share.joinGroup": "Join the group",
    "share.full": "Group is full",
    "share.finished": "This group is finished",
    "share.members": "MEMBERS",
    "share.venue": "VENUE",
    "share.eyebrow": "SHARED INVITE",
  },
  ro: {
    "nav.home": "Acasă",
    "nav.profile": "Profil",
    "nav.groups": "Grupuri",
    "nav.map": "Hartă",
    "nav.logout": "Deconectare",
    "nav.notifications": "Notificări",
    "dash.eyebrow": "AZIMĂMIȘC",
    "dash.heading.before": "La ce ești dispus azi, ",
    "dash.heading.q": "?",
    "dash.subhead": "Marchează o singură dată fiecare sport și matching-ul folosește disponibilitatea ta reală.",
    "dash.create": "+ Creează eveniment",
    "dash.youAreIn": "EȘTI ÎN PENTRU AZI",
    "dash.nothing": "Nimic confirmat încă.",
    "dash.markYesTitle": "Bifează Da la un sport ca să găsești o grupă",
    "dash.markYesBody": "Sporturile tale sunt setate. Adaugă disponibilitatea de azi.",
    "dash.findGroup": "Găsește-mi grupa",
    "land.heroTop": "Sport spontan,",
    "land.heroBottomA": "fără",
    "land.heroBottomB": "haos.",
    "land.subhead": "ShowUp2Move te găsește o grupă pentru azi, alege locația, scrie mesajul — tu doar joci.",
    "land.signUp": "Începe acum",
    "land.login": "Autentificare",
    "land.feature1Title": "Disponibilitate dintr-un click",
    "land.feature1Body": "Spui da la un sport. Noi ne ocupăm de grupă, locație și mesaj.",
    "land.feature2Title": "AI Captain Copilot",
    "land.feature2Body": "Căpitanii primesc un asistent: 3 locații, raționament în funcție de vreme, vot.",
    "land.feature3Title": "Hartă în timp real",
    "land.feature3Body": "Vezi meciurile spontane din oraș. Te bagi într-unul dintr-un click.",
    "share.invitedToPlay": "Ești invitat să joci",
    "share.signupToJoin": "Înregistrează-te ca să te alături",
    "share.alreadyHaveAccount": "Ai deja cont? Autentifică-te",
    "share.openGroup": "Deschide grupa",
    "share.joinGroup": "Alătură-te grupei",
    "share.full": "Grupa este completă",
    "share.finished": "Grupa e gata",
    "share.members": "MEMBRI",
    "share.venue": "LOCAȚIE",
    "share.eyebrow": "INVITAȚIE",
  },
} as const;

export type DictKey = keyof (typeof dict)["en"];

export function getLocale(): Locale {
  const value = cookies().get(LOCALE_COOKIE)?.value;
  if (value === "ro") return "ro";
  return "en";
}

export function t(key: DictKey, locale?: Locale): string {
  const resolved = locale ?? getLocale();
  return dict[resolved][key] ?? dict.en[key];
}

export function getDict(locale?: Locale): Record<DictKey, string> {
  const resolved = locale ?? getLocale();
  return dict[resolved];
}
