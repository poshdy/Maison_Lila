import EventEmitter from "events";
import { InsertIntoSales } from "../services/sales/index.js";

export const Sales = new EventEmitter();

Sales.on("insert", async (orderItems) => {
  await InsertIntoSales(orderItems);
});
