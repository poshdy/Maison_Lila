import {
  Create,
  Delete,
  Find,
  FindById,
} from "../../model/customized-order/index.js";

export const CreateCustomizedOrder = async (data: {
  name: string;
  email: string;
  phone: string;
  image: string;
  message: string;
}) => {
  return await Create(data);
};
export const FindCustomizedOrders = async () => {
  return await Find();
};
export const FindOneCustomizedOrder = async (id: string) => {
  return await FindById(id);
};

export const DeleteCustomizedOrder = async (id: string) => {
  return await Delete(id);
};
