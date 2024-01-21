import { Request } from "express";
import { prismadb } from "../lib/prismadb.js";

export const CreateCustomizedOrder = async (req: Request) => {
  const { email, name, phone, image, message } = req.body;
  const SpecialOrder = await prismadb.specialOrder.create({
    data: {
      email,
      name,
      phone,
      image,
      message,
    },
  });

  return SpecialOrder;
};
export const UpdateCustomizedOrder = async (req: Request) => {
  const { id } = req.params;

  const SpecialOrder = await prismadb.specialOrder.update({
    where: {
      id,
    },
    data: { ...req.body },
  });
  return SpecialOrder;
};
export const DeleteSpecialOrder = async (req: Request) => {
  const { id } = req.params;

  const SpecialOrder = await prismadb.specialOrder.delete({
    where: {
      id,
    },
  });

  return SpecialOrder;
};
