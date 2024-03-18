import {
  Create,
  Delete,
  Find,
  FindById,
  Update,
} from "../../model/zone/index.js";
import { Query } from "../../../types.js";
import { ZoneSchema } from "../../validation/Schemas.js";

export const CreateZone = async (data) => {
  const { error, value } = ZoneSchema.validate(data);
  if (error) {
    throw error;
  }
  return await Create(value);
};

export const FindZones = async () => {
  return await Find();
};
export const FindZone = async (id: string) => {
  return await FindById(id);
};
export const UpdateZone = async (id: string, data) => {
  return await Update(id, data);
};
export const DeleteZone = async (id: string) => {
  return await Delete(id);
};
