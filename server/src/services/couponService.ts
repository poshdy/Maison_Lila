import { prismadb } from "../lib/prismadb.js";
import { NextFunction, Response, Request } from "express";

export const IncrementCount = async (couponName: string) => {
  return await prismadb.coupons.update({
    where: {
      name: couponName,
    },
    data: {
      countUsed: { increment: 1 },
    },
  });
};

export const checkCount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const coupon = await prismadb.coupons.findUnique({
    where: {
      name: req.body.coupon,
    },
  });

  if (coupon?.countUsed == coupon?.maxUsage) {
    await prismadb.coupons.update({
      where: {
        name: req.body.coupon,
      },
      data: {
        valid: { set: false },
      },
    });
    return res.status(400).send(`${coupon?.name} has expired`);
  }
  if (coupon?.valid === false) {
    return res.status(200).send("this coupon has expired");
  }
  console.log(`${coupon.name}:used ${coupon.countUsed}`);

  next();
};

export const Expiration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let currentDate = new Date();
    const coupons = await prismadb.coupons.updateMany({
      where: {
        expiration: {
          lte: currentDate,
        },
      },
      data: {
        valid: {
          set: false,
        },
      },
    });
    next();
  } catch (error) {
    console.log("");
  }
};

export const IsUsedBefore = async (couponName: string, userId: string) => {
  return await prismadb.blackList.findFirst({
    where: {
      user: { id: userId },
      coupon: { name: couponName },
    },
  });
};


export const addCouponToBlackList = async (
  couponName: string,
  userId: string
) => {
  return await prismadb.blackList.create({
    data: {
      user: {
        connect: { id: userId },
      },
      coupon: { connect: { name: couponName } },
    },
  });
};
