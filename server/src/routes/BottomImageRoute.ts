import express from "express";
import {
  CreateBottomImage,
  deleteBottomImage,
  getBottomImageById,
  getBottomImages,
  getPublishedBottomImage,
  publishbottomImage,
  updateBottomImage,
} from "../controller/BottomImageController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Roles } from "../middlewares/permissions.js";

const router = express.Router();
router.post("/",  Roles(["MANAGER","ADMIN"]), tryCatch(CreateBottomImage));
router.get("/", tryCatch(getBottomImages));
router.get("/published", tryCatch(getPublishedBottomImage));
router.get("/:id", PathId, tryCatch(getBottomImageById));
router.patch("/:id",  Roles(["MANAGER","ADMIN"]), PathId, tryCatch(updateBottomImage));
router.patch("/publish/:id",  Roles(["MANAGER","ADMIN"]), PathId, tryCatch(publishbottomImage));
router.delete("/:id",  Roles(["MANAGER","ADMIN"]), PathId, tryCatch(deleteBottomImage));

export default router;
