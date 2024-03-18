import { ROLE } from "@prisma/client";
import { prismadb } from "../../lib/prismadb.js";

export const Create = async (
  hashedPassword: string,
  email: string,
  name: string
) => {
  return await prismadb.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });
};

export const FindByEmail = async (email: string) => {
  return await prismadb.user.findUnique({
    where: {
      email,
    },
  });
};
export const FindManager = async (email: string) => {
  return await prismadb.user.findUnique({
    where: {
      email,
      AND: {
        role: { in: ["ADMIN", "MANAGER"] },
      },
    },
  });
};

export const CreateAdmin = async (id: string) => {
  await prismadb.user.update({
    where: {
      id,
      AND: {
        role: "USER",
      },
    },
    data: {
      role: "ADMIN",
    },
  });
};
export const DeleteAdmin = async (id: string) => {
  return await prismadb.user.delete({
    where: {
      id,
    },
  });
};
export const FindByRole = async (role: ROLE) => {
  return await prismadb.user.findMany({
    where: {
      role,
    },
  });
};
