import { BannerSchema } from "../validation/Schemas.js";
import { prismadb } from "../lib/prismadb.js";
import { Request } from "express";

export const createBanner = async (req: Request) => {
  const { error, value } = BannerSchema.validate(req.body);
  if (error) {
    throw error;
  }
  const Banner = await prismadb.banner.create({
    data: {
      text: value.text,
      image: value.image,
      title: value.title,
    },
  });
  return Banner;
};
export const UpdateBanner = async (req: Request) => {
  const { id } = req.params;
  const { error, value } = BannerSchema.validate(req.body);
  const { text, image, title } = value;
  if (error) {
    throw error;
  }

  const Banner = await prismadb.banner.update({
    where: {
      id,
    },
    data: {
      title,
      text,
      image,
    },
  });
  return Banner;
};
export const DeleteBanner = async (req: Request) => {
  const { id } = req.params;
  return await prismadb.banner.delete({
    where: {
      id,
    },
  });
};
