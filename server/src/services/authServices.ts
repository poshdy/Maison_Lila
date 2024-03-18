import { Request } from "express";
import { AppError } from "../utils/AppError.js";
import { prismadb } from "../lib/prismadb.js";

export const getAuthHeader = async (req: Request) => {
  const { authorization } = req.headers;

  const token = authorization?.split(" ")[1];
  if (token == null) {
    throw new AppError(
      "token is missing",
      "auth token is missing please provide it",
      403
    );
  }
  return token;
};
