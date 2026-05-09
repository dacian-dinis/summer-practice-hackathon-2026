import { hash } from "bcrypt-ts";
import { PrismaClient } from "../src/generated/prisma";

import { slugifyUserName } from "../src/lib/users";

const prisma = new PrismaClient();

const sports = [
  { name: "Football", minGroup: 10, maxGroup: 14 },
  { name: "Tennis", minGroup: 2, maxGroup: 4 },
  { name: "Basketball", minGroup: 6, maxGroup: 10 },
  { name: "Padel", minGroup: 2, maxGroup: 4 },
  { name: "Volleyball", minGroup: 6, maxGroup: 12 },
] as const;

const users = [
  {
    name: "Andrei",
    bio: "Tennis ace from Drumul Taberei, plays every weekend, also into football pickup",
    skill: 4,
    sportInterests: ["Tennis", "Football"],
  },
  {
    name: "Maria",
    bio: "Padel beginner who just moved to Bucharest, looking for chill matches",
    skill: 2,
    sportInterests: ["Padel", "Tennis"],
  },
  {
    name: "Radu",
    bio: "Basketball point guard since high school, works in tech, plays after 18:00",
    skill: 4,
    sportInterests: ["Basketball"],
  },
  {
    name: "Ioana",
    bio: "Volleyball libero, loves the sunset matches at Sky Arena",
    skill: 5,
    sportInterests: ["Volleyball", "Tennis"],
  },
  {
    name: "Mihai",
    bio: "Casual football midfielder, also plays padel for fun on weekends",
    skill: 3,
    sportInterests: ["Football", "Padel"],
  },
  {
    name: "Elena",
    bio: "Tennis intermediate, ranked club player, prefers clay courts",
    skill: 4,
    sportInterests: ["Tennis"],
  },
  {
    name: "Cristian",
    bio: "Basketball power forward, ex college player, also into volleyball",
    skill: 5,
    sportInterests: ["Basketball", "Volleyball"],
  },
  {
    name: "Alexandra",
    bio: "Padel and tennis player, doctor by day, looking for evening games",
    skill: 3,
    sportInterests: ["Padel", "Tennis"],
  },
] as const;

const venues = [
  {
    city: "bucharest",
    name: "Stadionul Național",
    lat: 44.4378,
    lng: 26.1546,
    pricePerHour: 200,
    address: "Bd. Basarabia 37-39",
    sports: ["Football"],
  },
  {
    city: "bucharest",
    name: "BNR Tennis Club",
    lat: 44.4495,
    lng: 26.0863,
    pricePerHour: 80,
    address: "Str. Doamnei 8",
    sports: ["Tennis"],
  },
  {
    city: "bucharest",
    name: "Sala Polivalentă",
    lat: 44.4216,
    lng: 26.1133,
    pricePerHour: 150,
    address: "Piața Charles de Gaulle 2",
    sports: ["Basketball", "Volleyball"],
  },
  {
    city: "bucharest",
    name: "Padel Park Băneasa",
    lat: 44.5051,
    lng: 26.084,
    pricePerHour: 90,
    address: "Șos. București-Ploiești 42D",
    sports: ["Padel"],
  },
  {
    city: "bucharest",
    name: "Sky Arena",
    lat: 44.4513,
    lng: 26.0712,
    pricePerHour: 70,
    address: "Bd. Iuliu Maniu 7",
    sports: ["Volleyball", "Basketball"],
  },
  {
    city: "bucharest",
    name: "World Class Sun Plaza",
    lat: 44.3989,
    lng: 26.123,
    pricePerHour: 120,
    address: "Calea Văcărești 391",
    sports: ["Tennis", "Padel"],
  },
  {
    city: "timisoara",
    name: "Stadion Dan Păltinișanu",
    lat: 45.733,
    lng: 21.248,
    pricePerHour: 150,
    address: "Aleea F.C. Ripensia 7",
    sports: ["Football"],
  },
  {
    city: "timisoara",
    name: "Tennis Club Bega",
    lat: 45.7517,
    lng: 21.2392,
    pricePerHour: 70,
    address: "Calea Bogdăneștilor 32",
    sports: ["Tennis"],
  },
  {
    city: "timisoara",
    name: "Sala Olimpia",
    lat: 45.7556,
    lng: 21.228,
    pricePerHour: 130,
    address: "Aleea Sportivilor 1",
    sports: ["Basketball", "Volleyball"],
  },
  {
    city: "timisoara",
    name: "Padel Park Iulius",
    lat: 45.767,
    lng: 21.227,
    pricePerHour: 90,
    address: "Demetriade 1",
    sports: ["Padel", "Tennis"],
  },
  {
    city: "timisoara",
    name: "Sala Constantin Jude",
    lat: 45.7423,
    lng: 21.232,
    pricePerHour: 110,
    address: "Bd. Take Ionescu 56",
    sports: ["Basketball", "Volleyball"],
  },
  {
    city: "timisoara",
    name: "World Class Iulius Town",
    lat: 45.7665,
    lng: 21.2278,
    pricePerHour: 100,
    address: "Demetriade 1",
    sports: ["Tennis", "Padel"],
  },
] as const;

