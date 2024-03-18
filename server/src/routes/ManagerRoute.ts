import express from "express";
import {
  OnManagerLogin,
  OnCreateAdmin,
  OnGetAdmins,
  OnGetUsers,
  OnRemoveAdmin,
} from "../controller/ManagerController.js";
import { Roles } from "../middlewares/permissions.js";

import { tryCatch } from "../utils/tryCatch.js";
import { OnLogOut, OnRefreshToken } from "../controller/AuthController.js";

const router = express.Router();

router.post("/login", tryCatch(OnManagerLogin));
router.get("/token", tryCatch(OnRefreshToken));
router.post("/log-out", tryCatch(OnLogOut));
router.patch("/user/:id", Roles(["MANAGER"]), tryCatch(OnCreateAdmin));
router.delete("/admin/:id", Roles(["MANAGER"]), tryCatch(OnRemoveAdmin));
router.get("/admins", tryCatch(OnGetAdmins));
router.get("/users", tryCatch(OnGetUsers));
//
export default router;
