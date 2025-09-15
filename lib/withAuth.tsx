import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export function withAuth(
  handler: (userId: string, req: Request, context?: any) => Promise<Response>
) {
  return async (req: Request, context?: any) => {
    try {
      const session = await getServerSession(authOptions);
      if (!session?.user?.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      return handler(session.user.id, req, context);
    } catch (err: any) {
      console.error("API error:", err);
      return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
  };
}
