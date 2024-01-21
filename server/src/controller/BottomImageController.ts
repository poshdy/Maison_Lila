import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import {
  createImage,
  publishBottomImage,
  DeleteBottomImage,
  UpdateBottomImage,
} from "../services/BottomImageService.js";

export const CreateBottomImage = async (req: Request, res: Response) => {
  const BottomImage = await createImage(req);
  res.status(201).send({
    message: "Image Created",
    BottomImage,
  });
};
export const getBottomImages = async (req: Request, res: Response) => {
  const BottomImage = await prismadb.bottomImage.findMany();
  res.status(200).send(BottomImage);
};
export const getPublishedBottomImage = async (req: Request, res: Response) => {
  const BottomImage = await prismadb.bottomImage.findFirst({
    where: {
      published: true,
    },
  });

  res.status(200).send(BottomImage);
};
export const publishbottomImage = async (req: Request, res: Response) => {
  const bottomImage = await publishBottomImage(req);
  res.status(200).send(`Banner Publish state upadated Successfully`);
};

export const getBottomImageById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const bottomImage = await prismadb.bottomImage.findUnique({
    where: {
      id,
    },
  });
  res.status(200).send(bottomImage);
};
export const updateBottomImage = async (req: Request, res: Response) => {
  const Banner = await UpdateBottomImage(req);
  res.status(201).send({
    message: `Banner Updated Successfully`,
    Banner,
  });
};
export const deleteBottomImage = async (req: Request, res: Response) => {
  await DeleteBottomImage(req);
  res.status(200).send(`Banner deleted`);
};
