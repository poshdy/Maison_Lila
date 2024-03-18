import { BannerSchema } from "../../validation/Schemas.js";
import {
  Create,
  Delete,
  Find,
  FindById,
  Update,
} from "../../model/Banner/index.js";
import { Request } from "express";

export const CreateBanner = async (data: {
  title: string;
  text: string;
  image: string;
}) => {
  const { error, value } = BannerSchema.validate(data);
  if (error) {
    throw error;
  }
  return await Create(value);
};

export const FindBanners = async (req: Request) => {
  const {published,location} = req.query
  const state = published && Boolean(published)
  return await Find(state,location);
};
export const FindBanner = async (id: string) => {
  return await FindById(id);
};
export const UpdateBanner = async (id: string, data) => {
  return await Update(id, data);
};
export const DeleteBanner = async (id: string) => {
  return await Delete(id);
};
