import express from "express";
import {
  addProducts,
  getProduct,
  getProducts,
  deleteProducts,
  updateProducts,
  searchProducts,
  ReStock,
  TopProducts,
  RestockProduct,
  BestSeller,
  productsStock,
} from "../controller/ProductController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";
import { Roles } from "../middlewares/permissions.js";
import { checkStock } from "../services/productServies.js";

const router = express.Router();

router.post("/", Roles(["MANAGER"]), tryCatch(addProducts));
router.patch("/restock", Roles(["MANAGER"]), tryCatch(ReStock));
router.patch("/restock/:id", Roles(["MANAGER"]), tryCatch(RestockProduct));
router.patch("/best-seller/:id", Roles(["MANAGER"]), tryCatch(BestSeller));
router.patch("/:id", Roles(["MANAGER"]), PathId, tryCatch(updateProducts));
router.delete("/:id", Roles(["MANAGER"]), PathId, tryCatch(deleteProducts));

router.get("/", checkStock, tryCatch(getProducts));
router.get("/top-products", tryCatch(TopProducts));
router.get("/stock", tryCatch(productsStock));
router.get("/search", tryCatch(searchProducts));
router.get("/:id", PathId, tryCatch(getProduct));

export default router;
