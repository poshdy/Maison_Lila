import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";
import { getAuthHeader } from "../services/authServices.js";

export const Roles = (roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = await getAuthHeader(req);
    jwt.verify(
      token as string,
      process.env.ACCESS_TOKEN as string,
      async (err: any, data: any) => {
        if (err) {
          return res
            .status(403)
            .send(
              "your token has expired please"
            );
        }
        console.log(data)
        if (roles.includes(data.role)) {
          console.log(data?.role)
          next();
        } else {
          console.log(data?.role)
          return res
            .status(403)
            .send("you are not allowed");
        }
      }
    );
  };
};

export const validateToken = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await getAuthHeader(req);
    jwt.verify(
      token as string,
      process.env.ACCESS_TOKEN as string,
      async (err: any, data: any) => {
        if (err) {
          return res
            .status(403)
            .send(
              "you dont have access or your token has expired please login again"
            );
        }
        if (req.params.id !== data.id) {
          return res
            .status(403)
            .send(" you are not allowed from user  middleware");
        }
        next();
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
export const LoggedIn = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = await getAuthHeader(req);
    jwt.verify(
      token as string,
      process.env.ACCESS_TOKEN as string,
      async (err: any, data: any) => {
        if (err) {
          return res
            .status(403)
            .send(
              "you dont have access or your token has expired please login again"
            );
        } else {
          next();
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
