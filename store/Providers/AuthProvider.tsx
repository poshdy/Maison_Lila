"use client";
import { ContextI } from "@/types";
import { useUser } from "@/zustand/user-store";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useContext } from "react";

const Context = createContext<ContextI>({
  logIn: async () => {},
  logOut: async () => {},
  createAccount: async () => {},
});
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { SetUser } = useUser();

  const router = useRouter();

  const logIn = async (data: { email: string; password: string }) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
      data,
      { withCredentials: true }
    );
    SetUser(response.data);
    router.push("/");
  };
  const createAccount = async (data: {
    email: string;
    name: string;
    password: string;
  }) => {
    const response = await axios.post(
      `http://localhost:8000/auth/sign-up`,
      data,
      { withCredentials: true }
    );
    console.log(response.request);
    SetUser(response.data);
    router.push("/");
  };
  const logOut = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/log-out`);
  };

  const value = {
    logIn,
    logOut,
    createAccount,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useAuth = () => {
  let context = useContext(Context);
  if (context === undefined) {
    throw new Error("useAuth must be used inside Auth Provider");
  } else {
    return context;
  }
};
