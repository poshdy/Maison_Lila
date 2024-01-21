import express, { NextFunction, Request, Response } from "express";
import {
  Login,
  createUser,
  getUser,
  getUserAddress,
  Token,
  LogOut,
} from "../controller/AuthController.js";
import { validateToken } from "../middlewares/permissions.js";
import { PathId } from "../middlewares/path.js";
import { tryCatch } from "../utils/tryCatch.js";

const router = express.Router();

router.post("/sign-up", tryCatch(createUser));
router.post("/login", tryCatch(Login));
router.post("/logOut", tryCatch(LogOut));
router.get("/token", tryCatch(Token));
router.get("/user/:id", PathId, validateToken, tryCatch(getUser));
router.get("/user/address/:id", PathId, tryCatch(getUserAddress));

export default router;
