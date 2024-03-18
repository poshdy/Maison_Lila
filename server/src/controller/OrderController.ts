import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";

import { InsertINtoSales } from "../services/salesServices.js";
// import { CreateOrder } from "../services/orderService.js";
// import {
//   IncrementCount,
//   IsUsedBefore,
//   addCouponToBlackList,
// } from "../services/coupon/index.js";
import { EmailEvent } from "../pub/mails.js";
import { ExtractId } from "../helpers/ExtractId.js";
import {
  GetOrder,
  GetOrders,
  UpdateOrderStatus,
  CreateOrder,
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

// // export const applyCoupon = async (req: Request, res: Response) => {
// //   const { totalOrder, coupon, userId } = req.body;
// //   const isValid = await prismadb.coupons.findUnique({
// //     where: {
// //       name: coupon,
// //       AND: {
// //         valid: true,
// //       },
// //     },
// //   });

// //   if (!isValid) {
// //     return res.status(400).send("this coupon is not valid");
// //   }
// //   const used = await IsUsedBefore(coupon, userId);
// //   if (used) {
// //     return res.status(400).send("Sorry You Used this Coupon Before");
// //   }
// //   if (totalOrder < isValid.Minimum) {
// //     return res.send(
// //       `Please Add ${totalOrder - isValid.Minimum} to use this coupon`
// //     );
// //   }

// //   const addToUsed = await addCouponToBlackList(coupon, userId);
// //   await IncrementCount(coupon);

// //   res.status(200).send({
// //     discountValue: isValid.amount,
// //   });
// // };

