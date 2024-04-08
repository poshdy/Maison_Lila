"use client";
import { Check } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useNoticationModel } from "@/zustand/notification-store";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const SuccessfullModal = () => {
  const { push } = useRouter();
  const { isOpen, message, title, Close } = useNoticationModel();

  return (
    <Dialog onOpenChange={Close} open={isOpen}>
      <DialogContent className="">
        <DialogTitle className="text-xl space-y-3 font-semibold flex flex-col items-center justify-center leading-6 text-gray-900">
          <Check className="text-green-600 p-1 bg-green-400 bg-opacity-50 rounded-full  text-lg" />
          <h2>{title}</h2>  
        </DialogTitle>
        <div className="px-4 w-full py-3 space-y-3 flex flex-col sm:px-6">
          <p className="text-center">{message}</p>
          <Button
            variant="action"
            onClick={() => {
              Close();
              push("/shop");
            }}
            className="w-full  text-white justify-center rounded-md bg-main px-3 py-2"
          >
            Go Shopping Now!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
