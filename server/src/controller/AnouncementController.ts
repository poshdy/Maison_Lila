import { Request, Response } from "express";

import {
  CreateAnoun,
  DeleteAnoun,
  FindAnouncements,
  FindOneAnouncement,
  UpdateAnoun,
} from "../services/anouncement/index.js";

export const OnCreateAnouncement = async (req: Request, res: Response) => {
  const data = req.body;
  await CreateAnoun(data);
  res.status(201).send({ message: "Anouncement Created Successfully" });
};

export const OnGetAnouncement = async (req: Request, res: Response) => {
  const data = await FindAnouncements(req);
  res.status(200).send({
    data,
  });
};

export const OnGetOneAnouncement = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await FindOneAnouncement(id);
  res.status(200).send({
    data,
  });
};
export const OnUpdateAnouncement = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  await UpdateAnoun(id, data);
  res.status(201).send(`Anouncement Updated Successfully`);
};
export const OnDeleteAnouncement = async (req: Request, res: Response) => {
  const { id } = req.params;
  await DeleteAnoun(id);
  res.status(200).send("Anoun deleted Successfully");
};
