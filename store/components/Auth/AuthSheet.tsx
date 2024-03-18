"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetHeader,
} from "@/components/ui/sheet";
import { User2 } from "lucide-react";

import { Button } from "../ui/button";
import AuthTabs from "./AuthTabs";
import { useUser } from "@/zustand/user-store";
import Link from "next/link";
import { useCart } from "@/zustand/cart-store";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "@/constants";

type Props = {};

const AuthSheet = (props: Props) => {
  const router = useRouter();
  const { user, LogOut } = useUser();
  const { removeAll } = useCart();

  const logOut = async () => {
    await axios.post(`${BASE_URL}/auth/logOut`, null, {
      withCredentials: true,
    });
    removeAll();
    LogOut();
    router.push("/");
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <User2 className="cursor-pointer w-6 h-6 text-white" />
      </SheetTrigger>
      <SheetContent className="h-full w-[90%] space-y-4 flex flex-col justify-between">
        <section className="space-y-3">
          <SheetHeader>
            <SheetTitle>Account</SheetTitle>
          </SheetHeader>
          {user ? (
            <div className="w-full flex flex-col items-center gap-3">
              <Link href={`account`}>Orders</Link>
              <Button onClick={logOut}>Log out</Button>
            </div>
          ) : (
            <AuthTabs />
          )}
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default AuthSheet;