const todaysAvailability = [
  { userName: "Andrei", sportName: "Tennis", status: "YES" },
  { userName: "Maria", sportName: "Tennis", status: "YES" },
  { userName: "Elena", sportName: "Tennis", status: "YES" },
  { userName: "Alexandra", sportName: "Tennis", status: "YES" },
  { userName: "Radu", sportName: "Basketball", status: "YES" },
  { userName: "Cristian", sportName: "Basketball", status: "YES" },
] as const;

function buildDemoEmail(name: string): string {
  return `${slugifyUserName(name)}@showup2move.dev`;
}

async function main() {
  if (process.env.RESET === "1") {
    await prisma.vote.deleteMany();
    await prisma.event.deleteMany();
    await prisma.message.deleteMany();
    await prisma.groupMember.deleteMany();
    await prisma.group.deleteMany();
    await prisma.availability.deleteMany();
    await prisma.venueSport.deleteMany();
    await prisma.venue.deleteMany();
    await prisma.userSport.deleteMany();
    await prisma.user.deleteMany();
    await prisma.sport.deleteMany();
  }

  const sportByName = new Map<string, { id: string }>();

  for (const sport of sports) {
    const savedSport = await prisma.sport.upsert({
      where: { name: sport.name },
      update: {
        minGroup: sport.minGroup,
        maxGroup: sport.maxGroup,
      },
      create: sport,
    });

    sportByName.set(savedSport.name, { id: savedSport.id });
  }

  const userByName = new Map<string, { id: string }>();
  const demoPasswordHash = await hash("demo1234", 10);

  for (const user of users) {
    const savedUser = await prisma.user.upsert({
      where: { name: user.name },
      update: {
        email: buildDemoEmail(user.name),
        passwordHash: demoPasswordHash,
        bio: user.bio,
        skill: user.skill,
        onboardedAt: new Date(),
      },
      create: {
        name: user.name,
        email: buildDemoEmail(user.name),
        passwordHash: demoPasswordHash,
        bio: user.bio,
        skill: user.skill,
        onboardedAt: new Date(),
      },
    });

    userByName.set(savedUser.name, { id: savedUser.id });

    for (const sportName of user.sportInterests) {
      const sport = sportByName.get(sportName);
      if (!sport) {
        throw new Error(`Missing sport for user interest: ${sportName}`);
      }

      await prisma.userSport.upsert({
        where: {
          userId_sportId: {
            userId: savedUser.id,
            sportId: sport.id,
          },
        },
        update: {},
        create: {
          userId: savedUser.id,
          sportId: sport.id,
        },
      });
    }
  }

  const venueByName = new Map<string, { id: string }>();

  for (const venue of venues) {
    const existingVenue = await prisma.venue.findFirst({
      where: { name: venue.name },
    });

    const savedVenue = existingVenue
      ? await prisma.venue.update({
          where: { id: existingVenue.id },
          data: {
            city: venue.city,
            lat: venue.lat,
            lng: venue.lng,
            pricePerHour: venue.pricePerHour,
            address: venue.address,
          },
        })
      : await prisma.venue.create({
          data: {
            name: venue.name,
            city: venue.city,
            lat: venue.lat,
            lng: venue.lng,
            pricePerHour: venue.pricePerHour,
            address: venue.address,
          },
        });

    venueByName.set(savedVenue.name, { id: savedVenue.id });

    for (const sportName of venue.sports) {
      const sport = sportByName.get(sportName);
      if (!sport) {
        throw new Error(`Missing sport for venue sport: ${sportName}`);
      }

      await prisma.venueSport.upsert({
        where: {
          venueId_sportId: {
            venueId: savedVenue.id,
            sportId: sport.id,
          },
        },
        update: {},
        create: {
          venueId: savedVenue.id,
          sportId: sport.id,
        },
      });
    }
  }

  const today = new Date().toISOString().slice(0, 10);

  for (const item of todaysAvailability) {
    const user = userByName.get(item.userName);
    const sport = sportByName.get(item.sportName);

    if (!user) {
      throw new Error(`Missing user for availability: ${item.userName}`);
    }

    if (!sport) {
      throw new Error(`Missing sport for availability: ${item.sportName}`);
    }

    await prisma.availability.upsert({
      where: {
        userId_date_sportId: {
          userId: user.id,
          date: today,
          sportId: sport.id,
        },
      },
      update: {
        status: item.status,
      },
      create: {
        userId: user.id,
        date: today,
        sportId: sport.id,
        status: item.status,
      },
    });
  }

  const [sportCount, userCount, userSportCount, venueCount, venueSportCount, availabilityCount] =
    await Promise.all([
      prisma.sport.count(),
      prisma.user.count(),
      prisma.userSport.count(),
      prisma.venue.count(),
      prisma.venueSport.count(),
      prisma.availability.count(),
    ]);

  console.log(
    JSON.stringify(
      {
        sports: sportCount,
        users: userCount,
        userSports: userSportCount,
        venues: venueCount,
        venueSports: venueSportCount,
        availabilities: availabilityCount,
      },
      null,
      2,
    ),
  );
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
