"use client";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./actions";
import { SliderColumn } from "@/types";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<SliderColumn>[] = [
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "content",
    header: "Images",
    cell: ({ row }) => {
      const urls = row.original?.content?.map((sl) => sl.image);
      return (
        <div className="flex gap-1 items-center">
          {urls.map((sli, i) => (
            <Image
              key={i}
              className="rounded-full"
              alt="image"
              width={30}
              height={30}
              src={sli}
            />
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "published",
    header: "published",
    cell: ({ row }) => {
      const value = String(row.original.published);
      return (
        <Badge
          className={
            row.original.published == false ? "bg-fuchsia-600" : "bg-pink-600"
          }
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
