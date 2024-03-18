import { prismadb } from "../../lib/prismadb.js";

export const Create = async (data) => {
  return await prismadb.address.create({
    data,
    include: {
      zone: true,
    },
  });
};
export const Update = async (id, data) => {
  return await prismadb.address.update({
    where: {
      id,
      AND: {
        userId: data.userId,
      },
    },
    data,
  });
};
export const Delete = async (id) => {
  return await prismadb.address.delete({
    where: {
      id,
    },
  });
};
export const Find = async (userId) => {
  return await prismadb.address.findUnique({
    where: {
      userId,
      id: userId,
    },
    include: {
      zone: true,
    },
  });
};
