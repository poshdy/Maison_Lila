import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";
import { EmailEvent } from "../pub/mails.js";

export const errorHandler = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.name == "ValidationError") {
    return res.status(400).send({
      type: "ValidationError",
      details: `message from error hander ${error.message}`,
    });
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      errorCode: error.errorCode,
    });
  }
  console.log(`from global error handler ${(error.name, error.message)}`);
  EmailEvent.emit("Server-Error",error.name, error.message);
  return res.status(500).send("[INTERNAL_SERVER_ERROR]");
};
