import { Request, Response } from "express";
// import { InsertINtoSales } from "../services/salesServices.js";
// import { EmailEvent } from "../pub/mails.js";
import { ExtractId } from "../helpers/ExtractId.js";
import {
  GetOrder,
  GetOrders,
  UpdateOrderStatus,
  CreateOrder,
  ApplyCoupon,
} from "../services/order/index.js";
export const OnCreateOrder = async (req: Request, res: Response) => {
  const data = req.body;
  const order = await CreateOrder(data);
  res.status(201).send({
    // id: order.id,
    message: "order placed Successfully",
  });
};
export const OnGetOrders = async (req: Request, res: Response) => {
  const data = await GetOrders();
  res.status(201).send({
    data: data,
  });
};
export const OnGetOrder = async (req: Request, res: Response) => {
  const id = await ExtractId(req);
  const data = await GetOrder(id);
  res.status(201).send({
    data: data,
  });
};
export const OnUpdateOrder = async (req: Request, res: Response) => {
  const { status } = req.body;
  const id = await ExtractId(req);
  await UpdateOrderStatus(id, status);
  res.status(201).send({
    message: "Order Updated Successfully",
  });
};

export const OnApplyCoupon = async (req: Request, res: Response) => {
  const { couponCode, orderTotal, userId } = req.body;

  const discount = await ApplyCoupon(couponCode, orderTotal, userId);
  res.status(200).send({
    discount,
  });
};
