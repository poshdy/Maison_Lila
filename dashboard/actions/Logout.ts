import { BASE_URL } from "@/constants";
import axios from "axios";

export const LogOut = async () => {
  try {
    const res = await axios.post(
      `${BASE_URL}/manager/log-out`,
      {},
      { withCredentials: true }
    );
    return res.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
