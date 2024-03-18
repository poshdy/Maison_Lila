"use client";
import { Contact, SettingsIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "@/actions/Logout";
const Nav = () => {
  const router = useRouter();
  const OnLogOut = async () => {
    try {
      await LogOut();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-end space-x-2">
      <Link href={"/settings"}>
        <SettingsIcon className="w-6 h-6" />
      </Link>
      <Link href={"/contact"}>
        <Contact className="w-6 h-6" />
      </Link>
      <Button
        className="border-[2px] rounded-full hover:bg-transparent text-main border-main bg-transparent"
        onClick={OnLogOut}
      >
        Logout
      </Button>
    </div>
  );
};

export default Nav;
