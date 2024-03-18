"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./actions";
import { OrderColumn } from "@/types";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { DollarSign, CreditCard } from "lucide-react";

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "email",
    header: "email",
  },

  {
    accessorKey: "paymentMethod",
    header: "payment-method",
    cell: ({ row }) => {
      let method = row.getValue("paymentMethod");
      return <div>{method == "CASH" ? "Cash On Delivery" : "Paid Online"}</div>;
    },
  },
  {
    accessorKey: "zone",
    header: "zone",
  },
  {
    accessorKey: "total",
    header: "order-total",
  },
  {
    accessorKey: "status",
    header: "status",
    cell: ({ row }) => {
      const status = row.original.orderStatus;

      return <Badge>{status}</Badge>;
    },
  },
  {
    accessorKey: "id",
    header: "order-details",
    cell: ({ row }) => {
      return <Link href={`/orders/${row.original.id}`}>View Details</Link>;
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
