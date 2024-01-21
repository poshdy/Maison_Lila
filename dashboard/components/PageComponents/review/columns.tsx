"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./actions";
import { ReviewColumn } from "@/types";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<ReviewColumn>[] = [
  {
    accessorKey: "product",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "User-email",
  },
  {
    accessorKey: "content",
    header: "User-Review",
  },
  {
    accessorKey: "rating",
    header: "Rating",
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
