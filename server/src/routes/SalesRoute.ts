import express from "express";
import { GetSalesTable, TotalSales } from "../controller/SalesController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { Roles } from "../middlewares/permissions.js";
const router = express.Router();

router.get("/", Roles(["MANAGER"]), tryCatch(GetSalesTable));
router.get("/total-sales", Roles(["MANAGER"]), tryCatch(TotalSales));

export default router;
