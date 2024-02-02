import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import { AppError } from "../utils/AppError.js";
import {
  CreateProduct,
  GetAllProducts,
  RestockAllProducts,
  SortedProducts,
  toggleBestSeller,
  topProducts,
} from "../services/productServies.js";

export const addProducts = async (req: Request, res: Response) => {
  const product = await CreateProduct(req);

  res.status(201).send(product);
};

export const addSubCatToProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { SubCategoryId } = req.body;

  await prismadb.product.update({
    where: {
      id,
    },
    data: {
      SubCategory: { connect: { id: SubCategoryId } },
    },
  });
  res.status(200).send("Product Added Successfully to Sub-Category");
};

export const getProducts = async (req: Request, res: Response) => {
  const { bestseller, newArrival, page, category } = req.query;
  const limit = 10;
  const start = (Number(page) * 1 - 1) * limit;
  let product;
  if (!bestseller && !newArrival) {
    product = await GetAllProducts(limit, start, category);
  } else if (bestseller || newArrival) {
    product = await SortedProducts(bestseller, newArrival);
  }

  res.status(200).send(product);
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await prismadb.product.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      image: true,
      name: true,
      description: true,
      category: true,
      price: true,
      stock: true,
    },
  });
  if (!product) {
    throw new AppError(
      "product with this id is not found",
      "product not found",
      404
    );
  }

  res.status(200).send(product);
};

export const searchProducts = async (req: Request, res: Response) => {
  const { query } = req.query;
  const product = await prismadb.product.findMany({
    where: {
      OR: [
        { name: { contains: query as string } },
        { category: { name: { contains: query as string } } },
      ],
    },
    include: {
      image: true,
      category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  if (product.length == 0) {
    throw new AppError("we dont have this product", "not found products", 404);
  }
  res.status(200).send(product);
};

export const updateProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    name,
    description,
    price,
    stock,
    image,
    discountValue,
    SoldOut,
    categoryId,
    adminName,
  } = req.body;

  let finalValue;
  if (discountValue) {
    finalValue = (await price) - (price * discountValue) / 100;
  }

  await prismadb.product.update({
    where: {
      id,
    },
    data: {
      description,
      name,
      price,
      image: {
        deleteMany: {},
      },
      category: { connect: { id: categoryId } },
      stock,
      SoldOut,
      discountValue,
      UpdatedBy: {
        create: { adminName: adminName },
      },
      salePrice: finalValue,
    },
  });
  const product = await prismadb.product.update({
    where: {
      id,
    },
    data: {
      image: {
        createMany: {
          data: [...image.map((image: { url: string }) => image)],
        },
      },
    },
  });

  res.status(200).send(product);
};

export const ReStock = async (req: Request, res: Response) => {
  const restock = await prismadb.product.updateMany({
    data: {
      stock: req.body.restock,
    },
  });
  res.status(200).send("our products has has been restocked");
};

export const RestockProduct = async (req: Request, res: Response) => {
  const data = await RestockAllProducts(req);
  res.status(200).send("our products has has been restocked");
};

export const BestSeller = async (req: Request, res: Response) => {
  const update = await toggleBestSeller(req);

  res.status(200).send(update);
};

export const TopProducts = async (req: Request, res: Response) => {
  const product = await topProducts();
  console.log(product);
  res.status(200).json(product);
};
export const productsStock = async (req: Request, res: Response) => {
  const product = await prismadb.$transaction(async (tx) => {
    const InStock = await tx.product.count({
      where: {
        SoldOut: false,
      },
    });
    const OutOfStock = await tx.product.count({
      where: {
        SoldOut: true,
      },
    });
    const All = await tx.product.count();
    return { InStock, OutOfStock, All };
  });

  res.status(200).json({
    InStock: product.InStock,
    OutOfStock: product.OutOfStock,
    All: product.All,
  });
};

export const deleteProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await prismadb.product.delete({
    where: {
      id,
    },
  });
  if (!product) {
    throw new AppError(
      "product with this id is not found",
      "product not found",
      404
    );
  }
  res.status(200).send(product);
};
