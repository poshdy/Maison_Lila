import { Create, Delete, Find, Update } from "../../model/address/index.js";

export const CreateAddress = async (data) => {
  return await Create(data);
};
export const GetAddresses = async (id) => {
  return await Find(id);
};
export const UpdateAddress = async (id: string, data) => {
  return await Update(id, data);
};
export const DeleteAddress = async (id: string) => {
  return await Delete(id);
};
