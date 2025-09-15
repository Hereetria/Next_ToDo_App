"use client";

import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { Button } from "@/components/ui/button";
import { Task } from "@prisma/client";

export default function TaskColumn({
  label,
  tasks,
}: {
  label: string;
  tasks: Task[];
}) {
  const [page, setPage] = useState(1);
  const pageSize = 4;

  const totalPages = Math.ceil(tasks.length / pageSize) || 1;
  const start = (page - 1) * pageSize;
  const visibleTasks = tasks.slice(start, start + pageSize);

  useEffect(() => {
    if (page > 1 && visibleTasks.length === 0) {
      setPage((p) => Math.max(1, p - 1));
    }
  }, [tasks, page, visibleTasks.length]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-center">{label}</h2>

      {visibleTasks.length === 0 ? (
        <p className="text-center text-sm text-muted-foreground">No tasks</p>
      ) : (
        visibleTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={{ ...task, createdAt: task.createdAt.toString() }}
          />
        ))
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
          >
            Prev
          </Button>
          <span className="text-xs text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
