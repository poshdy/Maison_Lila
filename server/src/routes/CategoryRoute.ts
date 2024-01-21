import express, { NextFunction, Request, Response } from "express";
import {
  addCategory,
  getCategory,
  getCategories,
  deleteCategory,
  updateCategory,
} from "../controller/CategoryController.js";

import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Roles } from "../middlewares/permissions.js";

const router = express.Router();

router.post("/",  Roles(["MANAGER","ADMIN"]), tryCatch(addCategory));
router.post("/messi", tryCatch(addCategory));
router.get("/", tryCatch(getCategories));
router.get("/:id", PathId, tryCatch(getCategory));
router.patch("/:id",  Roles(["MANAGER","ADMIN"]), PathId, tryCatch(updateCategory));
router.delete("/:id",  Roles(["MANAGER","ADMIN"]), PathId, tryCatch(deleteCategory));

export default router;
