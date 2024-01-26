import axios from "axios";
import { BASE_URL } from "./constants";
export const Server = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
