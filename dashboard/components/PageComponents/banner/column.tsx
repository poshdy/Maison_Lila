"use client";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./action";
import { BannerColumn } from "@/types";
import { Badge } from "@/components/ui/badge";

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
    accessorKey: "place",
    header: "Position",
    cell: ({ row }) => {
      return <h4 className="font-bold">{row.original.place}</h4>;
    },
  },
  {
    accessorKey: "published",
    header: "Published",
    cell: ({ row }) => {
      const value = String(row.original.published);

      return (
        <Badge
          className={`${
            row.original.published == true ? "bg-fuchsia-600" : "bg-pink-600"
          }`}
        >
          {value}
        </Badge>
      );
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
