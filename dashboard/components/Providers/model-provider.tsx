"use client";
import { useEffect, useState } from "react";
import RestockModel from "../models/RestockModel";

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
      <RestockModel />
    </>
  );
};
