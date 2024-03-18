import {
  Create,
  Delete,
  Find,
  Update,
  FindById,
} from "../../model/category/index.js";

export const CreateCategory = async (data) => {
  return await Create(data);
};
export const GetCategories = async () => {
  return await Find();
};
export const GetCategory = async (id: string) => {
  return await FindById(id);
};
export const UpdateCategory = async (id: string, data) => {
  return await Update(id, data);
};
export const DeleteCategory = async (id: string) => {
  return await Delete(id);
};
