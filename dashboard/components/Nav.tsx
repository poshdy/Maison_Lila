"use client";
import { AdminStore } from "@/zustand/use-admin-store";
import { Contact, SettingsIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type Props = {};

const Nav = (props: Props) => {
  const { name, role } = AdminStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      {/* <h3>{name}</h3> */}
      <Badge>{role}</Badge>
      <Link href={"/settings"}>
        <SettingsIcon className="w-6 h-6 hover:scale-105 transition-all duration-100 ease-in-out" />
      </Link>
      <Link href={"/contact"}>
        <Contact className="w-6 h-6 hover:scale-105 transition-all duration-100 ease-in-out" />
      </Link>
    </div>
  );
};

export default Nav;
