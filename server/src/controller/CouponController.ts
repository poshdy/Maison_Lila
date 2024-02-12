import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import { CouponSchema } from "../validation/Schemas.js";

export const CreateCoupon = async (req: Request, res: Response) => {
  const { error, value } = CouponSchema.validate(req.body);
  if (error) {
    throw error;
  }
  const Coupon = await prismadb.coupons.create({
    data: { ...value },
  });
  res.status(201).send({
    message: `new Coupon created with name: ${Coupon.name}`,
    Coupon,
  });
};
export const getCoupons = async (req: Request, res: Response) => {
  const Coupon = await prismadb.coupons.findMany();
  res.status(200).send(Coupon);
};
export const getCoupon = async (req: Request, res: Response) => {
  const { id } = req.params;
  const Coupon = await prismadb.coupons.findUnique({
    where: {
      id,
    },
  });
  res.status(200).send(Coupon);
};

export const updateCoupon = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { error, value } = CouponSchema.validate(req.body);
  if (error) {
    throw error;
  }
  const Coupon = await prismadb.coupons.update({
    where: {
      id,
    },
    data: { ...value },
  });

  res.status(201).send(Coupon);
};
export const deleteCoupon = async (req: Request, res: Response) => {
  const { id } = req.params;

  const Coupon = await prismadb.coupons.delete({
    where: {
      id,
    },
  });
  res.status(200).send(Coupon);
};
