import { Request, Response } from "express";
import { GetUserAddress, GetUserOrders } from "../services/user/index.js";

export const OnGetUserOrders = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await GetUserOrders(id);
  res.status(200).send({
    data,
  });
};
export const OnGetUserAddress = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await GetUserAddress(id);
  res.status(200).send({
    data,
  });
};
