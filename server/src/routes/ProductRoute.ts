import express from "express";

import {
  OnDeleteProduct,
  OnGetProduct,
  OnGetProducts,
  OnUpdateProduct,
  OnCreateProduct,
  OnRestockProducts,
  OnRestockProduct,
  OnMarkSoldOut,
  OnSearchProducts,
} from "../controller/ProductController.js";
import { ProductStock } from "../services/product/index.js";

import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Roles } from "../middlewares/permissions.js";

const router = express.Router();
router.get("/search", tryCatch(OnSearchProducts));
router.get("/", ProductStock, tryCatch(OnGetProducts));
router.get("/:id", PathId, tryCatch(OnGetProduct));
router.post("/", Roles(["MANAGER"]), tryCatch(OnCreateProduct));
router.patch(
  "/restock-all",
  Roles(["MANAGER", "ADMIN"]),
  tryCatch(OnRestockProducts)
);
router.patch(
  "/:id/restock",
  Roles(["MANAGER", "ADMIN"]),
  tryCatch(OnRestockProduct)
);
router.patch(
  "/:id/sold-out",
  Roles(["MANAGER", "ADMIN"]),
  tryCatch(OnMarkSoldOut)
);
router.patch(
  "/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(OnUpdateProduct)
);

router.delete("/:id", Roles(["MANAGER"]), PathId, tryCatch(OnDeleteProduct));

export default router;
