import express from "express";

import {
  OnDeleteProduct,
  OnGetProduct,
  OnGetProducts,
  OnUpdateProduct,
  OnCreateProduct,
  OnProductsRestock,
  OnSearchProducts,
} from "../controller/ProductController.js";
import { ProductStock } from "../services/product/index.js";

import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Roles } from "../middlewares/permissions.js";

const router = express.Router();
router.get("/search", tryCatch(OnSearchProducts));
router.post("/", Roles(["MANAGER"]), tryCatch(OnCreateProduct));
router.patch(
  "/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(OnUpdateProduct)
);
router.get("/", ProductStock, tryCatch(OnGetProducts));
router.get("/:id", PathId, tryCatch(OnGetProduct));

router.delete("/:id", Roles(["MANAGER"]), PathId, tryCatch(OnDeleteProduct));
router.patch(
  "/restock",
  Roles(["MANAGER", "ADMIN"]),
  tryCatch(OnProductsRestock)
);

export default router;
