import {
  OrdersCount,
  UsersCount,
  ProductsCount,
  Zones,
  CouponStats,
} from "../../model/stats/index.js";

export const GetUsersCount = async () => {
  return await UsersCount();
};
export const GetOrdersCount = async () => {
  return await OrdersCount();
};
export const GetProductsCount = async () => {
  return await ProductsCount();
};
export const GetMostOrderedZones = async () => {
  return await Zones();
};
export const GetCouponStats = async () => {
  return await CouponStats();
};
