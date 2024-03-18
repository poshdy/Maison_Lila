import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import { SliderSchema } from "../validation/Schemas.js";
import {
  CreateSlider,
  DeleteSlider,
  FindSlider,
  FindSliders,
  UpdateSlider,
} from "../services/slider/index.js";

export const OnCreateSilder = async (req: Request, res: Response) => {
  const { name } = req.body;
  await CreateSlider(name);
  res.status(201).send({
    message: "Slider Created Successfully",
  });
};
export const OnGetSliders = async (req: Request, res: Response) => {
  const { published } = req.query;
  const data = await FindSliders(published);
  res.status(200).send({
    data,
  });
};
export const OnGetSlider = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await FindSlider(id);
  res.status(200).send({
    data,
  });
};
export const OnUpdateSlider = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  await UpdateSlider(id, data);
  res.status(200).send({
    message: "Slider Updated Successfully",
  });
};
export const OnDeleteSlider = async (req: Request, res: Response) => {
  const { id } = req.params;
  await DeleteSlider(id);
  res.status(200).send({
    message: "Slider Deleted Successfully",
  });
};

// export const publishedSlider = async (req: Request, res: Response) => {
//   const slider = await prismadb.slider.findFirst({
//     include: {
//       content: true,
//     },
//     where: {
//       published: true,
//     },
//   });

//   res.status(200).send(slider);
// };
// export const PublishSlider = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   await prismadb.$transaction(async (tx) => {
//     const slider = await tx.slider.findUnique({
//       where: {
//         id,
//       },
//     });
//     const toggle = await tx.slider.update({
//       where: {
//         id,
//       },
//       data: {
//         published: !slider?.published,
//       },
//     });
//   });

//   res.status(200).send("Slider Publish state updated Successfully");
// };
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
