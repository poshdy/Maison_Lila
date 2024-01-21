"use client";
import { Heading } from "@/components/Heading";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

import React from "react";
import { columns } from "./column";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { useRouter } from "next/navigation";
import { CategoryColumn } from "@/types";

type Props = {
  data: CategoryColumn[];
};

const CategoryClient = ({ data }: Props) => {
  const router = useRouter();
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between ">
        <Heading title="Category" description="manage your store categories" />
        <Button
          variant={"lila"}
          onClick={() => router.push("/categories/new")}
          className=" rounded-lg flex justify-center"
        >
          Add new <Plus className="ml-3 h-5 w-5" />
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </section>
  );
};

export default CategoryClient;
