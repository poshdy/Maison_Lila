import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import {
  CreateCustomizedOrder,
  DeleteCustomizedOrder,
  FindCustomizedOrders,
  FindOneCustomizedOrder,
} from "../services/customizedOrders/index.js";
import { EmailEvent } from "../pub/mails.js";

export const OnCreateCustomOrder = async (req: Request, res: Response) => {
  const data = req.body;
  await CreateCustomizedOrder(data);
  // EmailEvent.emit("Customized-order", order);
  res.status(201).send({
    message: "Order Created Successfully",
  });
};
export const OnGetCustomOrder = async (req: Request, res: Response) => {
  const data = await FindCustomizedOrders();
  res.status(200).send({
    data,
  });
};
export const OnGetOneCustomOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await FindOneCustomizedOrder(id);
  res.status(200).send({
    data,
  });
};

export const OnDeleteCustomOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  await DeleteCustomizedOrder(id);
  res.status(200).send({
    message: "Order Deleted Successfully",
  });
};
