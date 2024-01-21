"use client";
import { Heading } from "@/components/Heading";
import { columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { CustomizedOrderColumn } from "@/types";

type Props = {
  data: CustomizedOrderColumn[];
};

const CustomOrderClient = ({ data }: Props) => {
  return (
    <section>
      <div className="flex items-center justify-between ">
        <Heading
          title="Customized Orders"
          description="manage your store Customized Orders"
        />
      </div>
      <Separator />
      <DataTable searchKey="email" columns={columns} data={data} />
    </section>
  );
};

export default CustomOrderClient;
