"use client";
import { Heading } from "@/components/Heading";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { columns } from "./column";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { useRouter } from "next/navigation";
import { CouponColumn } from "@/types";

type Props = {
  data: CouponColumn[];
};

const CouponClient = ({ data }: Props) => {
  const router = useRouter();
  return (
    <section>
      <div className="flex items-center justify-between ">
        <Heading title="Coupons" description="manage your store Coupons" />
        <Button
          variant={"lila"}
          className="rounded-lg flex justify-center"
          onClick={() => router.push("/coupons/new")}
        >
          Add new <Plus className="ml-3 h-5 w-5" />
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </section>
  );
};

export default CouponClient;
