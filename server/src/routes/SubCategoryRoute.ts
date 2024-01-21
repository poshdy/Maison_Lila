import express from "express";
import { Roles } from "../middlewares/permissions.js";
import { tryCatch } from "../utils/tryCatch.js";
import {
  addSubCategory,
  deleteSubCategory,
  getSubCategories,
  getSubCategory,
  updateSubCategory,
} from "../controller/SubCategoryController.js";

const router = express.Router();

router.post("/", Roles(["MANAGER", "ADMIN"]), tryCatch(addSubCategory));


router.get("/", tryCatch(getSubCategories));
router.get("/:id", tryCatch(getSubCategory));


router.patch("/:id", Roles(["MANAGER", "ADMIN"]), tryCatch(updateSubCategory));


router.delete("/:id", Roles(["MANAGER", "ADMIN"]), tryCatch(deleteSubCategory));

export default router;
