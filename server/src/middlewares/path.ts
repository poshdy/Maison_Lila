import { NextFunction, Request, Response } from "express";
// import { tryCatch } from "../utils/tryCatch.js";

export const PathId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send("id is missing from middleware");
  }
  next();
};
