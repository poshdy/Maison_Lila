"use client";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./actions";
import { ProductColmun } from "@/types";
import { formattedPrice } from "@/actions/shared";
import { Badge } from "@/components/ui/badge";
export const columns: ColumnDef<ProductColmun>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const urls = row?.original?.image?.map((i) => i);
      return (
        <>
          {urls?.slice(0, 1).map((i) => (
            <Image key={i.id} src={i.url} width={30} height={30} alt="mess" />
          ))}
        </>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const value = String(row?.original?.category);
      return <Badge className={"font-bold"}>{value}</Badge>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },

  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row?.original} />,
  },
];
