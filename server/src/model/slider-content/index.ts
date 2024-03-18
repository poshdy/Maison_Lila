import { prismadb } from "../../lib/prismadb.js";

export const Create = async (data) => {
  return await prismadb.sliderContent.create({
    data,
  });
};

export const Find = async () => {
  return await prismadb.sliderContent.findMany({
    include: {
      slider: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

export const FindById = async (id: string) => {
  return await prismadb.sliderContent.findUnique({
    where: {
      id,
    },
  });
};

export const Update = async (id: string, data) => {
  return await prismadb.sliderContent.update({
    where: {
      id,
    },
    data,
  });
};

export const Delete = async (id: string) => {
  return await prismadb.sliderContent.delete({
    where: {
      id,
    },
  });
};
