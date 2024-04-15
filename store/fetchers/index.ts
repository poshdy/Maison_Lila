"use server";
import { Server } from "@/axiosServer";

export const getData = async (url: string) => {
  try {
    const response = await Server.get(`/${url}`);
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const getDataById = async (url: string, id: string) => {
  try {
    const response = await Server.get(`/${url}/${id}`);
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const Search = async (formData: FormData) => {
  "use server";
  const name = formData.get("name");
  const data = await getData(`product/search?name=${name}`);
  return data;
};
