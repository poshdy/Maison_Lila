import { Request, Response } from "express";
import {
  CreateCoupon,
  DeleteCoupon,
  GetCoupon,
  GetCoupons,
  UpdateCoupon,
} from "../services/coupon/index.js";
import { ExtractId } from "../helpers/ExtractId.js";

export const OnCreateCoupon = async (req: Request, res: Response) => {
  const data = req.body;
  await CreateCoupon(data);
  res.status(201).send({
    message: "Coupon Created Successfully",
  });
};
export const OnGetCoupons = async (req: Request, res: Response) => {
  const data = await GetCoupons();
  res.status(200).send({
    data,
  });
};
export const OnGetCoupon = async (req: Request, res: Response) => {
  const id = await ExtractId(req);
  const data = await GetCoupon(id);
  res.status(200).send({
    data,
  });
};

export const OnUpdateCoupon = async (req: Request, res: Response) => {
  const id = await ExtractId(req);
  const data = req.body;
  await UpdateCoupon(id, data);
  res.status(200).send({
    message: "Coupon Updated Successfully",
  });
};
export const OnDeleteCoupon = async (req: Request, res: Response) => {
  const id = await ExtractId(req);
  await DeleteCoupon(id);
  res.status(200).send({
    message: "Coupon Deleted Successfully",
  });
};
