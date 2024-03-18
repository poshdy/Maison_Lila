import { Create, Find, FindById, Update } from "../../model/order/index.js";

export const CreateOrder = async (data) => {
  return await Create(data);
};
export const GetOrders = async () => {
  return await Find();
};
export const GetOrder = async (id: string) => {
  return await FindById(id);
};
export const UpdateOrderStatus = async (id: string, status) => {
  return await Update(id, status);
};

// export const Calculate
