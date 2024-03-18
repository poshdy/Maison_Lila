"use client";
import { Heart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { useNoticationModel } from "@/zustand/notification-store";
import Text from "../Shared/Text";
import Heading from "../Shared/Heading";
import Link from "next/link";
import ActionButton from "../Shared/NavigationButton";

export const SuccessfullModal = () => {
  const { isOpen, message, title, Close } = useNoticationModel();

  return (
    <Dialog open={isOpen} onOpenChange={Close}>
      <DialogContent className="flex flex-col items-center justify-center h-64 space-y-4">
        <div>
          <DialogHeader>
            <DialogTitle className="">
              <Heading size="text-2xl font-semibold" title={title} />
            </DialogTitle>
          </DialogHeader>

          <Text text={message} size="text-sm text-center" />
        </div>

        <DialogFooter onClick={() => Close()}>
          <ActionButton action="shop" title="Start Shopping Now!" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
