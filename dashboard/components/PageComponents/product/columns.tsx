"use client";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./actions";
import { ProductColmun } from "@/types";
import { Badge } from "@/components/ui/badge";
import { formattedPrice } from "@/actions/shared";

export const columns: ColumnDef<ProductColmun>[] = [
  {
    accessorKey: "image",
    header: "Img",
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
    cell: ({ row }) => {
      const name: string = row?.getValue("name");

      return <h3 className="font-bold ">{name}</h3>;
    },
  },

  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const value = String(row?.original?.price);
      return <h3 className={"font-bold"}>{formattedPrice(+value)}</h3>;
    },
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
      return <h3 className={"font-bold"}>{value}</h3>;
    },
  },
  {
    accessorKey: "SubCategory",
    header: "Sub-Cat",
  },
  {
    accessorKey: "SoldOut",
    header: "SoldOut",
    cell: ({ row }) => {
      const value = String(row?.original?.SoldOut);
      return (
        <Badge
          className={
            row?.original?.SoldOut == false ? "bg-fuchsia-600" : "bg-pink-600"
          }
        >
          {value}
        </Badge>
      );
    },
  },
  {
    accessorKey: "bestSeller",
    header: "bestSeller",
    cell: ({ row }) => {
      const value = String(row?.original?.bestSeller);
      return (
        <Badge
          className={
            row?.original?.bestSeller == false
              ? "bg-fuchsia-600"
              : "bg-pink-600"
          }
        >
          {value}
        </Badge>
      );
    },
  },
  {
    accessorKey: "newArrival",
    header: "newArrival",
    cell: ({ row }) => {
      const value = String(row?.original?.newArrival);
      return (
        <Badge
          className={
            row?.original?.newArrival == false
              ? "bg-fuchsia-600"
              : "bg-pink-600"
          }
        >
          {value}
        </Badge>
      );
    },
  },
  {
    accessorKey: "SalePrice",
    header: "Sale-Price",
    cell: ({ row }) => {
      const val: any = row?.getValue("SalePrice");

      return <h3 className="font-medium">{val == 0 ? "No Discount" : val}</h3>;
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
