import { FindByEmail } from "../model/Auth/index.js";

import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import { AppError } from "../utils/AppError.js";
import { Request } from "express";

export const CheckEmail = async (email: string) => {
  return await FindByEmail(email);
};

export const EncryptPassword = async (password: string) => {
  const hashedPass = await hash(password, 10);
  return hashedPass;
};

export const ComparePassword = async (hash: string, pass: string) => {
  return compare(pass, hash);
};

export const generateToken = async ({ id, role }: any) => {
  return jwt.sign({ id, role }, process.env.ACCESS_TOKEN as string, {
    expiresIn: "20m",
  });
};
export const generateRefreshToken = async ({ id, role }: any) => {
  return jwt.sign({ id, role }, process.env.REFRESH_TOKEN as string, {
    expiresIn: "7d",
  });
};

export const verifyToken = async (token: string) => {
  try {
    const user = jwt.verify(token, process.env.REFRESH_TOKEN);
    const newAccessToken = await generateToken(user);
    const newRefreshToken = await generateRefreshToken(user);
    return {
      newAccessToken,
      newRefreshToken,
    };
  } catch (err) {
    throw new AppError(`${err.message}`, `${err.message}`, 403);
  }
};

export const ExtractCookie = (req: Request) => {
  const { token } = req.cookies;
  if (!token) {
    throw new AppError("token not provided", "messi", 400);
  }
  return token;
};
// export const getAuthHeader = async (req: Request) => {
//   try {
//     const { authorization } = req.headers;

//     const token = authorization?.split(" ")[1];
//     if (token == null) {
//       throw new AppError(
//         "token is missing",
//         "auth token is missing please provide it",
//         403
//       );
//     }
//     return token;
//   } catch (error) {
//     console.log(error);
//   }
// };
