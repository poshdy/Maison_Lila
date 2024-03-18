"use client";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./actions";
import { AnounColumn } from "@/types";
import { Check, X } from "lucide-react";
export const columns: ColumnDef<AnounColumn>[] = [
  {
    accessorKey: "text",
    header: "Text",
  },
  {
    accessorKey: "published",
    header: "Published",
    cell: ({ row }) => {
      const value = row.original.published;

      return <h2>{value ? <Check /> : <X />}</h2>;
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
