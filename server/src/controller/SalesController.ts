import { Request, Response } from "express";
import { GetDailySales, GetProductSales } from "../services/sales/index.js";
export const OnGetDailySales = async (req: Request, res: Response) => {
  const data = await GetDailySales();

  res.status(200).send({
    data,
  });
};

export const OnGetProductSales = async (req: Request, res: Response) => {
  const data = await GetProductSales();
  res.status(200).send({
    data,
  });
};
