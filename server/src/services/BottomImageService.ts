import { BottomImageSchema } from "../validation/Schemas.js";
import { prismadb } from "../lib/prismadb.js";
import { Request } from "express";

export const createImage = async (req: Request) => {
  const { error, value } = BottomImageSchema.validate(req.body);
  if (error) {
    throw error;
  }
  const BottomImage = await prismadb.bottomImage.create({
    data: {
      text: value.text,
      image: value.image,
      title: value.title,
    },
  });
  return BottomImage;
};

export const publishBottomImage = async (req: Request) => {
  const { id } = req.params;
  return await prismadb.$transaction(async (tx) => {
    const bottomImage = await tx.bottomImage.findUnique({
      where: {
        id,
      },
      select: {
        published: true,
      },
    });

    const updated = await tx.bottomImage.update({
      where: {
        id,
      },
      data: {
        published: !bottomImage?.published,
      },
    });
  });
};

export const UpdateBottomImage = async (req: Request) => {
  const { id } = req.params;
  const { error, value } = BottomImageSchema.validate(req.body);
  const { text, image, title } = value;
  if (error) {
    throw error;
  }

  const BottomImage = await prismadb.bottomImage.update({
    where: {
      id,
    },
    data: {
      title,
      text,
      image,
    },
  });
  return BottomImage;
};
export const DeleteBottomImage = async (req: Request) => {
  const { id } = req.params;
  return await prismadb.bottomImage.delete({
    where: {
      id,
    },
  });
};
