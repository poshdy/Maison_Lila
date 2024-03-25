import { Request, Response } from "express";
import {
  AddAdmin,
  GetUsers,
  ManagerLogin,
  RemoveAdmin,
} from "../services/authentication/index.js";

export const OnManagerLogin = async (req: Request, res: Response) => {
  const data = req.body;
  const { manager, token, refreshtoken } = await ManagerLogin(data);
  res.cookie("token", refreshtoken, {
    httpOnly: true,
    // secure: true,
    // path: "/",
    // domain: ".maisonlila.shop",
    // sameSite: "none",
    maxAge: 259200000,
  });
  res.status(201).send({
    message: "Logged In Successfully",
    data: {
      id: manager.id,
      name: manager.name,
      email: manager.email,
      accessToken: token,
    },
  });
};

export const OnGetAdmins = async (req: Request, res: Response) => {
  const data = await GetUsers("ADMIN");
  res.status(200).send({
    data,
  });
};
export const OnGetUsers = async (req: Request, res: Response) => {
  const data = await GetUsers("USER");

  res.status(200).send({
    data,
  });
};

export const OnRemoveAdmin = async (req: Request, res: Response) => {
  const { id } = req.params;
  await RemoveAdmin(id);
  res.status(200).send(`Admin deleted`);
};
export const OnCreateAdmin = async (req: Request, res: Response) => {
  const { id } = req.params;
  await AddAdmin(id);
  res.status(200).send(`Admin Created`);
};
