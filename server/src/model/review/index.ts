import { prismadb } from "../../lib/prismadb.js";

export const Create = async (data) => {
  return await prismadb.review.create({ data });
};
export const Find = async () => {
  return await prismadb.review.findMany();
};
export const FindPublished = async () => {
  return await prismadb.review.findMany({
    where: {
      published: true,
    },
  });
};
export const FindByProduct = async (productId) => {
  return await prismadb.review.findMany({
    where: {
      productId,
    },
  });
};
export const Publish = async (id: string) => {
  return await prismadb.review.update({
    where: {
      id,
    },
    data: {
      published: true,
    },
  });
};
export const Delete = async (id: string) => {
  return await prismadb.review.delete({
    where: {
      id,
    },
  });
};
