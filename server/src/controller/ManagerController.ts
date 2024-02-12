import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import {
  IsTheSame,
  generateRefreshToken,
  generateToken,
} from "../services/authServices.js";
import jwt from "jsonwebtoken";
import { AuthSchema } from "../validation/Schemas.js";

export const ManagerLogin = async (req: Request, res: Response) => {
  const { error, value } = AuthSchema.validate(req.body);
  if (error) {
    throw error;
  }
  const manager = await prismadb.user.findUnique({
    where: {
      email: value.email,
      role: {
        in: ["MANAGER", "ADMIN"],
      },
    },
  });

  if (!manager) {
    return res.status(400).send("You Dont Have Access");
  }

  const valid = await IsTheSame(manager.hashedPassword, value.password);

  if (!valid) {
    return res.status(401).send("Invalid Password");
  }
  const token = await generateToken(manager);
  const refreshtoken = await generateRefreshToken(manager);

  res.cookie("token", refreshtoken, {
    httpOnly: true,
    secure: true,
    path: "/",
    sameSite: "none",
    domain:".maisonlila.shop",
    maxAge: 259200000,
  });
  res.status(200).send({
    role: manager.role,
    name: manager.name,
    email: manager.email,
    accessToken: token,
  });
};

export const Token = async (req: Request, res: Response) => {
  const { token } = req.cookies;
  console.log(token, "cookies from token route");
  if (!token) {
    return res.status(401).send("token is missing");
  }
  jwt.verify(
    token,
    process.env.REFRESH_TOKEN as string,
    async (err: any, user: any) => {
      if (err) {
        return res.status(403).send(err);
      }
      const newAccessToken = await generateToken(user);
      const newRefreshToken = await generateRefreshToken(user);
      res.cookie("token", newRefreshToken, {
        httpOnly: true,
        secure: true,
        path: "/",
        domain:".maisonlila.shop",
        sameSite: "none",
        maxAge: 259200000,
      });
      res.send({ accessToken: newAccessToken });
    }
  );
};

export const LogOut = async (req: Request, res: Response) => {
  res.clearCookie("token");
  res.send("Logged out successfully");
};
export const getAdmins = async (req: Request, res: Response) => {
  const users = await prismadb.user.findMany({
    where: {
      role: "ADMIN",
    },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
    },
  });
  res.status(200).send(users);
};
export const getUsers = async (req: Request, res: Response) => {
  const user = await prismadb.user.findMany({
    where: {
      role: "USER",
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });
  res.status(200).send(user);
};

export const removeAdmin = async (req: Request, res: Response) => {
  const { id } = req.params;
  const admin = await prismadb.user.delete({
    where: {
      id: id,
    },
  });
  res.status(200).send(`${admin?.name} deleted`);
};
export const addAdmin = async (req: Request, res: Response) => {
  const { id } = req.params;
  const newAdmin = await prismadb.user.update({
    where: {
      id: id,
      role: "USER",
    },
    data: {
      role: "ADMIN",
    },
  });
  res.status(200).send(`${newAdmin.name} added to admins`);
};
