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

type Props = {
  data: ProductColmun[];
  page: string;
};

const ProductClient = ({ data, page }: Props) => {
  const router = useRouter();
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between ">
        <Heading title="Products" description="manage your store Products" />
        <Button
          variant={"lila"}
          onClick={() => router.push("/products/new")}
          className=" rounded-lg flex justify-center"
        >
          Add new <Plus className="ml-3 h-5 w-5" />
        </Button>
      </div>
      <Separator />
      <DataTable name="products" page={page} searchKey="name" columns={columns} data={data} />
    </section>
  );
};

export default ProductClient;
