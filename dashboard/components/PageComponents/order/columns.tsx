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
      return (
        <Badge className={method == "CASH" ? "bg-purple-500" : "bg-pink-500"}>
          {method == "CASH" ? (
            <div className="flex items-center gap-1 justify-center">
              <DollarSign className="w-4 h-4" />
              <span>Cash</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 justify-center">
              <CreditCard /> <span>Online</span>
            </div>
          )}
        </Badge>
      );
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

      let className;
      if (status == "PENDING") {
        className = "bg-gray-500 text-white";
      } else if (status == "CONFIRMED") {
        className = " bg-yellow-300/80 text-white";
      } else {
        className = "bg-green-300/80";
      }
      return <Badge className={className}>{status}</Badge>;
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
