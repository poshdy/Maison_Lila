"use client";
import { Heading } from "@/components/Heading";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { useRouter } from "next/navigation";
import { ProductColmun } from "@/types";
import { RestockStore } from "@/zustand/Restock-store";

type Props = {
  data: ProductColmun[];
  page: string;
};

const ProductClient = ({ data, page }: Props) => {
  const { onOpen } = RestockStore();
  const router = useRouter();
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between ">
        <Heading title="Products" description="manage your store Products" />
        <div className="flex items-center gap-2">
          <Button
            variant={"lila"}
            onClick={() => router.push("/products/new")}
            className=" rounded-lg flex justify-center"
          >
            Add new <Plus className="ml-3 h-5 w-5" />
          </Button>
          <Button
            variant={"link"}
            onClick={() => onOpen()}
            className=" rounded-lg flex justify-center"
          >
            Resrock Products
          </Button>
        </div>
      </div>
      <Separator />
      <DataTable
        name="products"
        page={page}
        searchKey="name"
        columns={columns}
        data={data}
      />
    </section>
  );
};

export default ProductClient;
