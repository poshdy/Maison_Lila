"use client";
import { AdminStore } from "@/zustand/use-admin-store";
import { Contact, SettingsIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "@/constants";
import { useRouter } from "next/navigation";
const Nav = () => {
  const { role } = AdminStore();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const LogOut = async () => {
    try {
      await axios.post(
        `${BASE_URL}/manager/log-out`,
        {},
        { withCredentials: true }
      );
      toast.success("Logged Out Successfully");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <Badge>{role}</Badge>
      <Link href={"/settings"}>
        <SettingsIcon className="w-6 h-6 hover:scale-105 transition-all duration-100 ease-in-out" />
      </Link>
      <Link href={"/contact"}>
        <Contact className="w-6 h-6 hover:scale-105 transition-all duration-100 ease-in-out" />
      </Link>
      <Badge onClick={LogOut}>Logout</Badge>
    </div>
  );
};

export default Nav;
