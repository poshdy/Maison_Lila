import express from "express";
import {
  GetSalesTable,
  OnGetDailySales,
  OnGetProductSales,
  TotalSales,
} from "../controller/SalesController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { Roles } from "../middlewares/permissions.js";
const router = express.Router();

router.get("/daily", tryCatch(OnGetDailySales));
router.get("/products", tryCatch(OnGetProductSales));
router.get("/total-sales", Roles(["MANAGER"]), tryCatch(TotalSales));

export default router;
