"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./action";
import { CouponColumn } from "@/types";

export const columns: ColumnDef<CouponColumn>[] = [
  {
    accessorKey: "name",
    header: "name",
  },

  {
    accessorKey: "valid",
    header: "valid",
  },
  {
    accessorKey: "amount",
    header: "amount",
  },
  {
    accessorKey: "minimum",
    header: "Minimum-order-value",
  },
  {
    accessorKey: "countUsed",
    header: "countUsed",
  },
  {
    accessorKey: "maxUsage",
    header: "maxUsage",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "expiration",
    header: "expiration",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
