import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import { getTotalSales } from "../services/salesServices.js";

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
