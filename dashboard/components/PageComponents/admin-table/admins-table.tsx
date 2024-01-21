import { Heading } from "@/components/Heading";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { AdminsColumn } from "@/types";
import { columns } from "./colmuns";

type Props = {
  data: AdminsColumn[];
};

const AdminsTable = ({ data }: Props) => {
  return (
    <section>
      <div className="flex items-center justify-between ">
        <Heading title="Admins" description="manage your store Admins" />
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </section>
  );
};

export default AdminsTable;
