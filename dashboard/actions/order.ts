import { Client } from "@/axiosClient";
import { Server } from "@/axiosInstanceServer";

export const orders = async () => {
  try {
    const res = await Server.get(`/order/count`);
    return res.data
  } catch (error: any) {
    console.log(error.message);
  }
};
