"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import axios from "axios";

type Task = {
  id: string;
  title: string;
  description?: string | null;
  status: string;
  createdAt: string;
};

export default function TaskCard({ task }: { task: Task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description ?? "");

  const queryClient = useQueryClient();

  const updateStatus = useMutation({
    mutationFn: async (newStatus: string) => {
      await axios.patch(`/api/tasks/${task.id}`, {
        status: newStatus,
      });
      return newStatus;
    },
    onMutate: async (newStatus) => {
      await queryClient.cancelQueries({ queryKey: ["tasks"] });
      const prevTasks = queryClient.getQueryData<Task[]>(["tasks"]);

      queryClient.setQueryData<Task[]>(["tasks"], (old = []) =>
        old.map((t) => (t.id === task.id ? { ...t, status: newStatus } : t))
      );

      return { prevTasks };
    },
    onError: (_err, _newStatus, context) => {
      if (context?.prevTasks) {
        queryClient.setQueryData(["tasks"], context.prevTasks);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  // ✅ Edit → Save mutation
  const updateTask = useMutation({
    mutationFn: async (data: { title: string; description: string }) => {
      await axios.patch(`/api/tasks/${task.id}`, data);
      return data;
    },
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ["tasks"] });
      const prevTasks = queryClient.getQueryData<Task[]>(["tasks"]);

      queryClient.setQueryData<Task[]>(["tasks"], (old = []) =>
        old.map((t) =>
          t.id === task.id
            ? { ...t, title: data.title, description: data.description }
            : t
        )
      );

      return { prevTasks };
    },
    onError: (_err, _data, context) => {
      if (context?.prevTasks) {
        queryClient.setQueryData(["tasks"], context.prevTasks);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] }); // ✅ eklendi
    },
  });

  // ✅ Delete mutation
  const deleteTask = useMutation({
    mutationFn: async () => {
      await axios.delete(`/api/tasks/${task.id}`);
      return task.id;
    },
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["tasks"] });
      const prevTasks = queryClient.getQueryData<Task[]>(["tasks"]);

      queryClient.setQueryData<Task[]>(["tasks"], (old = []) =>
        old.filter((t) => t.id !== task.id)
      );

      return { prevTasks };
    },
    onError: (_err, _id, context) => {
      if (context?.prevTasks) {
        queryClient.setQueryData(["tasks"], context.prevTasks);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] }); // ✅ eklendi
    },
  });

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-2 flex flex-row justify-between items-start">
        {isEditing ? (
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-base font-semibold"
          />
        ) : (
          <CardTitle className="text-base font-semibold">{task.title}</CardTitle>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {["NOT_STARTED", "IN_PROGRESS", "COMPLETED"].map((status) => {
              const isCurrent = task.status === status;
              return (
                <DropdownMenuItem
                  key={status}
                  onClick={() => !isCurrent && updateStatus.mutate(status)}
                  className={
                    isCurrent
                      ? "pointer-events-none bg-gray-100 text-gray-500 font-medium"
                      : "cursor-pointer"
                  }
                >
                  {status.replace("_", " ")}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent className="flex flex-col justify-between">
        {isEditing ? (
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-3"
          />
        ) : (
          <p className="text-sm text-muted-foreground mb-3">
            {task.description ?? "No description provided."}
          </p>
        )}

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{new Date(task.createdAt).toLocaleDateString("en-US")}</span>
          <div className="flex gap-2 pl-2">
            {isEditing ? (
              <>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false);
                    setTitle(task.title);
                    setDescription(task.description ?? "");
                  }}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  variant="default"
                  onClick={() => {
                    updateTask.mutate({ title, description });
                    setIsEditing(false);
                  }}
                >
                  Save
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => deleteTask.mutate()}
                >
                  Delete
                </Button>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
