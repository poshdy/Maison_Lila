import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import { CategorySchema } from "../validation/Schemas.js";

export const addCategory = async (req: Request, res: Response) => {
  const { error, value } = CategorySchema.validate(req.body);
  const { name, imageUrl } = value;
  if (error) {
    throw error;
  }

  const category = await prismadb.category.create({
    data: { name, imageUrl },
  });
  res.status(201).send(`New Category with ${name} Created Successfully`);
};
export const getCategories = async (req: Request, res: Response) => {
  const category = await prismadb.category.findMany({
    include: {
      products: true,
      subCategory: true,
    },
  });
  res.status(200).send(category);
};
export const getCategory = async (req: Request, res: Response) => {
  const { id } = req.params;

  const category = await prismadb.category.findUnique({
    where: {
      id,
    },
    include: {
      products: {
        where: {
          categoryId: id,
        },
        include: { image: true },
      },
    },
  });
  res.status(200).send(category);
};
export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await prismadb.category.update({
    where: {
      id,
    },
    data: {
      name: req.body.name,
      imageUrl: req.body.imageUrl,
    },
  });

  res
    .status(201)
    .send(`Category with ${category.name} Updated Successfully Successfully`);
};
export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await prismadb.category.delete({
    where: {
      id,
    },
  });
  res.status(200).send(`Category with ${category.name} Deleted Successfully`);
};
