import express from "express";
import {
  addProducts,
  getProduct,
  getProducts,
  deleteProducts,
  updateProducts,
  searchProducts,
  ReStock,
  addSubCatToProduct,
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
// CREATE
router.post("/", Roles(["MANAGER"]), tryCatch(addProducts));


// UPDATE
router.patch("/sub-category/:id", Roles(["MANAGER","ADMIN"]), tryCatch(addSubCatToProduct));
router.patch("/restock", Roles(["MANAGER","ADMIN"]), tryCatch(ReStock));
router.patch("/restock/:id", Roles(["MANAGER","ADMIN"]), tryCatch(RestockProduct));
router.patch("/best-seller/:id", Roles(["MANAGER","ADMIN"]), tryCatch(BestSeller));
router.patch("/:id", Roles(["MANAGER","ADMIN"]), PathId, tryCatch(updateProducts));


//READ
router.get("/", checkStock, tryCatch(getProducts));
router.get("/top-products", tryCatch(TopProducts));
router.get("/stock", tryCatch(productsStock));
router.get("/search", tryCatch(searchProducts));
router.get("/:id", PathId, tryCatch(getProduct));


// DELETE
router.delete("/:id", Roles(["MANAGER"]), PathId, tryCatch(deleteProducts));


export default router;
