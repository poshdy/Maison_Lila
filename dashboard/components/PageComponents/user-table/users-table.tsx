import { Heading } from "@/components/Heading";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { AdminsColumn } from "@/types";
import { UserColumns } from "./user-columns";

type Props = {
  data: AdminsColumn[];
};

const UsersTable = ({ data }: Props) => {
  return (
    <section>
      <div className="flex items-center justify-between ">
        <Heading title="Users" description="manage your store" />
      </div>
      <Separator />
      <DataTable searchKey="name" columns={UserColumns} data={data} />
    </section>
  );
};

export default UsersTable;
