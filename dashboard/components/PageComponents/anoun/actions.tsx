"use client";
import { useState } from "react";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlertModal } from "@/components/models/alert-model";

import { AnounColumn } from "@/types";
import { Client } from "@/axiosClient";
import { tr } from "date-fns/locale";

interface CellActionProps {
  data: AnounColumn;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const PublishAnoun = async (id: string) => {
    try {
      const res = await Client.patch(`/anoun/${id}`, {
        published: !data.published,
      });
      toast.success(`Anouncement Updated`);
      router.refresh();
      return res.data;
    } catch (err: any) {
      console.log(err.message);
    }
  };
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onConfirm = async () => {
    try {
      setLoading(true);
      const re = await Client.delete(`/anoun/${data.id}`);
      toast.success(`${re.statusText}`);
      router.refresh();
    } catch (error: any) {
      toast.error(`SomeThing went Wrong ${error.message}`);
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Anoun ID copied to clipboard.");
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"action"} className="h-8 w-8 p-0 text-white">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.id)}>
            <Copy className="mr-2 h-4 w-4" /> Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem onClick={async () => await PublishAnoun(data.id)}>
            <Edit className="mr-2 h-4 w-4" />{" "}
            {data.published == true ? "UnPublish" : "Publish"}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push(`/anouncements/${data.id}`)}
          >
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
