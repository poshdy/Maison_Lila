import express, { NextFunction, Request, Response } from "express";
import { tryCatch } from "../utils/tryCatch.js";
import { Roles } from "../middlewares/permissions.js";
import { PathId } from "../middlewares/path.js";
import {
  OnCreateSliderContent,
  OnDeleteSliderContent,
  OnGetSliderContent,
  OnGetSliderContents,
  OnUpdateSliderContent,
} from "../controller/SliderContentController.js";

const router = express.Router();
router.post("/", Roles(["MANAGER", "ADMIN"]), tryCatch(OnCreateSliderContent));
router.get("/", tryCatch(OnGetSliderContents));
router.get("/:id", PathId, tryCatch(OnGetSliderContent));
router.patch("/:id", PathId, tryCatch(OnUpdateSliderContent));
router.delete(
  "/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(OnDeleteSliderContent)
);

export default router;
