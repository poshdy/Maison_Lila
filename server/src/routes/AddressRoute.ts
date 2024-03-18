import express from "express";
import {
  OnCreateAddress,
  OnDeleteAddress,
  OnGetAddresses,
  OnUpdateAddress,
} from "../controller/AddressController.js";
import { tryCatch } from "../utils/tryCatch.js";
import { PathId } from "../middlewares/path.js";

const router = express.Router();

router.post("/", tryCatch(OnCreateAddress));
router.get("/user/:id", tryCatch(OnGetAddresses));
router.patch("/:id", PathId, tryCatch(OnUpdateAddress));

router.delete("/:id", PathId, tryCatch(OnDeleteAddress));

export default router;
