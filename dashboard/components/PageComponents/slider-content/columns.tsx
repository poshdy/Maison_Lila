"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./actions";
import { SliderContentColumn } from "@/types";
import Image from "next/image";
export const columns: ColumnDef<SliderContentColumn>[] = [
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
    header: "Images",
    cell: ({ row }) => {
      return (
        <Image width={30} height={30} alt="image" src={row.original.image} />
      );
    },
  },
  {
    accessorKey: "slider",
    header: "Slider",
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
