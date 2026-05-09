import { NextResponse } from "next/server";

import { resolveCity } from "@/lib/geo";

export async function GET(): Promise<NextResponse> {
  const city = await resolveCity();

  return NextResponse.json({ lat: city.lat, lng: city.lng, city: city.name });
}
