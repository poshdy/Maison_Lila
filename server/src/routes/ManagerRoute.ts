import express from "express";
import {
  ManagerLogin,
  Token,
  getAdmins,
  getUsers,
  addAdmin,
  removeAdmin,
  LogOut,
} from "../controller/ManagerController.js";
import { Roles } from "../middlewares/permissions.js";

import { tryCatch } from "../utils/tryCatch.js";

const router = express.Router();

router.post("/login", tryCatch(ManagerLogin));
router.post("/log-out", tryCatch(LogOut));
router.get("/admin", tryCatch(getAdmins));
router.delete("/admin/:id", Roles(["MANAGER"]), tryCatch(removeAdmin));
router.get("/user", tryCatch(getUsers));
router.patch("/user/:id", Roles(["MANAGER"]), tryCatch(addAdmin));
router.get("/token", tryCatch(Token));

export default router;
