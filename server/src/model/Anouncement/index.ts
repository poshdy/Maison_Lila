import { prismadb } from "../../lib/prismadb.js";

export const Create = async (text: string) => {
  console.log(text);
  return await prismadb.anouncement.create({
    data: {
      text,
    },
  });
};

export const Find = async (state) => {
  return await prismadb.anouncement.findMany({
    where: {
      published: state,
    },
  });
};
export const FindOne = async (id: string) => {
  return await prismadb.anouncement.findUnique({
    where: {
      id,
    },
  });
};
export const FindPublished = async () => {
  return await prismadb.anouncement.findMany({
    where: {
      published: true,
    },
  });
};

export const FindById = async (id: string) => {
  return await prismadb.anouncement.findUnique({
    where: {
      id,
    },
  });
};

export const Update = async (
  id: string,
  data: { text?: string; published?: boolean }
) => {
  return await prismadb.anouncement.update({
    where: {
      id,
    },
    data,
  });
};

export const Delete = async (id: string) => {
  return await prismadb.anouncement.delete({
    where: {
      id,
    },
  });
};
