import express from "express";
import {
  OnCreateUser,
  OnLoginUser,
  OnRefreshToken,
  OnLogOut,
} from "../controller/AuthController.js";
import { tryCatch } from "../utils/tryCatch.js";

const router = express.Router();

router.post("/sign-up", tryCatch(OnCreateUser));
router.post("/login", tryCatch(OnLoginUser));
router.get("/token", tryCatch(OnRefreshToken));
router.post("/logOut", tryCatch(OnLogOut));

export default router;
