import express from "express";
import {
  OnCreateReview,
  OnGetProductReview,
  OnDeleteReview,
  OnGetReviews,
  OnUpdateReview,
} from "../controller/ReviewController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { Roles } from "../middlewares/permissions.js";

const router = express.Router();
router.post("/", tryCatch(OnCreateReview));
router.get("/", tryCatch(OnGetReviews));
router.get("/:productId", tryCatch(OnGetProductReview));
router.patch("/:id", Roles(["MANAGER"]), tryCatch(OnUpdateReview));

export default router;
