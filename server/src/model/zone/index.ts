import { prismadb } from "../../lib/prismadb.js";

export const Create = async (data) => {
  return await prismadb.zone.create({ data });
};

export const Find = async () => {
  return await prismadb.zone.findMany();
};

export const FindById = async (id: string) => {
  return await prismadb.zone.findUnique({
    where: {
      id,
    },
  });
};

export const Update = async (id: string, data) => {
  return await prismadb.zone.update({
    where: {
      id,
    },
    data,
  });
};

export const Delete = async (id: string) => {
  return await prismadb.zone.delete({
    where: {
      id,
    },
  });
};
