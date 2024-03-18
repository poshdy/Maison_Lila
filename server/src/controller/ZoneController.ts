import { Request, Response } from "express";
import {
  CreateZone,
  DeleteZone,
  FindZone,
  FindZones,
  UpdateZone,
} from "../services/zone/index.js";

export const OnCreateZone = async (req: Request, res: Response) => {
  const data = req.body;
  await CreateZone(data);
  res.status(201).send({
    message: `Zone Created Successfully`,
  });
};
export const OnGetZones = async (req: Request, res: Response) => {
  const data = await FindZones();
  res.status(200).send({
    data,
  });
};
export const OnGetZone = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await FindZone(id);
  res.status(200).send({
    data: data,
  });
};
export const OnUpdateZone = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  await UpdateZone(id, data);
  res.status(201).send({
    message: `Zone Updated Successfully`,
  });
};
export const OnDeleteZone = async (req: Request, res: Response) => {
  const { id } = req.params;
  await DeleteZone(id);
  res.status(200).send({
    message: `Zone  Deleted Successfully`,
  });
};
