"use client"
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useAlert } from "@/zustand/alert-store";
import { Info, XCircleIcon } from "lucide-react";

type Props = {};

const AlertMessage = (props: Props) => {
  const { title, message, Show } = useAlert();
  return (
    <section className="w-[90%] mx-auto">
      {Show && (
        <Alert className="bg-attention rounded-xl flex items-center h-14 ">
          <XCircleIcon className="w-5 h-5" />
          <div className="flex flex-col items-start ">
            <AlertTitle className="text-lg">{title}</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </div>
        </Alert>
      )}
    </section>
  );
};

export default AlertMessage;
