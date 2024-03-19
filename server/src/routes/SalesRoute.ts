import express from "express";
import {
  OnGetDailySales,
  OnGetProductSales,
} from "../controller/SalesController.js";
import { tryCatch } from "../utils/tryCatch.js";
const router = express.Router();

router.get("/daily", tryCatch(OnGetDailySales));
router.get("/products", tryCatch(OnGetProductSales));

export default router;
