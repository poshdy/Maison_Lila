import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";

import { ExtractId } from "../helpers/ExtractId.js";
import {
  CreateAddress,
  DeleteAddress,
  GetAddresses,
  UpdateAddress,
} from "../services/address/index.js";

export const OnCreateAddress = async (req: Request, res: Response) => {
  const data = req.body;
  const address = await CreateAddress(data);
  res.status(201).send({
    message: "Address Created Successfully",
    address,
  });
};
export const OnGetAddresses = async (req: Request, res: Response) => {
  const userId = await req.params;
  const data = await GetAddresses(userId);
  res.status(201).send({
    message: "Address Created Successfully",
    data,
  });
};

export const OnUpdateAddress = async (req: Request, res: Response) => {
  const id = await ExtractId(req);
  const data = req.body;
  await UpdateAddress(id, data);
  res.status(201).send({
    message: "Address Created Successfully",
  });
};
export const OnDeleteAddress = async (req: Request, res: Response) => {
  const id = await ExtractId(req);
  await DeleteAddress(id);
  res.status(201).send({
    message: "Address Created Successfully",
  });
};

export const getUserAddress = async (req: Request, res: Response) => {
  const { id } = req.params;
  const Address = await prismadb.address.findMany({
    where: {
      userId: id,
    },
  });
  res.status(200).send(Address);
};
