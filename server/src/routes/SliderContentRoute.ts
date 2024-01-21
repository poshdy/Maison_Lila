import express, { NextFunction, Request, Response } from "express";
import { tryCatch } from "../utils/tryCatch.js";
import { Roles } from "../middlewares/permissions.js";
import { PathId } from "../middlewares/path.js";
import {
  getContent,
  addSliderContent,
  deleteSliderContent,
  getSliderContent,
  updateSliderContent,
} from "../controller/SliderContentController.js";

const router = express.Router();
router.post("/", Roles(["MANAGER", "ADMIN"]), tryCatch(addSliderContent));
router.get("/", tryCatch(getContent));
router.get("/:id", PathId, tryCatch(getSliderContent));
router.patch("/:id", PathId, tryCatch(updateSliderContent));
router.delete(
  "/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(deleteSliderContent)
);

export default router;
