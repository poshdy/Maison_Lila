import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";

import { InsertINtoSales } from "../services/salesServices.js";
import { CreateOrder } from "../services/orderService.js";
import {
  IncrementCount,
  IsUsedBefore,
  addCouponToBlackList,
} from "../services/couponService.js";
import { EmailEvent } from "../pub/mails.js";

export const PlaceOrder = async (req: Request, res: Response) => {
  const { orderItems } = req.body;
  const order = await CreateOrder(req, orderItems);
  EmailEvent.emit("orderPlaced", order?.user?.name, order.OrderItems);
  await InsertINtoSales(orderItems);
  res.status(200).send({
    id: order.id,
    message: "order placed Successfully",
  });
};

export const getOrders = async (req: Request, res: Response) => {
  const { page } = req.query;
  const limit = 10;
  const start = (Number(page) * 1 - 1) * limit;
  const orders = await prismadb.order.findMany({
    select: {
      id: true,
      user: { select: { name: true, email: true } },
      OrderItems: {
        select: { Product: { select: { name: true } }, quantity: true },
      },
      Address: {
        include: {
          zone: true,
        },
      },
      orderStatus: true,
      comment: true,
      createdAt: true,
      orderSummary: true,
    },
    skip: Number(start),
    take: Number(limit),
  });

  res.status(200).send(orders);
};

export const applyCoupon = async (req: Request, res: Response) => {
  const { totalOrder, coupon, userId } = req.body;
  const isValid = await prismadb.coupons.findUnique({
    where: {
      name: coupon,
      AND: {
        valid: true,
      },
    },
  });

  if (!isValid) {
    return res.status(400).send("this coupon is not valid");
  }
  const used = await IsUsedBefore(coupon, userId);
  if (used) {
    return res.status(400).send("Sorry You Used this Coupon Before");
  }
  if (totalOrder < isValid.Minimum) {
    return res.send(
      `Please Add ${totalOrder - isValid.Minimum} to use this coupon`
    );
  }

  const addToUsed = await addCouponToBlackList(coupon, userId);
  await IncrementCount(coupon);

  res.status(200).send({
    discountValue: isValid.amount,
  });
};

export const getOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  const order = await prismadb.order.findUnique({
    where: {
      id,
    },
    select: {
      user: {
        select: {
          email: true,
          id: true,
          name: true,
        },
      },
      OrderItems: {
        select: {
          quantity: true,
          Product: {
            select: {
              name: true,
              price: true,
              image: {
                select: {
                  url: true,
                },
              },
            },
          },
        },
      },
      id: true,
      Address: {
        include: {
          zone: true,
        },
      },
      orderStatus: true,
      comment: true,
      orderSummary: true,
      createdAt: true,
    },
  });

  res.status(200).send(order);
};

export const updateOrderStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  const Status = await prismadb.order.update({
    where: {
      id,
    },
    data: {
      orderStatus: status,
    },
  });

  res.status(200).send(`order status updated to ${status}`);
};

export const getOrderCount = async (req: Request, res: Response) => {
  const Delivered = await prismadb.order.count({
    where: {
      orderStatus: "DELIVERD",
    },
  });

  const Proccessing = await prismadb.order.count({
    where: {
      orderStatus: "CONFIRMED",
    },
  });
  const Pending = await prismadb.order.count({
    where: {
      orderStatus: "PENDING",
    },
  });

  res.status(200).json({ Delivered, Proccessing, Pending });
};
