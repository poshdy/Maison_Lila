import { NextFunction, Request, Response } from "express";
import { IsValid, CanUseIt, UsedCoupons } from "../../model/coupon/index.js";
import {
  Create,
  Find,
  FindById,
  OrderQuantity,
  Update,
} from "../../model/order/index.js";
import { Coupon } from "../../pub/coupon.js";
import { Product } from "../../pub/product.js";
import { Sales } from "../../pub/sales.js";
import { AppError } from "../../utils/AppError.js";
import { EmailEvent } from "../../pub/mails.js";

export const CreateOrder = async (data) => {
  const { orderItems } = data;
  const order = await Create(data);
  Sales.emit("insert", orderItems);
  Product.emit("decrement", orderItems);
  EmailEvent.emit("orderPlaced", order?.user, order);
  return order;
};
export const GetOrders = async () => {
  return await Find();
};
export const GetOrder = async (id: string) => {
  return await FindById(id);
};
export const UpdateOrderStatus = async (id: string, status) => {
  return await Update(id, status);
};

export const ApplyCoupon = async (
  couponCode: string,
  orderTotal: number,
  userId: string
) => {
  const coupon = await IsValid(couponCode);
  if (!coupon) {
    throw new AppError("not vaild", "this coupon is not vaild", 400);
  }
  const user = await CanUseIt(userId, couponCode);
  if (user) {
    throw new AppError(
      `used before`,
      "Sorry You Already Used This Coupon",
      400
    );
  }
  if (coupon.minimumAmount > orderTotal) {
    throw new AppError(
      `Please add ${coupon.minimumAmount - orderTotal} to use coupon`,
      "doesn't reach minimum amount",
      400
    );
  }

  await UsedCoupons(userId, couponCode);
  Coupon.emit("increment", coupon.id);

  return coupon.discountAmount;
};

export const checkOrderQuntity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { orderItems } = req.body;
    const order = await OrderQuantity(orderItems);
    next();
    return order;
  } catch (error) {
    return next(error);
  }
};
