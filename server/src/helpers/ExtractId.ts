import { Request } from "express";

export const ExtractId = async (req: Request) => {
  const { id } = req.params;
  return id;
};
