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
import { Search, SoldOut, RestockProduct } from "../model/product/index.js";

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
export const OnMarkSoldOut = async (req: Request, res: Response) => {
  const id = await ExtractId(req);
  const { soldOut } = req.body;
  await SoldOut(id, soldOut);
  res.status(200).send({
    message: "Product Marked As Sold Out",
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

export const OnRestockProducts = async (req: Request, res: Response) => {
  const { stock } = req.body;
  await RestockAll(stock);
  res.status(200).send({
    message: "All Products has been restocked",
  });
};

export const OnRestockProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { stock } = req.body;
  await RestockProduct(id, stock);
  res.status(200).send({
    message: "Product Restocked",
  });
};
