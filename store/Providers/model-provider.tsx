"use client";
import { useEffect, useState } from "react";
import { SuccessfullModal } from "@/components/models/notifaction-model";
import ErrorModal from "@/components/models/error-model";

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
      <ErrorModal />
      <SuccessfullModal />
    </>
  );
};
