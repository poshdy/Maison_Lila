import express from "express";
import {
  addAddress,
  deleteAddress,
  getAddressById,
  getUserAddress,
  updateAddress,
} from "../controller/AddressController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";

const router = express.Router();

router.post("/", tryCatch(addAddress));
router.get("/user/:id", tryCatch(getUserAddress));
router.get("/:id", PathId, tryCatch(getAddressById));
router.patch("/:id", PathId, tryCatch(updateAddress));

router.delete("/:id", PathId, tryCatch(deleteAddress));

export default router;
