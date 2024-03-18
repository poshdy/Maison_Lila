import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import { getTotalSales } from "../services/salesServices.js";
import { GetDailySales, GetProductSales } from "../services/sales/index.js";
import GetProducts from "../model/sales/index.js";
export const OnGetDailySales = async (req: Request, res: Response) => {
  const data = await GetDailySales();

  res.status(200).send({
    data,
  });
};
export const GetSalesTable = async (req: Request, res: Response) => {
  const sales = await prismadb.sales.findMany({
    select: {
      product: {
        select: {
          name: true,
          id: true,
          image: true,
        },
      },
      price: true,
      quantitySold: true,
      Revenue: true,
      soldAt: true,
      createdAt: true,
    },
  });
  res.status(201).send(sales);
};
export const TotalSales = async (req: Request, res: Response) => {
  const sales = await getTotalSales();
  res.status(201).send(sales._sum.Revenue);
};

export const OnGetProductSales = async (req: Request, res: Response) => {
  const data = await GetProductSales();

  console.log(data);
  res.status(200).send({
    data,
  });
};
