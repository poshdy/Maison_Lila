"use client";
import { useUser } from "@/zustand/user-store";
import Link from "next/link";
import React from "react";

const FooterAccount = () => {
  const { user } = useUser();
  const herf = user ? `/account/${user?.id}` : "/Login";
  return (
    <div className="flex flex-col text-gray-400">
      <Link href={herf}>Account</Link>
      <Link href={"Login"}>Login</Link>
      <Link href={"Register"}>Register</Link>
    </div>
  );
};

export default FooterAccount;
