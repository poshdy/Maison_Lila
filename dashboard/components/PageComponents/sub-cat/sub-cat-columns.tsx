"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./actions";
import { CategoryColumn } from "@/types";
import { Badge } from "@/components/ui/badge";
export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "parent",
    header: "main-category",
    cell: ({ row }) => {
      const parent = row?.original?.subCategory;
      return <Badge className="bg-fuchsia-600 font-bold">{parent}</Badge>;
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
