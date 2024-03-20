import { Request, Response } from "express";
import {
  CreateUser,
  LoginUser,
  RefreshToken,
} from "../services/authentication/index.js";
import { getAuthHeader } from "../services/authServices.js";
import { ExtractCookie } from "../helpers/authentication.js";

export const OnCreateUser = async (req: Request, res: Response) => {
  const data = req.body;
  const { newUser, refreshtoken, token } = await CreateUser(data);
  res.cookie("token", refreshtoken, {
    httpOnly: true,
    secure: true,
    path: "/",
    domain: ".maisonlila.shop",
    sameSite: "none",
    maxAge: 259200000,
  });
  res.status(201).send({
    message: "Account Created Successfully",
    data: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      accessToken: token,
    },
  });
};
export const OnLoginUser = async (req: Request, res: Response) => {
  const data = req.body;
  const { user, token, refreshtoken } = await LoginUser(data);
  res.cookie("token", refreshtoken, {
    httpOnly: true,
    secure: true,
    path: "/",
    domain: ".maisonlila.shop",
    sameSite: "none",
    maxAge: 259200000,
  });
  res.status(201).send({
    message: "Logged In Successfully",
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      accessToken: token,
    },
  });
};

export const OnRefreshToken = async (req: Request, res: Response) => {
  const token = await ExtractCookie(req);
  const data = await RefreshToken(token);
  res.cookie("token", data.newRefreshToken, {
    httpOnly: true,
    secure: true,
    path: "/",
    domain: ".maisonlila.shop",
    sameSite: "none",
    maxAge: 259200000,
  });
  res.status(200).send({ accessToken: data.newAccessToken });
};

export const OnLogOut = async (req: Request, res: Response) => {
  res.clearCookie("token");
  res.status(200).send("Logged Out Successfully");
};

// export const getUser = async (req: Request, res: Response) => {
//   const user = await GetUser(req);
//   res.status(200).send(user);
// };
// export const getUserAddress = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const userAddress = await prismadb.address.findMany({
//     where: {
//       User: { id: id },
//     },
//   });
//   res.status(200).send(userAddress);
// };
