import express from "express";
import {
  OnCreateCategory,
  OnDeleteCategory,
  OnGetCategories,
  OnGetCategory,
  OnUpdateCategory,
} from "../controller/CategoryController.js";

import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Roles } from "../middlewares/permissions.js";

const router = express.Router();

router.post("/", Roles(["MANAGER", "ADMIN"]), tryCatch(OnCreateCategory));
router.get("/", tryCatch(OnGetCategories));
router.get("/:id", PathId, tryCatch(OnGetCategory));
router.patch(
  "/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(OnUpdateCategory)
);
router.delete(
  "/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(OnDeleteCategory)
);

export default router;
