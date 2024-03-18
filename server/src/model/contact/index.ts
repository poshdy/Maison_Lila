import { prismadb } from "../../lib/prismadb.js";

export const Create = async (data) => {
  return await prismadb.contactInfo.create({ data });
};
export const Get = async () => {
  return await prismadb.contactInfo.findMany();
};
export const Update = async (id, data) => {
  return await prismadb.contactInfo.update({
    where: {
      id,
    },
    data,
  });
};
export const Delete = async (id) => {
  return await prismadb.contactInfo.delete({ where: { id } });
};
