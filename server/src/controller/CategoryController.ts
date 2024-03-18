import { Request, Response } from "express";
import {
  CreateCategory,
  DeleteCategory,
  GetCategories,
  GetCategory,
  UpdateCategory,
} from "../services/category/index.js";
import { ExtractId } from "../helpers/ExtractId.js";
export const OnCreateCategory = async (req: Request, res: Response) => {
  const data = req.body;
  await CreateCategory(data);
  res.status(201).send({
    message: "Category Created Successfully",
  });
};
export const OnGetCategories = async (req: Request, res: Response) => {
  const data = await GetCategories();
  res.status(200).send({
    data,
  });
};
export const OnUpdateCategory = async (req: Request, res: Response) => {
  const id = await ExtractId(req);
  const data = req.body;
  await UpdateCategory(id, data);
  res.status(200).send({
    message: "Category Updated Successfully",
  });
};
export const OnDeleteCategory = async (req: Request, res: Response) => {
  const id = await ExtractId(req);
  await DeleteCategory(id);
  res.status(200).send({
    message: "Category Deleted Successfully",
  });
};
export const OnGetCategory = async (req: Request, res: Response) => {
  const id = await ExtractId(req);
  const data = await GetCategory(id);
  res.status(200).send({
    data,
  });
};
