import express from "express";
import {
  CreateBanner,
  getBanner,
  deleteBanner,
  updateBanner,
  getBanners,
  publishBanner,
  ChangePosition,
  getPublishedBanner,
} from "../controller/BannerController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Roles } from "../middlewares/permissions.js";

const router = express.Router();
router.post("/",  Roles(["MANAGER","ADMIN"]), tryCatch(CreateBanner));
router.get("/", tryCatch(getBanners));
router.get("/published", tryCatch(getPublishedBanner));
router.get("/:id", PathId, tryCatch(getBanner));
router.patch("/:id",  Roles(["MANAGER","ADMIN"]), PathId, tryCatch(updateBanner));
router.patch("/change-position/:id",  Roles(["MANAGER","ADMIN"]), PathId, tryCatch(ChangePosition));
router.patch("/publish/:id",  Roles(["MANAGER","ADMIN"]), PathId, tryCatch(publishBanner));
router.delete("/:id",  Roles(["MANAGER","ADMIN"]), PathId, tryCatch(deleteBanner));

export default router;
