"use client";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./action";
import { BannerColumn } from "@/types";
import { Check, X } from "lucide-react";

export const columns: ColumnDef<BannerColumn>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "text",
    header: "text",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const url = row.original.image;

      return <Image alt="icon" width={30} height={30} src={url} />;
    },
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "published",
    header: "Published",
    cell: ({ row }) => {
      const value = row.original.published;

      return <h3>{value ? <Check /> : <X />}</h3>;
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
