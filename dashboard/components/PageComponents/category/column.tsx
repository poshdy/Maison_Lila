"use client";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./action";
import { CategoryColumn } from "@/types";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => {
      const url = row.original.imageUrl;

      return <Image alt="icon" width={30} height={30} src={url} />;
    },
  },
  {
    accessorKey: "name",
    header: "name",
  },

  {
    accessorKey: "subCategory",
    header: "sub-category",
    cell: ({ row }) => {
      const value = row.original.Category.map((cat) => cat.name);
      return (
        <div>
          {value.length > 0 ? value.map((cat) => <Badge>{cat}</Badge>) : <X />}
        </div>
      );
    },
  },
  {
    accessorKey: "products",
    header: "products",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
