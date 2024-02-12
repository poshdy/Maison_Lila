import { NextFunction, Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import { AppError } from "../utils/AppError.js";
import QueryString from "qs";
import { ProductSchema } from "../validation/Schemas.js";

export type OrderItem = {
  productId: string;
  quantity: number;
};
type querystring =
  | string
  | QueryString.ParsedQs
  | string[]
  | QueryString.ParsedQs[]
  | undefined;

export const checkOrderQuntity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { orderItems } = req.body;

  try {
    await prismadb.$transaction(async (tx) => {
      for (const orderItem of orderItems) {
        const { productId, quantity } = orderItem;
        console.log(quantity, productId);
        const product = await tx.product.findUnique({
          where: {
            id: productId,
          },
        });

        if (product?.SoldOut === true) {
          throw new AppError(
            `Sorry ${product.name} is currently out of stock`,
            `Sorry ${product.name} is currently out of stock`,
            400
          );
        }
        if (Number(product?.stock) < quantity) {
          throw new AppError(
            `Sorry we only have ${product?.stock} from ${product?.name}`,
            `Sorry we only have ${product?.stock} from ${product?.name}`,
            400
          );
        }
      }
      next();
    });
  } catch (error) {
    return next(error);
  }
};

export const checkStock = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await prismadb.product.updateMany({
    data: {
      SoldOut: {
        set: true,
      },
    },
    where: {
      stock: { lte: 5 },
    },
  });
  next();
};

export const topProducts = async () => {
  return await prismadb.sales.findMany({
    orderBy: {
      quantitySold: "desc",
    },
    include: {
      product: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
};
export const CreateProduct = async (req: Request) => {
  try {
    // const { error, value } = ProductSchema.validate(req.body);
    const { name, description, price, categoryId, image, stock } = req.body;
    // if (error) {
    //   throw error;
    // }
    const product = await prismadb.product.create({
      data: {
        name,
        description,
        stock,
        price,
        category: { connect: { id: categoryId } },
        image: {
          createMany: {
            data: [...image.map((image: { url: string }) => image)],
          },
        },
      },
    });
    return product;
  } catch (error) {
    console.log(error);
  }
};

export const toggleBestSeller = async (req: Request) => {
  const { id } = req.params;
  const { term } = req.body;

  await prismadb.$transaction(async (tx) => {
    try {
      const product = await tx.product.findUnique({
        where: {
          id,
        },
        select: { bestSeller: true, newArrival: true },
      });

      let updated;
      if (term === "bestSeller") {
        updated = await tx.product.update({
          data: {
            bestSeller: {
              set: !product?.bestSeller,
            },
          },
          where: {
            id,
          },
          select: {
            bestSeller: true,
          },
        });
      } else {
        updated = await tx.product.update({
          data: {
            newArrival: {
              set: !product?.newArrival,
            },
          },
          where: {
            id,
          },
          select: {
            bestSeller: true,
          },
        });
      }
      return updated;
    } catch (error) {
      console.log(error);
    }
  });
};

export const RestockAllProducts = async (req: Request) => {
  const { id } = req.params;
  return await prismadb.product.update({
    data: {
      stock: req.body.restock,
      SoldOut: false,
    },
    where: {
      id,
    },
  });
};

export const SortedProducts = async (
  bestseller: querystring,
  newArrival: querystring
) => {
  console.log(bestseller, newArrival);
  return await prismadb.product.findMany({
    select: {
      name: true,
      bestSeller: true,
      newArrival: true,
      description: true,
      price: true,
      id: true,
      SoldOut: true,
      salePrice: true,
      category: { select: { name: true } },
      image: true,
    },
    where: {
      bestSeller: Boolean(bestseller),
      newArrival: Boolean(newArrival),
    },
  });
};

export const GetAllProducts = async (
  limit: number,
  start: number,
  category: querystring
) => {
  if (category) {
    return await prismadb.product.findMany({
      select: {
        name: true,
        bestSeller: true,
        newArrival: true,
        description: true,
        price: true,
        id: true,
        SoldOut: true,
        stock: true,
        createdAt: true,
        UpdatedBy: {
          select: {
            adminName: true,
          },
        },
        discountValue: true,
        salePrice: true,
        category: { select: { name: true } },
        image: true,
      },
      where: {
        category: { name: { contains: category as string } },
      },
    });
  } else {
    return await prismadb.product.findMany({
      select: {
        name: true,
        bestSeller: true,
        newArrival: true,
        description: true,
        price: true,
        id: true,
        SoldOut: true,
        stock: true,
        createdAt: true,
        UpdatedBy: {
          select: {
            adminName: true,
          },
        },
        discountValue: true,
        salePrice: true,
        SubCategory: {
          select: {
            name: true,
            id: true,
          },
        },
        category: { select: { name: true } },
        image: true,
      },
      skip: start,
      take: limit,
    });
  }
};
