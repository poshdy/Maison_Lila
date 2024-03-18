"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/Heading";
import { columns } from "./sub-cat-columns";
import { CategoryColumn } from "@/types";
type Props = {
  data: CategoryColumn[];
};

const SubCategoryClient = ({ data }: Props) => {
  const router = useRouter();
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between ">
        <Heading
          title="Sub-Category"
          description="manage your store sub-categories"
        />
        <Button
          variant={"lila"}
          onClick={() => router.push("/categories/sub-category/new")}
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

export default SubCategoryClient;
