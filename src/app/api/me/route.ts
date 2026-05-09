import { getCurrentUser } from "@/lib/auth";

export async function GET(): Promise<Response> {
  const user = await getCurrentUser();

  return Response.json({
    name: user?.name ?? null,
    onboardedAt: user?.onboardedAt?.toISOString() ?? null,
  });
}
