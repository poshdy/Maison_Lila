import express from "express";
import {
  OnGetDailySales,
  OnGetProductSales,
  OnGetMonthlySales,
  OnGetWeeklySales,
  OnGetTotalSales
} from "../controller/SalesController.js";
import { tryCatch } from "../utils/tryCatch.js";
const router = express.Router();

router.get("/daily", tryCatch(OnGetDailySales));
router.get("/weekly", tryCatch(OnGetWeeklySales));
router.get("/monthly", tryCatch(OnGetMonthlySales));
router.get("/total", tryCatch(OnGetTotalSales));
router.get("/products", tryCatch(OnGetProductSales));

export default router;
