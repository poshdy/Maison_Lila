import EventEmitter from "events";
import { DecrementProductStock } from "../services/product/index.js";
import { OrderItems } from "@prisma/client";

export const Product = new EventEmitter();

Product.on("decrement", async (orderItems: OrderItems[]) => {
  orderItems.map(async (item: OrderItems) => {
    return await DecrementProductStock(item?.quantity, item?.productId);
  });
});
