import express from "express";
import {
  deleteCoupon,
  updateCoupon,
  getCoupons,
  CreateCoupon,
  getCoupon,
} from "../controller/CouponController.js";

const router = express.Router();
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Roles } from "../middlewares/permissions.js";
import { Expiration } from "../services/couponService.js";

router.post("/", Roles(["MANAGER"]), tryCatch(CreateCoupon));
router.get("/", Expiration, tryCatch(getCoupons));
router.get("/:id", tryCatch(getCoupon));
router.patch("/:id", Roles(["MANAGER"]), PathId, tryCatch(updateCoupon));
router.delete("/:id", Roles(["MANAGER"]), PathId, tryCatch(deleteCoupon));

export default router;
