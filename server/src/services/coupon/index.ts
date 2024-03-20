import { Request, Response, NextFunction } from "express";
import {
  Create,
  Delete,
  Find,
  FindById,
  FindCouponByName,
  Increment,
  IsExpired,
  IsNameExist,
  UnVaildCoupon,
  Update,
} from "../../model/coupon/index.js";
import { AppError } from "../../utils/AppError.js";
import { prismadb } from "../../lib/prismadb.js";

export const CreateCoupon = async (data) => {
  const exist = await IsExisted(data.couponCode);
  if (exist) {
    throw new AppError("validtion", "This Coupon Name is Already Existed", 400);
  }
  return await Create(data);
};

export const GetCoupons = async () => {
  return await Find();
};
export const GetCoupon = async (id: string) => {
  return await FindById(id);
};

export const UpdateCoupon = async (id: string, data) => {
  return await Update(id, data);
};
export const DeleteCoupon = async (id: string) => {
  return await Delete(id);
};
export const IsExisted = async (couponCode: string) => {
  return await IsNameExist(couponCode);
};

export const IncrementCount = async (couponId: string) => {
  return await Increment(couponId);
};

export const CheckCouponExpiration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { couponCode } = req.body;
  const coupon = await FindCouponByName(couponCode);
  if (coupon?.couponData.valid === false) {
    return res.status(200).send("this coupon has expired");
  }
  if (coupon.couponData.countUsed == coupon.couponData.limit) {
    await UnVaildCoupon(couponCode);
    return res.status(400).send(`${coupon?.couponCode} has expired`);
  }

  // console.log(`${coupon.name}:used ${coupon.countUsed}`);

  next();
};

export const Expiration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const coupon = await IsExpired();
  next();
  return coupon;
};
