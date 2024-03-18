import { prismadb } from "../../lib/prismadb.js";

export const Create = async (name: string) => {
  return await prismadb.slider.create({
    data: { name },
  });
};

export const Find = async (state) => {
  return await prismadb.slider.findMany({
    include: {
      content: true,
    },
    where: {
      published: state,
    },
  });
};

export const FindById = async (id: string) => {
  return await prismadb.slider.findUnique({
    where: {
      id,
    },
  });
};

export const Update = async (id: string, data) => {
  return await prismadb.slider.update({
    where: {
      id,
    },
    data,
  });
};

export const Delete = async (id: string) => {
  return await prismadb.slider.delete({
    where: {
      id,
    },
  });
};
