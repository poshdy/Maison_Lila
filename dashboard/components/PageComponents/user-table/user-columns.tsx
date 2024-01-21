"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./user-actions";
import { AdminsColumn } from "@/types";

export const UserColumns: ColumnDef<AdminsColumn>[] = [
  {
    accessorKey: "email",
    header: "email",
  },
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "role",
    header: "role",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
