import express from "express";
import {
  addSpecialOrder,
  deleteSpecialOrder,
  getSpecialOrder,
  updateSpecialOrder,
  getSpecialOrders,
} from "../controller/SpecialOrderController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";

const router = express.Router();
router.post("/", tryCatch(addSpecialOrder));
router.get("/", tryCatch(getSpecialOrders));
router.get("/:id", tryCatch(getSpecialOrder));
router.patch("/:id", PathId, tryCatch(updateSpecialOrder));
router.delete("/:id", PathId, tryCatch(deleteSpecialOrder));

export default router;
