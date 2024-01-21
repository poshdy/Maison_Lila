"use client";
import { Heading } from "@/components/Heading";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { useRouter } from "next/navigation";
import { BottomImageColumn } from "@/types";

type Props = {
  data: BottomImageColumn[];
};

const BottomImageClient = ({ data }: Props) => {
  const router = useRouter();
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between ">
        <Heading title="Bottom-Images" description="manage your store BottomImages" />
        <Button
          variant={"lila"}
          onClick={() => router.push("/bottom-image/new")}
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

export default BottomImageClient;
