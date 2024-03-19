import { Response, NextFunction, Request } from "express";
import {
  Create,
  Decrement,
  Delete,
  Find,
  FindById,
  Restock,
  Stock,
  Update,
} from "../../model/product/index.js";
import { AppError } from "../../utils/AppError.js";

export const CreateProduct = async (data) => {
  try {
    return await Create(data);
  } catch (error) {
    throw new AppError(`${error?.message}`, `${error?.message}`, 400);
  }
};
export const UpdateProduct = async (id: string, data) => {
  try {
    return await Update(id, data);
  } catch (error) {
    throw new AppError(`${error?.message}`, `${error?.message}`, 400);
  }
};
export const GetProducts = async (req: Request) => {
  const { category, price, bestSeller, newArrival, page } = req.query;
  const limit = 10;
  const start = (Number(page) * 1 - 1) * limit;
  return await Find(req.query);
};
export const GetProduct = async (id: string) => {
  return await FindById(id);
};
export const DeleteProduct = async (id: string) => {
  return await Delete(id);
};

export const RestockAll = async (stock: number) => {
  return await Restock(stock);
};

export const DecrementProductStock = async (
  quantity: number,
  productId: string
) => {
  return await Decrement(quantity, productId);
};

export const ProductStock = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = await Stock();
  next();
  return data;
};
// export const checkOrderQuntity = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { orderItems } = req.body;

//   try {
//     await prismadb.$transaction(async (tx) => {
//       for (const orderItem of orderItems) {
//         const { productId, quantity } = orderItem;
//         console.log(quantity, productId);
//         const product = await tx.product.findUnique({
//           where: {
//             id: productId,
//           },
//         });

//         if (product?.SoldOut === true) {
//           throw new AppError(
//             `Sorry ${product.name} is currently out of stock`,
//             `Sorry ${product.name} is currently out of stock`,
//             400
//           );
//         }
//         if (Number(product?.stock) < quantity) {
//           throw new AppError(
//             `Sorry we only have ${product?.stock} from ${product?.name}`,
//             `Sorry we only have ${product?.stock} from ${product?.name}`,
//             400
//           );
//         }
//       }
//       next();
//     });
//   } catch (error) {
//     return next(error);
//   }
// };

// export const RestockAllProducts = async (req: Request) => {
//   const { id } = req.params;
//   return await prismadb.productInventory.update({
//     data: {
//       stock: req.body.restock,
//       soldOut: false,
//     },
//     where: {
//       id,
//     },
//   });
// };
