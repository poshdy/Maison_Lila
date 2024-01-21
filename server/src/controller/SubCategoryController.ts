import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";




export const addSubCategory = async (req: Request, res: Response) => {
  const { name, categoryId } = req.body;
  const Subcategory = await prismadb.subCategory.create({
    data: {
      name,
      parent: {
        connect: { id: categoryId },
      },
    },
  });
  res
    .status(200)
    .send(`New Sub-Category with ${Subcategory.name} Created Successfully`);
};



export const getSubCategories = async (req: Request, res: Response) => {
  const SubCategories = await prismadb.subCategory.findMany({
    select: {
      name: true,
      createdAt: true,
      id: true,
      parent: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });
  console.log(SubCategories);
  res.status(200).send(SubCategories);
};

export const getSubCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const Subcategory = await prismadb.subCategory.findUnique({
    where: {
      id,
    },
    include: {
      parent: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });
  res.status(200).send(Subcategory);
};




export const updateSubCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await prismadb.subCategory.update({
    where: {
      id,
    },
    data: {
      name: req.body.name,
      parent: { connect: { id: req.body.categoryId } },
    },
  });
  res.status(200).send(`Sub-Category Updated Successfully`);
};
export const deleteSubCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await prismadb.subCategory.delete({
    where: {
      id,
    },
  });
  res
    .status(200)
    .send(`Sub-Category with ${category.name} Deleted Successfully`);
};
