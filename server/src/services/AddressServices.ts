import { Request } from "express";
import { prismadb } from "../lib/prismadb.js";

export const CreateAddress = async (req: Request) => {
  const { apartmentNo, BuildingNo, Floor, streetName, city, userId, zoneId } =
    req.body;
  const Address = await prismadb.address.create({
    data: {
      apartmentNo,
      Floor,
      BuildingNo,
      zoneId,
      streetName,
      city,
      userId,
    },
    select: {
      zone: {
        select: {
          fees: true,
          id: true,
          name: true,
        },
      },
      id: true,
      User: {
        select: {
          id: true,
        },
      },
    },
  });

  return Address;
};
export const UpdateAddress = async (req: Request) => {
  const { id } = req.params;
  const { apartmentNo, BuildingNo, Floor, streetName, city, zoneId } = req.body;
  const Address = await prismadb.address.update({
    where: {
      id,
      AND: {
        userId: req.body.userId,
      },
    },
    data: { apartmentNo, Floor, BuildingNo, streetName, city, zoneId },
  });

  return Address;
};
export const DeleteAddress = async (req: Request) => {
  const { id } = req.params;

  const Address = await prismadb.address.delete({
    where: {
      id,
      AND: {
        userId: req.body.userId,
      },
    },
  });

  return Address;
};
