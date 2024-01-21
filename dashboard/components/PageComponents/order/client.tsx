"use client";
import { Heading } from "@/components/Heading";
import { columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { OrderColumn } from "@/types";

type Props = {
  data: OrderColumn[];
  page: string;
};

const OrderClient = ({ data, page }: Props) => {
  return (
    <section>
      <div className="flex items-center justify-between ">
        <Heading title="Orders" description="manage your store Orders" />
      </div>
      <Separator />
      <DataTable name="orders" page={page} searchKey="email" columns={columns} data={data} />
    </section>
  );
};

export default OrderClient;
