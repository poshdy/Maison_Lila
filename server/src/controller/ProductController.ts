import { Request, Response } from "express";
import {
  CreateProduct,
  DeleteProduct,
  GetProduct,
  GetProducts,
  RestockAll,
  UpdateProduct,
} from "../services/product/index.js";
import { ExtractId } from "../helpers/ExtractId.js";
import { Search } from "../model/product/index.js";

export const OnCreateProduct = async (req: Request, res: Response) => {
  const data = req.body;
  await CreateProduct(data);
  res.status(201).send({
    message: "Product Created Successfully",
  });
};
export const OnGetProducts = async (req: Request, res: Response) => {
  const data = await GetProducts(req);
  const length = data?.length;
  res.status(200).send({
    length,
    data,
  });
};
export const OnGetProduct = async (req: Request, res: Response) => {
  const id = await ExtractId(req);
  const data = await GetProduct(id);

  res.status(200).send({
    data,
  });
};
export const OnUpdateProduct = async (req: Request, res: Response) => {
  const id = await ExtractId(req);
  const data = req.body;
  await UpdateProduct(id, data);
  res.status(200).send({
    message: "Product Updated Successfully",
  });
};
export const OnDeleteProduct = async (req: Request, res: Response) => {
  const id = await ExtractId(req);
  await DeleteProduct(id);
  res.status(200).send({
    message: "Product Deleted Successfully",
  });
};

export const OnSearchProducts = async (req: Request, res: Response) => {
  const { name } = req.query;
  const products = await Search(name);
  const length = products.length;
  res.status(200).send({
    length,
    products,
  });
};

export const OnProductsRestock = async (req: Request, res: Response) => {
  const { stock } = req.body;
  await RestockAll(stock);
  res.status(200).send({
    message: "All Products has been restocked",
  });
};

// export const RestockProduct = async (req: Request, res: Response) => {
//   const data = await RestockAllProducts(req);
//   res.status(200).send("our products has has been restocked");
// };

// // export const BestSeller = async (req: Request, res: Response) => {
// //   const update = await toggleBestSeller(req);

// //   res.status(200).send(update);
// // };

// export const TopProducts = async (req: Request, res: Response) => {
//   const product = await topProducts();
//   console.log(product);
//   res.status(200).json(product);
// };

// export const deleteProducts = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const product = await prismadb.product.delete({
//     where: {
//       id,
//     },
//   });
//   if (!product) {
//     throw new AppError(
//       "product with this id is not found",
//       "product not found",
//       404
//     );
//   }
//   res.status(200).send(product);
// };
