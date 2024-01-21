import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import {
  CreateAnoun,
  DeleteAnoun,
  PublishAnoun,
  UpdateAnoun,
} from "../services/anouncementService.js";

export const addAnouncement = async (req: Request, res: Response) => {
  const anoun = await CreateAnoun(req);
  res.status(201).send("Anouncement created Successfully");
};
export const getAnouncements = async (req: Request, res: Response) => {
  const anouncement = await prismadb.anouncement.findMany();
  res.status(200).send(anouncement);
};
export const getPublishedAnoun = async (req: Request, res: Response) => {
  const anouncement = await prismadb.anouncement.findFirst({
    where: {
      published: true,
    },
  });
  res.status(200).send(anouncement);
};
export const getAnouncement = async (req: Request, res: Response) => {
  const { id } = req.params;
  const anouncement = await prismadb.anouncement.findUnique({
    where: {
      id,
    },
  });
  res.status(200).send(anouncement);
};
export const updateAnouncement = async (req: Request, res: Response) => {
  const anoun = UpdateAnoun(req);
  res.status(201).send(`Anouncement Updated Successfully`);
};
export const deleteAnouncement = async (req: Request, res: Response) => {
  const anoun = await DeleteAnoun(req);
  res.status(200).send("Anoun deleted Successfully");
};
export const PublishAnouncement = async (req: Request, res: Response) => {
  const anoun = PublishAnoun(req);
  res.status(200).send("Anouncement Published Successfully");
};
