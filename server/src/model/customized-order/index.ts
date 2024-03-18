import { prismadb } from "../../lib/prismadb.js";

export const Create = async (data) => {
  return await prismadb.customizedOrder.create({
    data,
  });
};
export const Find = async () => {
  return await prismadb.customizedOrder.findMany();
};
export const FindById = async (id: string) => {
  return await prismadb.customizedOrder.findUnique({
    where: {
      id,
    },
  });
};

export const Delete = async (id: string) => {
  return await prismadb.customizedOrder.delete({
    where: {
      id,
    },
  });
};
