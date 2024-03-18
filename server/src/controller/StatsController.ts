import { Request, Response } from "express";
import { GetUsersCount, GetMostOrderedZones } from "../services/stats/index.js";
import { OrdersCount, ProductsCount } from "../model/stats/index.js";

export const OnGetUsersCount = async (req: Request, res: Response) => {
  const data = await GetUsersCount();
  res.status(200).send({
    data,
  });
};
export const OnGetOrdersCount = async (req: Request, res: Response) => {
  const { Pending, Proccessing, Delivered } = await OrdersCount();
  res.status(200).send({
    data: {
      Pending,
      Proccessing,
      Delivered,
    },
  });
};
export const OnGetProductsStock = async (req: Request, res: Response) => {
  const { inStock, total, outOfStock } = await ProductsCount();
  res.status(200).send({
    data: {
      total,
      inStock,
      outOfStock,
    },
  });
};
export const OnGetOrderZones = async (req: Request, res: Response) => {
  const ordersByZone = await GetMostOrderedZones();
  res.status(200).send({
    data: ordersByZone,
  });
};
