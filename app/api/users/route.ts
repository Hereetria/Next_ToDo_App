import { NextRequest, NextResponse } from "next/server";
import { userService } from "@/services/userService";

export async function GET() {
  try {
    const users = await userService.getAll();
    return NextResponse.json(users);
  } catch (error: any) {
    console.error("Error in GET /api/users:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const created = await userService.create(body);
    return NextResponse.json(created, { status: 201 });
  } catch (error: any) {
    console.error("Error in POST /api/users:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}