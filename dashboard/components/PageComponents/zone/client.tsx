"use client";
import { Heading } from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./cloumns";
import { ZoneColumn } from "@/types";

type Props = {
  data: ZoneColumn[];
};

const ZoneClient = ({ data }: Props) => {
  const router = useRouter();
  return (
    <section>
      <div className="flex items-center justify-between ">
        <Heading title="Zone" description="manage your store Zones" />
        <Button
          variant={"lila"}
          onClick={() => router.push("/zones/new")}
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

export default ZoneClient;
