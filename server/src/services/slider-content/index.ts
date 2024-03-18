import {
  Create,
  Delete,
  Find,
  FindById,
  Update,
} from "../../model/slider-content/index.js";

export const CreateSliderContent = async (name: string) => {
  return await Create(name);
};

export const FindSliderContents = async () => {
  return await Find();
};
export const FindSliderContent = async (id: string) => {
  return await FindById(id);
};
export const UpdateSliderContent = async (id: string, data) => {
  return await Update(id, data);
};
export const DeleteSliderContent = async (id: string) => {
  return await Delete(id);
};
