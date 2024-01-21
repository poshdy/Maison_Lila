import { Server } from "@/axiosServer";

export const getData = async (url: string) => {
  try {
    const response = await Server.get(`/${url}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const getDataById = async (url: string, id: string) => {
  try {
    const response = await Server.get(`/${url}/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
