"use client";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./action";
import { CategoryColumn } from "@/types";
import { Badge } from "@/components/ui/badge";
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
    header: "name",
    cell: ({ row }) => {
      return (
        <Badge className="bg-fuchsia-600 font-bold">
          {String(row.original.subCategory)}
        </Badge>
      );
    },
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
