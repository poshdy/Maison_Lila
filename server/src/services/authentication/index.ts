import {
  CheckEmail,
  ComparePassword,
  EncryptPassword,
  generateRefreshToken,
  generateToken,
  verifyToken,
} from "../../helpers/authentication.js";
import {
  Create,
  CreateAdmin,
  DeleteAdmin,
  FindByEmail,
  FindByRole,
  FindManager,
} from "../../model/Auth/index.js";
import { AppError } from "../../utils/AppError.js";
import { AuthSchema } from "../../validation/Schemas.js";

export const CreateUser = async (data) => {
  const { error, value } = AuthSchema.validate(data);
  if (error) {
    throw error;
  }
  const user = await CheckEmail(value.email);
  if (user) {
    throw new AppError("This Email Already Exist", "This Email Already Exist", 400);
  }
  const hashedPassword = await EncryptPassword(value.password);

  const newUser = await Create(hashedPassword, value.email, value.name);
  const token = await generateToken(newUser);
  const refreshtoken = await generateRefreshToken(newUser);
  // EmailEvent.emit("user-creation", newUser);
  return {
    newUser,
    token,
    refreshtoken,
  };
};
export const LoginUser = async (data) => {
  const user = await FindByEmail(data.email);
  if (!user) {
    throw new AppError("this email does not exists", "not found", 400);
  }
  const validPassword = await ComparePassword(
    user.hashedPassword,
    data.password
  );
  if (!validPassword) {
    throw new AppError("password does not match", "In Valid Password", 400);
  }

  const token = await generateToken(user);
  const refreshtoken = await generateRefreshToken(user);

  return {
    user,
    token,
    refreshtoken,
  };
};

export const RefreshToken = async (token: string) => {
  return await verifyToken(token);
};

export const ManagerLogin = async (data) => {
  const manager = await FindManager(data.email);
  if (!manager) {
    throw new AppError("this email does not exists", "not found", 400);
  }
  const validPassword = await ComparePassword(
    manager.hashedPassword,
    data.password
  );
  if (!validPassword) {
    throw new AppError("password does not match", "In Valid Password", 400);
  }

  const token = await generateToken(manager);
  const refreshtoken = await generateRefreshToken(manager);

  return {
    manager,
    token,
    refreshtoken,
  };
};

export const AddAdmin = async (id: string) => {
  return await CreateAdmin(id);
};

export const RemoveAdmin = async (id: string) => {
  return await DeleteAdmin(id);
};

export const GetUsers = async (role) => {
  return await FindByRole(role);
};
