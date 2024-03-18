import { Request, Response } from "express";
import {
  DeleteBanner,
  UpdateBanner,
  CreateBanner,
  FindBanners,
  FindBanner,
} from "../services/banner/index.js";
import { LOCATION } from "@prisma/client";

export const OnCreateBanner = async (req: Request, res: Response) => {
  const data = req.body;
  await CreateBanner(data);
  res.status(201).send({
    message: "new banner created",
  });
};
export const OnGetBanners = async (req: Request, res: Response) => {
  const data = await FindBanners(req);
  res.status(200).send({
    data,
  });
};

export const OnGetBanner = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await FindBanner(id);
  res.status(200).send({
    data: data,
  });
};
export const OnUpdateBanner = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  await UpdateBanner(id, data);
  res.status(201).send({
    message: `Banner Updated Successfully`,
  });
};
export const OnDeleteBanner = async (req: Request, res: Response) => {
  const { id } = req.params;
  await DeleteBanner(id);
  res.status(200).send(`Banner deleted`);
};
