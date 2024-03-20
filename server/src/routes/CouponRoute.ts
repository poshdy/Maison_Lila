import express from "express";
import {
  OnCreateCoupon,
  OnDeleteCoupon,
  OnGetCoupon,
  OnGetCoupons,
  OnUpdateCoupon,
} from "../controller/CouponController.js";

const router = express.Router();
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Roles } from "../middlewares/permissions.js";
import { Expiration } from "../services/coupon/index.js";

router.post("/", Roles(["MANAGER"]), tryCatch(OnCreateCoupon));
router.get("/", Expiration, tryCatch(OnGetCoupons));
router.get("/:id", tryCatch(OnGetCoupon));
router.patch("/:id", Roles(["MANAGER"]), PathId, tryCatch(OnUpdateCoupon));
router.delete("/:id", Roles(["MANAGER"]), PathId, tryCatch(OnDeleteCoupon));

export default router;
