import { Create, Get, Delete, Update } from "../../model/contact/index.js";

export const CreateContact = async (data) => {
  return await Create(data);
};
export const GetContact = async () => {
  return await Get();
};
export const UpdateContact = async (id, data) => {
  return await Update(id, data);
};
export const DeleteContact = async (id) => {
  return await Delete(id);
};
