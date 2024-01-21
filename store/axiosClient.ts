import axios from "axios";
import { useUser } from "./zustand/user-store";
import { jwtDecode } from "jwt-decode";
import dayjs, { unix } from "dayjs";
export const Client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

Client.interceptors.request.use(
  async (req) => {
    const token = useUser.getState().user?.accessToken;
    req.headers.Authorization = `Bearer ${token}`;
    const admin = jwtDecode(token as string);
    const IsEx = unix(admin.exp as number).diff(dayjs()) < 1;
    if (!IsEx) {
      return req;
    }
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/token`,
        {
          withCredentials: true,
        }
      );
      useUser.getState().updateAccessToken(res.data.accessToken);

      console.log("after refresh", res.data);
    } catch (error: any) {
      console.log(error.message);
    }
    return req;
  },
  function (error: any) {
    console.log(error);
  }
);