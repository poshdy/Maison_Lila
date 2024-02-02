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
import { Client } from "@/axiosClient";
import toast from "react-hot-toast";

type Props = {
  data: ProductColmun[];
  page: string;
};

const ProductClient = ({ data, page }: Props) => {
  const router = useRouter();
  const RestockAll = async () => {
    try {
      const res = await Client.patch("/product/restock", { restock: 10 });
      toast.success("All Products are Restocked");
      router.refresh();
    } catch (error) {
      toast.error("Something went Wrong");
    }
  };
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
            onClick={() => RestockAll()}
            className=" rounded-lg flex justify-center"
          >
            Restock Products
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
