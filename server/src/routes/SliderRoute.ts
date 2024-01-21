import express, { NextFunction, Request, Response } from "express";
import {
  addSlider,
  getSlider,
  deleteSlider,
  updateSlider,
  getSliders,
  PublishSlider,
  publishedSlider,
} from "../controller/SliderController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { Roles } from "../middlewares/permissions.js";
import { PathId } from "../middlewares/path.js";

const router = express.Router();
router.post("/", Roles(["MANAGER", "ADMIN"]), tryCatch(addSlider));
router.get("/", tryCatch(getSliders));
router.get("/published", tryCatch(publishedSlider));
router.get("/:id", PathId, tryCatch(getSlider));
router.patch("/publish/:id", PathId, tryCatch(PublishSlider));
router.patch("/:id", PathId, tryCatch(updateSlider));
router.delete(
  "/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(deleteSlider)
);

export default router;
