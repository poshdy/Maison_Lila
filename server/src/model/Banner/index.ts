import { LOCATION } from "@prisma/client";
import { prismadb } from "../../lib/prismadb.js";

export const Create = async (data) => {
  return await prismadb.banner.create({
    data,
  });
};
export const Find = async (state,location) => {
  return await prismadb.banner.findMany({
    where: {
      location,
      published: state,
    },
  });
};

export const FindById = async (id: string) => {
  return await prismadb.banner.findUnique({
    where: {
      id,
    },
  });
};
export const Update = async (id: string, data) => {
  return await prismadb.banner.update({
    where: {
      id,
    },
    data,
  });
};
export const Delete = async (id: string) => {
  return await prismadb.banner.delete({
    where: {
      id,
    },
  });
};
