import express from "express";
import {
  OnCreateOrder,
  OnGetOrder,
  OnGetOrders,
  OnUpdateOrder,
} from "../controller/OrderController.js";

const router = express.Router();
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
// import { Expiration, checkCount } from "../services/coupon/index.js";
// import { checkStock } from "../services/product/index.js";

router.post("/", tryCatch(OnCreateOrder));
router.get("/", tryCatch(OnGetOrders));
// router.post("/apply-coupon", Expiration, checkCount, tryCatch(applyCoupon));
router.get("/:id", PathId, tryCatch(OnGetOrder));
router.patch("/:id", PathId, tryCatch(OnUpdateOrder));

export default router;
