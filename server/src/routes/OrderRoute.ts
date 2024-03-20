import express from "express";
import {
  OnApplyCoupon,
  OnCreateOrder,
  OnGetOrder,
  OnGetOrders,
  OnUpdateOrder,
} from "../controller/OrderController.js";

const router = express.Router();
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Expiration, CheckCouponExpiration } from "../services/coupon/index.js";
import { checkOrderQuntity } from "../services/order/index.js";

router.post("/", checkOrderQuntity, tryCatch(OnCreateOrder));
router.get("/", tryCatch(OnGetOrders));
router.post(
  "/apply-coupon",
  Expiration,
  CheckCouponExpiration,
  tryCatch(OnApplyCoupon)
);
router.get("/:id", PathId, tryCatch(OnGetOrder));
router.patch("/:id", PathId, tryCatch(OnUpdateOrder));

export default router;
