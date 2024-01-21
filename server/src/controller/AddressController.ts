import { Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";
import {
  CreateAddress,
  DeleteAddress,
  UpdateAddress,
} from "../services/AddressServices.js";

export const addAddress = async (req: Request, res: Response) => {
  const Address = await CreateAddress(req);
  res.status(201).send(Address);
};
export const getAddressById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const Address = await prismadb.address.findUnique({
    where: {
      id,
    },
  });
  res.status(200).send(Address);
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

export const updateAddress = async (req: Request, res: Response) => {
  const Address = UpdateAddress(req);
  res.status(201).send(`Address Updated Successfully`);
};
export const deleteAddress = async (req: Request, res: Response) => {
  const Address = await DeleteAddress(req);
  res.status(200).send("Address deleted Successfully");
};
