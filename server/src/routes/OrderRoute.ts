import express from "express";
import {
  PlaceOrder,
  getOrders,
  applyCoupon,
  updateOrderStatus,
  getOrder,
  getOrderCount,
} from "../controller/OrderController.js";

const router = express.Router();
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Expiration, checkCount } from "../services/couponService.js";
import { checkOrderQuntity, checkStock } from "../services/productServies.js";

router.post("/", checkStock, checkOrderQuntity, tryCatch(PlaceOrder));
router.get("/count", tryCatch(getOrderCount));
router.get("/", tryCatch(getOrders));
router.post("/apply-coupon", Expiration, checkCount, tryCatch(applyCoupon));
router.get("/:id", PathId, tryCatch(getOrder));
router.patch("/:id", PathId, tryCatch(updateOrderStatus));

export default router;
