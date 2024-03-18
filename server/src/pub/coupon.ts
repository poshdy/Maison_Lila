import EventEmitter from "events";
import { IncrementCount } from "../services/coupon/index.js";

export const Coupon = new EventEmitter();

Coupon.on("increment", async (couponId) => {
  await IncrementCount(couponId);
});
