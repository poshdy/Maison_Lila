import { AnouncementSchema } from "../../validation/Schemas.js";
import {
  Create,
  Delete,
  Find,
  FindOne,
  FindPublished,
  Update,
} from "../../model/Anouncement/index.js";
import { Query } from "../../../types.js";
import { Request } from "express";

export const CreateAnoun = async (data: { text: string }) => {
  const { error, value } = AnouncementSchema.validate(data);
  if (error) {
    throw error;
  }
  return await Create(value.text);
};

export const FindAnouncements = async (req: Request) => {
  const { published } = req.query;
  const state = published && Boolean(published);
  return await Find(state);
};
export const FindOneAnouncement = async (id: string) => {
  return await FindOne(id);
};

export const UpdateAnoun = async (
  id: string,
  data: { text?: string; published?: boolean }
) => {
  return await Update(id, data);
};
export const DeleteAnoun = async (id: string) => {
  return await Delete(id);
};
