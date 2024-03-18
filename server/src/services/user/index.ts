import { FindUserAddress, FindUserOrders } from "../../model/user/index.js";

export const GetUserOrders = async (id: string) => {
  return await FindUserOrders(id);
};
export const GetUserAddress = async (id: string) => {
  return await FindUserAddress(id);
};
