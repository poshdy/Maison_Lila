"use client";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./actions";
import { AnounColumn } from "@/types";
export const columns: ColumnDef<AnounColumn>[] = [
  {
    accessorKey: "text",
    header: "Text",
    cell: ({ row }) => {
      const name: string = row.getValue("text");

      return <h3 className="font-semibold leading-tight tracking-tighter">{name}</h3>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => {
      const name: string = row.getValue("createdAt");

      return <h3 className="font-medium">{name}</h3>;
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
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
