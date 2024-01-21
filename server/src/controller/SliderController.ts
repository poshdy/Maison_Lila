import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import { SliderSchema } from "../validation/Schemas.js";

export const addSlider = async (req: Request, res: Response) => {
  const { place, name } = req.body;
  const slider = await prismadb.slider.create({
    data: {
      place,
      name,
    },
  });
  res.status(201).send(slider);
};

export const getSliders = async (req: Request, res: Response) => {
  const slider = await prismadb.slider.findMany({
    include: {
      content: true,
    },
  });

  res.status(200).send(slider);
};
export const publishedSlider = async (req: Request, res: Response) => {
  const slider = await prismadb.slider.findFirst({
    include: {
      content: true,
    },
    where: {
      published: true,
      place: "TOP",
    },
  });

  res.status(200).send(slider);
};
export const PublishSlider = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prismadb.$transaction(async (tx) => {
    const slider = await tx.slider.findUnique({
      where: {
        id,
      },
    });
    const toggle = await tx.slider.update({
      where: {
        id,
      },
      data: {
        published: !slider?.published,
      },
    });
  });

  res.status(200).send("Slider Publish state updated Successfully");
};
export const getSlider = async (req: Request, res: Response) => {
  const { id } = req.params;

  const slider = await prismadb.slider.findUnique({
    where: {
      id,
    },
    include: {
      content: true,
    },
  });
  res.status(200).send(slider);
};
export const updateSlider = async (req: Request, res: Response) => {
  const { id } = req.params;
  const slider = await prismadb.slider.update({
    where: {
      id,
    },
    data: {
      name: req.body.name,
      place: req.body.place,
    },
  });

  res.status(201).send(slider);
};
export const deleteSlider = async (req: Request, res: Response) => {
  const { id } = req.params;

  const slider = await prismadb.slider.delete({
    where: {
      id,
    },
  });
  res.status(200).send(slider);
};
