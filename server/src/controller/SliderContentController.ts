import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";

export const addSliderContent = async (req: Request, res: Response) => {
  const { sliderId } = req.body;
  const content = await prismadb.sliderContent.create({
    data: {
      slider: { connect: { id: sliderId } },
      image: req.body.image,
      title: req.body.title,
      text: req.body.text,
    },
  });
  res.status(201).send(`content added to slider ${content}`);
};
export const getContent = async (req: Request, res: Response) => {
  const content = await prismadb.sliderContent.findMany({
    select: {
      createdAt: true,
      id: true,
      image: true,
      title: true,
      text: true,
      slider: true,
    },
  });
  res.status(201).send(content);
};
export const getSliderContent = async (req: Request, res: Response) => {
  const { id } = req.body;
  const content = await prismadb.sliderContent.findUnique({
    where: {
      id,
    },
    select: {
      createdAt: true,
      id: true,
      image: true,
      text: true,
      title: true,
      slider: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });
  res.status(201).send(`content added to slider ${content}`);
};
export const updateSliderContent = async (req: Request, res: Response) => {
  const { id } = req.body;
  const content = await prismadb.sliderContent.update({
    where: {
      id,
    },
    data: {
      image: req.body.image,
      text: req.body.text,
      title: req.body.title,
      slider: {
        connect: {
          id: req.body.sliderId,
        },
      },
    },
  });
  res.status(201).send(`Slider content Updated Successfully`);
};
export const deleteSliderContent = async (req: Request, res: Response) => {
  const { id } = req.body;
  const content = await prismadb.sliderContent.delete({
    where: {
      id,
    },
  });
  res.status(201).send(`Slider content Deleted`);
};
