"use client";
import { useState } from "react";
import {
  ArrowDownToDot,
  ArrowUpFromDotIcon,
  Copy,
  Edit,
  MoreHorizontal,
  Trash,
  UserPlus,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { AlertModal } from "@/components/models/alert-model";
import { BannerColumn } from "@/types";
import { Publish, changePosition, onConfirm, onCopy } from "@/actions/shared";

interface CellActionProps {
  data: BannerColumn;
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
          onConfirm(data.id, "/banner", setLoading, setOpen, router)
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
          <DropdownMenuItem onClick={() => onCopy(data.id, "Banner")}>
            <Copy className="mr-2 h-4 w-4" /> Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`/banners/${data.id}`)}>
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={async () =>
              await Publish(data.id, "/banner/publish", "banner", router)
            }
          >
            <Edit className="mr-2 h-4 w-4" />{" "}
            {data.published == true ? "UnPublish banner" : "Publish banner"}
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Change Position</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  onClick={() =>
                    changePosition(
                      data.id,
                      "/banner/change-position",
                      "TOP",
                      router
                    )
                  }
                >
                  <ArrowUpFromDotIcon className="w-5 h-5 px-1" />
                  <span>Top</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    changePosition(
                      data.id,
                      "/banner/change-position",
                      "BOTTOM",
                      router
                    )
                  }
                >
                  <ArrowDownToDot className="w-5 h-5 px-1" />
                  <span>Bottom</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
