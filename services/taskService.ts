import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

export const taskService = {
  getAll: () =>
    prisma.task.findMany(),

  getById: (id: string) =>
    prisma.task.findUnique({where: { id }}),

  create: (data: Prisma.TaskCreateInput) =>
    prisma.task.create({ data }),

  update: (id: string, data: Prisma.TaskUpdateInput) =>
    prisma.task.update({ where: { id }, data }),

  delete: (id: string) =>
    prisma.task.delete({ where: { id } }),

  getUserTasksByCreatedAtDesc: (userId: string) =>
    prisma.task.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    }),

    getAllByUserId: (userId: string) =>
    prisma.task.findMany({
      where: { userId },
    }),
};
