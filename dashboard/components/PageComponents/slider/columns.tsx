"use client";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./actions";
import { SliderColumn } from "@/types";
import { Check, X } from "lucide-react";

export const columns: ColumnDef<SliderColumn>[] = [
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "published",
    header: "published",
    cell: ({ row }) => {
      const value = row.original.published;
      return <h3>{value ? <Check /> : <X />}</h3>;
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
