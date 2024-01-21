"use client";
import { AdminStore } from "@/zustand/use-admin-store";
import React, { useEffect, useState } from "react";

type Props = {};

const Greeting = (props: Props) => {
  const { name, role } = AdminStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <h2 className="font-medium text-2xl tracking-tighter leading-tight">
        Hello {name},
      </h2>
    </div>
  );
};

export default Greeting;
