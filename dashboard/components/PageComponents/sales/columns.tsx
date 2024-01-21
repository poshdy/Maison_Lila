"use client";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";

import { SalesColumn } from "@/types";

export const columns: ColumnDef<SalesColumn>[] = [
  {
    accessorKey: "productImage",
    header: "Image",
    cell: ({ row }) => {
      const url: any = row.getValue("productImage");
      return (
        <>
          {url?.slice(0, 1).map((i: any) => (
            <Image key={i.id} src={i.url} width={30} height={30} alt="mess" />
          ))}
        </>
      );
    },
  },
  {
    accessorKey: "productName",
    header: "Name",
  },

  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "quantitySold",
    header: "Quantity Sold",
  },
  {
    accessorKey: "Revenue",
    header: "Revenue",
  },

  {
    accessorKey: "createdAt",
    header: "Date",
  },
];
