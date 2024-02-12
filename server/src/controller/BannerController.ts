import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import {
  DeleteBanner,
  UpdateBanner,
  createBanner,
} from "../services/bannerService.js";

export const CreateBanner = async (req: Request, res: Response) => {
  const Banner = await createBanner(req);
  res.status(201).send({
    message: "new banner created",
    Banner,
  });
};
export const getBanners = async (req: Request, res: Response) => {
  const Banner = await prismadb.banner.findMany();
  res.status(200).send(Banner);
};
export const getPublishedBanner = async (req: Request, res: Response) => {
  const Banner = await prismadb.banner.findFirst({
    where: {
      published: true,
    },
  });
  console.log(Banner);
  res.status(200).send(Banner);
};
export const publishBanner = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prismadb.$transaction(async (tx) => {
    const banner = await tx.banner.findUnique({
      where: {
        id,
      },
      select: {
        published: true,
      },
    });

    const updated = await tx.banner.update({
      where: {
        id,
      },
      data: {
        published: !banner?.published,
      },
    });
  });
  res.status(200).send(`Banner Publish state updated Successfully`);
};
export const ChangePosition = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prismadb.banner.update({
    where: {
      id,
    },
    data: {
      place: req.body.position,
    },
  });
  res.status(200).send(`Banner Position Changed to ${req.body.position}`);
};

export const getBanner = async (req: Request, res: Response) => {
  const { id } = req.params;
  const Banner = await prismadb.banner.findUnique({
    where: {
      id,
    },
  });
  res.status(200).send(Banner);
};
export const updateBanner = async (req: Request, res: Response) => {
  const Banner = await UpdateBanner(req);
  res.status(201).send({
    message: `Banner Updated Successfully`,
    Banner,
  });
};
export const deleteBanner = async (req: Request, res: Response) => {
  await DeleteBanner(req);
  res.status(200).send(`Banner deleted`);
};
