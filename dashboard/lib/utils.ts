import { BASE_URL } from "@/constants";
import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { cookies } from "next/headers";
import { twMerge } from "tailwind-merge";
import { jwtDecode } from "jwt-decode";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}





// axiosJwt.interceptors.request.use(
//   (config) => {
//     const token = cookies().get("jwt")?.value;
//     // get access token from lc or cookie,

//     // put it in the config headers
//     config.headers.Authorization = "Barer " + token;
//     return config;
//   },
//   (err) => {
//     console.log(err);
//   }
// );


