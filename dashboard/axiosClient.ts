import axios from "axios";
import { AdminStore } from "./zustand/use-admin-store";
import { jwtDecode, JwtPayload } from "jwt-decode";
import dayjs, { unix } from "dayjs";
import { BASE_URL } from "./constants";

let token = AdminStore.getState().accessToken;
console.log(token);
console.log(AdminStore.getState().accessToken);
export const Client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { Authorization: `Bearer ${token}` },
});

Client.interceptors.request.use(async (req) => {
  if (!token) {
    token = AdminStore.getState().accessToken;
    req.headers.Authorization = `Bearer ${token}`;
  }
  const admin = jwtDecode(token as string);
  const isEx = dayjs.unix(admin.exp as number).diff(dayjs()) < 1;
  if (!isEx) return req;
  const res = await axios.get(`${BASE_URL}/manager/token`, {
    withCredentials: true,
  });
  AdminStore.getState().updateAccessToken(res.data.accessToken);
  req.headers.Authorization = `Bearer ${res.data.accessToken}`;
  return req;
});
