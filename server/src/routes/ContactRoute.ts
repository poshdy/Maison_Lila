import express from "express";
import {
  OnCreateContact,
  OnGetContact,
  OnUpdateContact,
  OnDeleteContact,
} from "../controller/ContactController.js";

import { tryCatch } from "../utils/tryCatch.js";
import { Roles } from "../middlewares/permissions.js";

const router = express.Router();

router.get("/", tryCatch(OnGetContact));
// router.get("/:id", tryCatch(getContactById));
router.post("/", Roles(["MANAGER", "ADMIN"]), tryCatch(OnCreateContact));
router.patch("/:id", Roles(["MANAGER", "ADMIN"]), tryCatch(OnUpdateContact));
router.delete("/:id", Roles(["MANAGER", "ADMIN"]), tryCatch(OnDeleteContact));

export default router;
