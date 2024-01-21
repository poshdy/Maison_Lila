import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import {
  CreateCustomizedOrder,
  DeleteSpecialOrder,
  UpdateCustomizedOrder,
} from "../services/sepicalOrder.js";
import { EmailEvent } from "../pub/mails.js";

export const addSpecialOrder = async (req: Request, res: Response) => {
  const order = await CreateCustomizedOrder(req);

  EmailEvent.emit("Customized-order", order);
  res
    .status(201)
    .send(`we recieved your Order we will get in touch as soon as possible`);
};
export const getSpecialOrders = async (req: Request, res: Response) => {
  const SpecialOrder = await prismadb.specialOrder.findMany();
  res.status(200).send(SpecialOrder);
};
export const getSpecialOrder = async (req: Request, res: Response) => {
  const SpecialOrder = await prismadb.specialOrder.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(SpecialOrder);
};

export const updateSpecialOrder = async (req: Request, res: Response) => {
  const updated = await UpdateCustomizedOrder(req);

  res.status(201).send(updated);
};
export const deleteSpecialOrder = async (req: Request, res: Response) => {
  const deleted = await DeleteSpecialOrder(req);
  res.status(200).send(deleted);
};
