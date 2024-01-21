"use client";
import { Heading } from "@/components/Heading";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { columns } from "./column";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { useRouter } from "next/navigation";
import { BannerColumn } from "@/types";

type Props = {
  data: BannerColumn[];
};

const BannerClient = ({ data }: Props) => {
  const router = useRouter();
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between ">
        <Heading title="Banners" description="manage your store Banners" />
        <Button
          variant={"lila"}
          onClick={() => router.push("/banners/new")}
          className=" rounded-lg flex justify-center"
        >
          Add new <Plus className="ml-3 h-5 w-5" />
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="text" columns={columns} data={data} />
    </section>
  );
};

export default BannerClient;
