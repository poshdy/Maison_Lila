import express from "express";
import {
  addContact,
  getContact,
  deleteContact,
  updateContact,
  getContactById,
} from "../controller/ContactController.js";

import { tryCatch } from "../utils/tryCatch.js";
import { Roles } from "../middlewares/permissions.js";

const router = express.Router();

router.get("/", tryCatch(getContact));
router.get("/:id", tryCatch(getContactById));
router.post("/", Roles(["MANAGER","ADMIN"]), tryCatch(addContact));
router.patch("/:id",  Roles(["MANAGER","ADMIN"]), tryCatch(updateContact));
router.delete("/:id",  Roles(["MANAGER","ADMIN"]), tryCatch(deleteContact));

export default router;
