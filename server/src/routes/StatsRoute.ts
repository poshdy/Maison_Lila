import express from "express";
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import {
  OnGetOrdersCount,
  OnGetUsersCount,
  OnGetProductsStock,
  OnGetCouponStats,
  OnGetOrderZones,
} from "../controller/StatsController.js";

const router = express.Router();
router.get("/users", tryCatch(OnGetUsersCount));
router.get("/orders", tryCatch(OnGetOrdersCount));
router.get("/products", tryCatch(OnGetProductsStock));
router.get("/zones", tryCatch(OnGetOrderZones));
router.get("/coupons", tryCatch(OnGetCouponStats));

export default router;
