"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./actions";
import { ZoneColumn } from "@/types";



export const columns: ColumnDef<ZoneColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "fees",
    header: "fees",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
