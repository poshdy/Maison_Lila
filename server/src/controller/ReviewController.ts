import { Request, Response } from "express";
import {
  CreateReview,
  DeleteReview,
  GetProductReview,
  GetReview,
  UpdateReview,
} from "../services/review/index.js";
export const OnCreateReview = async (req: Request, res: Response) => {
  const data = req.body;
  await CreateReview(data);

  res.status(201).send({
    message: "Review Created Successfully",
  });
};
export const OnGetReviews = async (req: Request, res: Response) => {
  const { state } = req.query;
  const data = await GetReview(state);
  res.status(200).send({
    data: data,
  });
};
export const OnGetProductReview = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const data = await GetProductReview(productId);
  res.status(200).send({
    data,
  });
};
export const OnUpdateReview = async (req: Request, res: Response) => {
  const { id } = req.params;
  await UpdateReview(id);
  res.status(200).send({
    message: "Review Updated Successfully",
  });
};
export const OnDeleteReview = async (req: Request, res: Response) => {
  const { id } = req.params;
  await DeleteReview(id);
  res.status(200).send({
    message: "Review Deleted Successfully",
  });
};

