"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./actions";
import { SubCatColumn } from "@/types";
import { Badge } from "@/components/ui/badge";
export const columns: ColumnDef<SubCatColumn>[] = [
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "parent",
    header: "main-category",
    cell: ({ row }) => {
      return (
        <Badge className="bg-fuchsia-600 font-bold">
          {String(row.original.parent)}
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
