import { NextResponse } from "next/server";
import { withAuth } from "@/lib/withAuth";
import { taskService } from "@/services/taskService";

export const GET = withAuth(async (userId) => {
  const tasks = await taskService.getUserTasksByCreatedAtDesc(userId);
  return NextResponse.json(tasks);
});

export const POST = withAuth(async (userId, req) => {
  const body = await req.json();
  const created = await taskService.create({ ...body, userId });
  return NextResponse.json(created, { status: 201 });
});
