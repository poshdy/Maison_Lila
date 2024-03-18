"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CouponStats } from "@/types";

export const columns: ColumnDef<CouponStats>[] = [
  {
    accessorKey: "couponCode",
    header: "name",
  },

  {
    accessorKey: "email",
    header: "user-email",
  },
  // {
  //   accessorKey: "createdAt",
  //   header: "Date",
  // },
];
