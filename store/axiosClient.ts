import axios from "axios";
import { useUser } from "./zustand/user-store";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import { BASE_URL } from "./constants";

let token = useUser.getState().user?.accessToken;
export const Client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { Authorization: `Bearer ${token}` },
});

Client.interceptors.request.use(async (req) => {
  if (!token) {
    token = useUser.getState().user?.accessToken;
    req.headers.Authorization = `Bearer ${token}`;
  }
  const admin = jwtDecode(token as string);
  const isEx = dayjs.unix(admin.exp as number).diff(dayjs()) < 1;
  if (!isEx) return req;
  const res = await axios.get(`${BASE_URL}/manager/token`, {
    withCredentials: true,
  });
  useUser.getState().updateAccessToken(res.data.accessToken);

  req.headers.Authorization = `Bearer ${res.data.accessToken}`;
  return req;
});
