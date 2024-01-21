"use client";
import { useState } from "react";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";
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
import { ProductColmun } from "@/types";
import { onConfirm, onCopy } from "@/actions/shared";
import { ProductAttributes, Restock } from "@/actions/product";

interface CellActionProps {
  data: ProductColmun;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() =>
          onConfirm(data.id, "/product", setLoading, setOpen, router)
        }
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"action"} className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.id, "product")}>
            <Copy className="mr-2 h-4 w-4" /> Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`/products/${data.id}`)}>
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={async () =>
              await ProductAttributes(data.id, "bestSeller", router)
            }
          >
            <Edit className="mr-2 h-4 w-4" /> bestSeller
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={async () =>
              await ProductAttributes(data.id, "newArriaval", router)
            }
          >
            <Edit className="mr-2 h-4 w-4" /> new Arrival
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={async () => await Restock(data.id, router)}
          >
            <Edit className="mr-2 h-4 w-4" /> Restock
          </DropdownMenuItem>
          {/* <DropdownMenuItem
            onClick={async () => await onOpen}
          >
            <Edit className="mr-2 h-4 w-4" /> add SubCategory
          </DropdownMenuItem> */}

          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
