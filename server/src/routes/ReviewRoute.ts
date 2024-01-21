import express from "express";
import {
  addReview,
  getPublished,
  getUnPublished,
  DeleteReview,
  publishReview,
  getProductReviews,
} from "../controller/ReviewController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { Roles } from "../middlewares/permissions.js";

const router = express.Router();
router.post("/", tryCatch(addReview));
router.get("/published", tryCatch(getPublished));
router.get("/unpublished", tryCatch(getUnPublished));
router.patch("/publish/:id", Roles(["MANAGER"]), tryCatch(publishReview));
router.get("/:productId", tryCatch(getProductReviews));

export default router;
