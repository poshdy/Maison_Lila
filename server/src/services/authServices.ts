import { hash, compare } from "bcrypt";
import { Request } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/AppError.js";
import { prismadb } from "../lib/prismadb.js";

type User = {
  id: string;
  role: string;
  email: string;
};
export const encryptPassword = async (password: string) => {
  const hashedPass = await hash(password, 10);
  return hashedPass;
};

export const IsTheSame = async (hash: string, pass: string) => {
  return compare(pass, hash);
};

export const generateToken = async ({ id, role, email }: User) => {
  return jwt.sign(
    { id: id, role: role, email },
    process.env.ACCESS_TOKEN as string,
    {
      expiresIn: "40m",
    }
  );
};
export const generateRefreshToken = async ({ id, role }: User) => {
  return jwt.sign({ id: id, role: role }, process.env.REFRESH_TOKEN as string, {
    expiresIn: "7d",
  });
};

export const getAuthHeader = async (req: Request) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const CreateUserInDb = async (
  email: string,
  hashedPass: string,
  name: string
) => {
  return await prismadb.user.create({
    data: {
      email,
      hashedPassword: hashedPass,
      name,
    },
  });
};

export const CheckEmail = async (email: string) => {
  const user = await prismadb.user.findUnique({
    where: {
      email,
    },
  });
  return user;
};

export const GetUser = async (req: Request) => {
  const { id } = req.params;
  const user = await prismadb.user.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
      createdAt: true,
      email: true,
      id: true,
      address: {
        select: {
          zone: true,
        },
      },
      role: true,
      order: {
        select: {
          createdAt: true,
          orderStatus: true,
          OrderItems: true,
          id: true,
          orderSummary: {
            select: {
              OrderTotal: true,
            },
          },
        },
      },
    },
  });
  return user;
};
