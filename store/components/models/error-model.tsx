import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { useErrorModel } from "@/zustand/error-store";
import { ErrorIcon } from "react-hot-toast";

const ErrorModal = () => {
  const { title, message, isOpen, Close } = useErrorModel();

  return (
    <Dialog open={isOpen} onOpenChange={Close}>
      <DialogContent className="flex h-[400px] flex-col items-center gap-2">
        <ErrorIcon />
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold text-xl">
              {title}
            </div>
          </DialogTitle>
        </DialogHeader>
        <section>
          <p>{message}</p>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default ErrorModal;
