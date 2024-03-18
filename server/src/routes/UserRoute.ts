import express from "express";
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import {
  OnGetUserAddress,
  OnGetUserOrders,
} from "../controller/UserController.js";

const router = express.Router();
router.get("/:id/orders", tryCatch(OnGetUserOrders));
router.get("/:id/addresses", tryCatch(OnGetUserAddress));
export default router;
