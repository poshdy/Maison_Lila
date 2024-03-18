import { prismadb } from "../../lib/prismadb.js";

export const Create = async (data) => {
  return await prismadb.category.create({
    data,
  });
};
export const FindById = async (id: string) => {
  return await prismadb.category.findUnique({
    where: {
      id,
    },
    select: {
      products: {
        include: {
          image: true,
        },
      },
    },
  });
};
export const Update = async (id: string, data) => {
  return await prismadb.category.update({
    data,
    where: {
      id,
    },
  });
};
export const Find = async () => {
  return await prismadb.category.findMany({
    include: {
      _count: true,
      Category: true,
      subCategory: true,
      products: {
        select: {
          name: true,
          id: true,
          price: true,
        },
      },
    },
  });
};
export const Delete = async (id: string) => {
  return await prismadb.category.delete({
    where: {
      id,
    },
  });
};
