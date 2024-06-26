import { Query } from "../../../types.js";
import { prismadb } from "../../lib/prismadb.js";

export const Create = async (data) => {
  const { name, description, price, categoryId, image, stock } = data;
  return await prismadb.$transaction(async (tx) => {
    const prod = await tx.product.create({
      data: {
        name,
        price,
        description,
        categoryId,
        image: {
          createMany: {
            data: [...image.map((image: { url: string }) => image)],
          },
        },
      },
    });
    await tx.productInventory.create({
      data: {
        productId: prod.id,
        stock,
      },
    });
    await tx.productAttribute.create({
      data: {
        productId: prod.id,
      },
    });
  });
};
export const FindById = async (id: string) => {
  return await prismadb.product.findUnique({
    include: {
      image: true,
      category: true,
      productAttribute: true,
      productInventory: true,
    },
    where: {
      id,
    },
  });
};

export const Find = async (query) => {
  const { price, category, bestSeller, newArrival, recommended, page } = query;
  const limit = 10;
  const start = (Number(page) * 1 - 1) * limit;
  const bestseller = bestSeller && Boolean(bestSeller);
  const newarrival = newArrival && Boolean(newArrival);
  const Recommended = newArrival && Boolean(recommended);
  return await prismadb.product.findMany({
    include: {
      image: true,
      category: true,
      productAttribute: true,
      productInventory: true,
    },
    where: {
      category: { name: category!! },

      productAttribute: {
        bestSeller: bestseller,
        newArrival: newarrival,
        recommended: Recommended,
      },
    },
    orderBy: {
      price,
      createdAt: "desc",
    },
    skip: start,
    take: limit,
  });
};

export const Delete = async (id: string) => {
  return await prismadb.product.delete({
    where: {
      id,
    },
  });
};
export const Update = async (id: string, data) => {
  const {
    name,
    price,
    description,
    image,
    categoryId,
    stock,
    salePrice,
    soldOut,
    bestSeller,
    recommended,
    newArrival,
  } = data;
  return await prismadb.$transaction(async (tx) => {
    const prod = await tx.product.update({
      where: {
        id,
      },
      data: {
        categoryId,
        name,
        price,
        salePrice,
        description,
        image: {
          deleteMany: {},
        },
      },
    });
    await UpdateImage(id, tx, image);
    await tx.productAttribute.upsert({
      where: {
        productId: prod.id,
      },
      create: {
        bestSeller,
        newArrival,
        recommended,
        productId: prod.id,
      },
      update: {
        bestSeller,
        recommended,
        newArrival,
      },
    });
    await tx.productInventory.upsert({
      where: {
        productId: prod.id,
      },
      create: {
        soldOut,
        stock,
        productId: prod.id,
      },
      update: {
        soldOut,
        stock,
      },
    });
  });
};

const UpdateImage = async (id: string, tx, image) => {
  await tx.product.update({
    where: {
      id,
    },
    data: {
      image: {
        createMany: {
          data: [...image?.map((image: { url: string }) => image)],
        },
      },
    },
  });
};

export const Restock = async (stock: number) => {
  return await prismadb.productInventory.updateMany({
    data: {
      stock,
      soldOut: false,
    },
  });
};

export const Decrement = async (quantity: number, productId: string) => {
  return await prismadb.productInventory.update({
    where: {
      productId,
    },
    data: {
      stock: { decrement: quantity },
    },
  });
};

export const Search = async (name: Query) => {
  return await prismadb.product.findMany({
    where: {
      OR: [
        { name: { contains: name as string } },
        { category: { name: { contains: name as string } } },
      ],
    },
    select: {
      name: true,
      image: true,
      price: true,
      id: true,
      category: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });
};

export const Stock = async () => {
  return await prismadb.productInventory.updateMany({
    data: {
      soldOut: true,
    },
    where: {
      stock: { lte: 1 },
    },
  });
};

export const SoldOut = async (id: string, soldOut) => {
  const data = Boolean(soldOut);
  return await prismadb.productInventory.update({
    where: { productId: id },
    data: { soldOut: data },
  });
};

export const RestockProduct = async (id: string, stock) => {
  return await prismadb.productInventory.update({
    where: { productId: id },
    data: {
      stock,
      soldOut: false,
    },
  });
};
