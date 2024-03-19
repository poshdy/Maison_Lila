import { DailySales, GetSales, InsertSale } from "../../model/sales/index.js";

export const GetDailySales = async () => {
  return await DailySales();
};

export const GetProductSales = async () => {
  return await GetSales();
};

export const InsertIntoSales = async (orderItems) => {
  return await InsertSale(orderItems);
};

export const CalculateOrderPrice = async (price: number, quantity: number) => {
  return Number(price) * Number(quantity);
};
