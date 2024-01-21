import { Request } from "express";
import { prismadb } from "../lib/prismadb.js";
import { AnouncementSchema } from "../validation/Schemas.js";

export const CreateAnoun = async (req: Request) => {
  const { error, value } = AnouncementSchema.validate(req.body);
  if (error) {
    throw error;
  }
  const anouncement = await prismadb.anouncement.create({
    data: {
      text: value.text,
    },
  });

  return anouncement;
};
export const UpdateAnoun = async (req: Request) => {
  const { id } = req.params;
  const { error, value } = AnouncementSchema.validate(req.body);
  if (error) {
    throw error;
  }

  const anouncement = await prismadb.anouncement.update({
    where: {
      id,
    },
    data: {
      text: value.text,
    },
  });

  return anouncement;
};
export const DeleteAnoun = async (req: Request) => {
  const { id } = req.params;

  const anouncement = await prismadb.anouncement.delete({
    where: {
      id,
    },
  });

  return anouncement;
};
export const PublishAnoun = async (req: Request) => {
  const { id } = req.params;
  return await prismadb.$transaction(async (tx) => {
    const anouncement = await tx.anouncement.findUnique({
      where: {
        id,
      },
      select: {
        published: true,
      },
    });

    const updated = await tx.anouncement.update({
      where: {
        id,
      },
      data: {
        published: !anouncement?.published,
      },
    });
  });
};
