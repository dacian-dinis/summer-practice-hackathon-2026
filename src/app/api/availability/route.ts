import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { todayDate } from "@/lib/today";

const availabilitySchema = z.object({
  sportId: z.string().min(1),
  status: z.enum(["YES", "NO"]),
});

export async function POST(request: Request): Promise<Response> {
  try {
    const json = await request.json();
    const parsed = availabilitySchema.safeParse(json);

    if (!parsed.success) {
      return Response.json(
        { ok: false, error: "Invalid request body" },
        { status: 400 },
      );
    }

    const user = await getCurrentUser();

    if (!user) {
      return Response.json(
        { ok: false, error: "No user available" },
        { status: 500 },
      );
    }

    await prisma.availability.upsert({
      where: {
        userId_date_sportId: {
          userId: user.id,
          date: todayDate(),
          sportId: parsed.data.sportId,
        },
      },
      update: {
        status: parsed.data.status,
      },
      create: {
        userId: user.id,
        date: todayDate(),
        sportId: parsed.data.sportId,
        status: parsed.data.status,
      },
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Unable to save availability" },
      { status: 500 },
    );
  }
}
