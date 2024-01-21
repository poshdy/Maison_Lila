"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,

  DialogFooter,
} from "@/components/ui/dialog";

import { useNoticationModel } from "@/zustand/notification-store";

export const Notification = () => {
  const proModal = useNoticationModel();

  return (
    <Dialog  open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="flex flex-col items-center gap-2">
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold text-xl">
              {proModal.title}
            </div>
          </DialogTitle>
      
        </DialogHeader>
        <section>
          <p>{proModal.message}</p>
        </section>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
