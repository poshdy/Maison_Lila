"use client";
import { ContextI } from "@/types";
import { AdminStore } from "@/zustand/use-admin-store";
import axios from "axios";

import { useRouter } from "next/navigation";

import React, { createContext, useContext } from "react";

const Context = createContext<ContextI>({
  logIn: async () => {},
  logOut: async () => {},
});
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setAdmin } = AdminStore();

  const router = useRouter();

  const logIn = async (email: string, password: string) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/manager/login`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    setAdmin(response.data);
    router.push("/");
  };
  const logOut = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/manager/log-out`);
  };

  const value = {
    logIn,
    logOut,
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
