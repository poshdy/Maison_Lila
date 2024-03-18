import { SliderSchema } from "../../validation/Schemas.js";
import {
  Create,
  Delete,
  Find,
  FindById,
  Update,
} from "../../model/slider/index.js";

export const CreateSlider = async (name: string) => {
  return await Create(name);
};

export const FindSliders = async (published) => {
  const state = published && Boolean(published);

  return await Find(state);
};
export const FindSlider = async (id: string) => {
  return await FindById(id);
};
export const UpdateSlider = async (id: string, data) => {
  return await Update(id, data);
};
export const DeleteSlider = async (id: string) => {
  return await Delete(id);
};
