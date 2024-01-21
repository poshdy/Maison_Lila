"use client";
import { useEffect, useState } from "react";
import { Notification } from "@/components/models/notifaction-model";
import { Auth } from "@/components/models/auth-model";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Notification />
      <Auth />
    </>
  );
};
