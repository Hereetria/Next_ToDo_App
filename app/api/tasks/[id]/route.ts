import { NextResponse } from "next/server";
import { withAuth } from "@/lib/withAuth";
import { taskService } from "@/services/taskService";

export const GET = withAuth(async (userId, _, context) => {
  const { id } = context.params;
  const task = await taskService.getById(id);

  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  if (task.userId !== userId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return NextResponse.json(task);
});

export const PATCH = withAuth(async (userId, req, context) => {
  const { id } = context.params;
  const body = await req.json();
  const task = await taskService.getById(id);

  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  if (task.userId !== userId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const updated = await taskService.update(id, body);
  return NextResponse.json(updated);
});

export const DELETE = withAuth(async (userId, _, context) => {
  const { id } = context.params;
  const task = await taskService.getById(id);

  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  if (task.userId !== userId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await taskService.delete(id);
  return NextResponse.json({ message: "Task deleted" });
});
