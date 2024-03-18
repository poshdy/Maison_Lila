"use client";
import { AdminStore } from "@/zustand/use-admin-store";
import React, { useEffect, useState } from "react";
const Greeting = () => {
  const { name } = AdminStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <p className="tracking-tighter leading-tight">Welcome Back, {name}!</p>
    </div>
  );
};

export default Greeting;
