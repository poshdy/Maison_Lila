import express from "express";
import {
  OnDeleteProduct,
  OnGetProduct,
  OnGetProducts,
  OnUpdateProduct,
  OnCreateProduct,
  OnProductsRestock,
  OnSearchProducts,
  // productsStock,
} from "../controller/ProductController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Roles } from "../middlewares/permissions.js";
import { prismadb } from "../lib/prismadb.js";
// import { checkStock } from "../services/product/index.js";

const router = express.Router();
router.post("/", Roles(["MANAGER"]), tryCatch(OnCreateProduct));
router.patch(
  "/:id",
  Roles(["MANAGER", "ADMIN"]),
  PathId,
  tryCatch(OnUpdateProduct)
);
router.get("/", tryCatch(OnGetProducts));
router.get("/:id", PathId, tryCatch(OnGetProduct));

router.delete("/:id", Roles(["MANAGER"]), PathId, tryCatch(OnDeleteProduct));
router.get("/search", tryCatch(OnSearchProducts));
router.patch(
  "/restock",
  Roles(["MANAGER", "ADMIN"]),
  tryCatch(OnProductsRestock)
);

export default router;
