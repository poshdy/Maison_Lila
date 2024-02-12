import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import { ZoneSchema } from "../validation/Schemas.js";

export const addZone = async (req: Request, res: Response) => {
  const { error, value } = ZoneSchema.validate(req.body);
  if (error) {
    throw error;
  }
  const zone = await prismadb.zone.create({
    data: {
      name: value.name,
      fees: value.fees,
    },
  });
  res.status(201).send({
    message: `New Zone with name: ${req.body.name} Created Successfully`,
    zone,
  });
};
export const getZones = async (req: Request, res: Response) => {
  const zone = await prismadb.zone.findMany();
  res.status(200).send(zone);
};
export const getZone = async (req: Request, res: Response) => {
  const { id } = req.params;

  const zone = await prismadb.zone.findUnique({
    where: {
      id,
    },
  });
  res.status(200).send(zone);
};
export const updateZone = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { error, value } = ZoneSchema.validate(req.body);
  if (error) {
    throw error;
  }
  const zone = await prismadb.zone.update({
    where: {
      id,
    },
    data: value,
  });
  res.status(201).send({
    message: `Zone with name: ${req.body.name} Updated Successfully`,
    zone,
  });
};
export const deleteZone = async (req: Request, res: Response) => {
  const { id } = req.params;
  const zone = await prismadb.zone.delete({
    where: {
      id,
    },
  });
  res.status(200).send({
    message: `Zone with id: ${id} Deleted Successfully`,
    zone,
  });
};
