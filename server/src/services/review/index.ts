import {
  Create,
  Delete,
  Find,
  FindByProduct,
  FindPublished,
  Publish,
} from "../../model/review/index.js";

export const CreateReview = async (data) => {
  return await Create(data);
};
export const UpdateReview = async (id: string) => {
  return await Publish(id);
};
export const GetReview = async (state) => {
  if (state === "all") {
    return Find();
  } else if (state === "published") {
    return FindPublished();
  }
};
export const DeleteReview = async (id: string) => {
  return await Delete(id);
};
export const GetProductReview = async (productId) => {
  return await FindByProduct(productId);
};
