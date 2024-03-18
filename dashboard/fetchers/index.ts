import { Server } from "@/axiosInstanceServer";

export const getData = async (url:string) => {
  try {
    const res = await Server.get(`${url}`);
    return res.data.data;
  } catch (error:any) {
    console.log(error.message);
  }
};
export const getDataById = async (url:string,id: string) => {
  try {
    const res = await Server.get(`${url}/${id}`);
    return res.data.data;
  } catch (error:any) {
    console.log(error.message);
  }
};
