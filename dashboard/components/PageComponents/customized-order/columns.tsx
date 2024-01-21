"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./actions";
import { CustomizedOrderColumn } from "@/types";
import Link from "next/link";
import Image from "next/image";

export const columns: ColumnDef<CustomizedOrderColumn>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const url = row.original.image;

      return <Image alt="icon" width={30} height={30} src={url} />;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },

  {
    accessorKey: "id",
    header: "Details",
    cell: ({ row }) => {
      return (
        <Link href={`/customized-orders/${row.original.id}`}>View Details</Link>
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
