import express from "express";
import {
  OnCreateBanner,
  OnDeleteBanner,
  OnGetBanner,
  OnGetBanners,
  OnUpdateBanner,
} from "../controller/BannerController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Roles } from "../middlewares/permissions.js";

const router = express.Router();
router.post("/", Roles(["MANAGER", "ADMIN"]), tryCatch(OnCreateBanner));
router.get("/", tryCatch(OnGetBanners));
router.get("/:id", PathId, tryCatch(OnGetBanner));
router.patch("/:id",Roles(["MANAGER", "ADMIN"]),PathId,tryCatch(OnUpdateBanner));
router.delete("/:id",Roles(["MANAGER", "ADMIN"]),PathId,tryCatch(OnDeleteBanner));

export default router;
