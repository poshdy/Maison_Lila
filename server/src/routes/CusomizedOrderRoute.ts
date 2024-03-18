import express from "express";
import {
  OnCreateCustomOrder,
  OnDeleteCustomOrder,
  OnGetCustomOrder,
  OnGetOneCustomOrder,
} from "../controller/CustomizedOrderController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";

const router = express.Router();
router.post("/", tryCatch(OnCreateCustomOrder));
router.get("/", tryCatch(OnGetCustomOrder));
router.get("/:id", tryCatch(OnGetOneCustomOrder));
router.delete("/:id", PathId, tryCatch(OnDeleteCustomOrder));

export default router;
