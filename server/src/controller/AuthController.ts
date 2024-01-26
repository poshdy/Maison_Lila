import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import {
  CheckEmail,
  CreateUserInDb,
  GetUser,
  IsTheSame,
  encryptPassword,
  generateRefreshToken,
  generateToken,
} from "../services/authServices.js";
import jwt from "jsonwebtoken";
import { AuthSchema } from "../validation/Schemas.js";
import { EmailEvent } from "../pub/mails.js";
let refreshtokens: string[] = [];

export const createUser = async (req: Request, res: Response) => {
  const { error, value } = AuthSchema.validate(req.body);
  if (error) {
    throw error;
  }
  const user = await CheckEmail(value.email);
  if (user) {
    return res.status(400).send("this email is already exist try a new one");
  }
  const hashedPass = await encryptPassword(value.password);

  const newUser = await CreateUserInDb(value.email, hashedPass, value.name);

  const token = await generateToken(newUser);
  const refreshtoken = await generateRefreshToken(newUser);
  EmailEvent.emit("user-creation", newUser);
  res.cookie("token", refreshtoken, {
    httpOnly: true,
    // sameSite: "none",
    maxAge: 259200000,
  });
  res.status(200).send({
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    accessToken: token,
  });
};

export const Login = async (req: Request, res: Response) => {
  const user = await prismadb.user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (!user) {
    return res.status(400).send("this Email doesn't exist");
  }

  const valid = await IsTheSame(user.hashedPassword, req.body.password);

  if (!valid) {
    return res.status(401).send("Invalid Password");
  }
  const token = await generateToken(user);
  const refreshtoken = await generateRefreshToken(user);

  res.cookie("token", refreshtoken, {
    httpOnly: true,
    secure: true,
    path: "/",
    domain:".maisonlila.shop",
    sameSite: "none",
    maxAge: 259200000,
  });
  res.status(200).send({
    id: user.id,
    name: user.name,
    email: user.email,
    accessToken: token,
  });
};
export const Token = async (req: Request, res: Response) => {
  const { token } = req.cookies;

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

      refreshtokens.push(token);
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

export const getUser = async (req: Request, res: Response) => {
  const user = await GetUser(req);
  res.status(200).send(user);
};
export const getUserAddress = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userAddress = await prismadb.address.findMany({
    where: {
      User: { id: id },
    },
  });
  res.status(200).send(userAddress);
};
export const LogOut = async (req: Request, res: Response) => {
  res.clearCookie("token");
  res.send("Logged out successfully");
};
