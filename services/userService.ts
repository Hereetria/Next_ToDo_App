import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

export const userService = {
  getAll: () => prisma.user.findMany(),

  getById: (id: string) =>
    prisma.user.findUnique({where: { id },}),

  create: (data: Prisma.UserCreateInput) =>
    prisma.user.create({ data }),

  update: (id: string, data: Prisma.UserUpdateInput) =>
    prisma.user.update({ where: { id }, data }),

  delete: (id: string) =>
    prisma.user.delete({ where: { id } }),

  getByEmail: (email: string) =>
    prisma.user.findUnique({
      where: {email},
    }),
};
