import { DailySales, GetSales, InsertSale, TotalSales } from "../../model/sales/index.js";

export const GetDailySales = async () => {
  return await DailySales();
};
export const GetMontlySales = async () => {
  return await DailySales();
};
export const GetWeeklySales = async () => {
  return await DailySales();
};
export const GetTotalSales = async () => {
  return await TotalSales();
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
