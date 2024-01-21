"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./actions";
import { ContactColumn } from "@/types";

export const columns: ColumnDef<ContactColumn>[] = [
  {
    accessorKey: "facebook",
    header: "facebook",
  },

  {
    accessorKey: "tiktok",
    header: "tiktok",
  },
  {
    accessorKey: "phone",
    header: "phone",
  },
  {
    accessorKey: "instagram",
    header: "instagram",
  },

  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
