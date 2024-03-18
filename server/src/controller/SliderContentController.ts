import { Request, Response } from "express";
import {
  CreateSliderContent,
  DeleteSliderContent,
  FindSliderContent,
  FindSliderContents,
  UpdateSliderContent,
} from "../services/slider-content/index.js";

export const OnCreateSliderContent = async (req: Request, res: Response) => {
  const data = req.body;
  await CreateSliderContent(data);
  res.status(201).send({
    message: "Slide Created Successfully",
  });
};
export const OnGetSliderContents = async (req: Request, res: Response) => {
  const data = await FindSliderContents();
  res.status(200).send({
    data,
  });
};
export const OnGetSliderContent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await FindSliderContent(id);
  res.status(200).send({
    data,
  });
};
export const OnUpdateSliderContent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  await UpdateSliderContent(id, data);
  res.status(200).send({
    message: "Slide Updated Successfully",
  });
};
export const OnDeleteSliderContent = async (req: Request, res: Response) => {
  const { id } = req.params;
  await DeleteSliderContent(id);
  res.status(200).send({
    message: "Slide Deleted Successfully",
  });
};
