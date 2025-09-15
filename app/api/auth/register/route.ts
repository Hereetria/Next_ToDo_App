import { NextRequest, NextResponse } from "next/server";
import { userService } from "@/services/userService";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" },{ status: 400 });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const created = await userService.create({
      name,
      email,
      passwordHash,
    });

    return NextResponse.json(created, { status: 201 });
  } catch (error: any) {
    console.error("Error in POST /api/auth/register:", error);
    return NextResponse.json({ error: "Internal server error" },{ status: 500 });
  }
}
