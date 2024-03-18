import express, { NextFunction, Request, Response } from "express";
import {
  OnCreateSilder,
  OnDeleteSlider,
  OnGetSlider,
  OnGetSliders,
  OnUpdateSlider,
} from "../controller/SliderController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { Roles } from "../middlewares/permissions.js";
import { PathId } from "../middlewares/path.js";

const router = express.Router();
router.post("/", Roles(["MANAGER", "ADMIN"]), tryCatch(OnCreateSilder));
router.get("/", tryCatch(OnGetSliders));
router.get("/:id", PathId, tryCatch(OnGetSlider));
router.patch("/:id", PathId, tryCatch(OnUpdateSlider));
router.delete(
  "/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(OnDeleteSlider)
);

export default router;
