import { NextRequest, NextResponse } from "next/server";
import { userService } from "@/services/userService";

export async function GET(_: NextRequest, context: any) {
  try {
    const { id } = context.params;
    const user = await userService.getById(id);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error: any) {
    console.error("Error in GET /api/users/[id]:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, context: any) {
  try {
    const { id } = context.params;
    const body = await req.json();
    const updated = await userService.update(id, body);

    return NextResponse.json(updated);
  } catch (error: any) {
    console.error("Error in PATCH /api/users/[id]:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, context: any) {
  try {
    const { id } = context.params;
    await userService.delete(id);

    return NextResponse.json({ message: "User deleted" });
  } catch (error: any) {
    console.error("Error in DELETE /api/users/[id]:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
