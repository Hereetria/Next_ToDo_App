"use client";

import { useQuery } from "@tanstack/react-query";
import TaskColumn from "./TaskColumn";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Task } from "@prisma/client";
import axios from "axios";

export default function TasksClient() {
  const {
    data: tasks = [],
    isLoading,
    isError,
  } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get("/api/tasks");
      return res.data;
    },
  });

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Failed to load tasks</p>;
  }

  const grouped = {
    NOT_STARTED: tasks.filter((t) => t.status === "NOT_STARTED"),
    IN_PROGRESS: tasks.filter((t) => t.status === "IN_PROGRESS"),
    COMPLETED: tasks.filter((t) => t.status === "COMPLETED"),
  };

  const columns = [
    { key: "NOT_STARTED", label: "Not Started" },
    { key: "IN_PROGRESS", label: "In Progress" },
    { key: "COMPLETED", label: "Completed" },
  ] as const;

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 flex-1">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Your Tasks</h1>
        <Button asChild>
          <Link href="/tasks/create">+ Add Task</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {columns.map((col) => (
          <TaskColumn key={col.key} label={col.label} tasks={grouped[col.key]} />
        ))}
      </div>
    </div>
  );
}
