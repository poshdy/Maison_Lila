import { Request, Response } from "express";
import {
  GetDailySales,
  GetProductSales,
  GetMontlySales,
  GetWeeklySales,
  GetTotalSales,
} from "../services/sales/index.js";
export const OnGetDailySales = async (req: Request, res: Response) => {
  const data = await GetDailySales();
  console.log(data);
  res.status(200).send({
    data,
  });
};
export const OnGetWeeklySales = async (req: Request, res: Response) => {
  const data = await GetWeeklySales();

  res.status(200).send({
    data,
  });
};
export const OnGetMonthlySales = async (req: Request, res: Response) => {
  const data = await GetMontlySales();

  res.status(200).send({
    data,
  });
};
export const OnGetTotalSales = async (req: Request, res: Response) => {
  const data = await GetTotalSales();

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
