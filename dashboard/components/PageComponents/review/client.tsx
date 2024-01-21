"use client";
import { Heading } from "@/components/Heading";
import React from "react";
import { columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ReviewColumn } from "@/types";

type Props = {
  data: ReviewColumn[];
};

const ReviewClient = ({ data }: Props) => {
  return (
    <section className="space-y-4">

      <DataTable searchKey="email" columns={columns} data={data} />
    </section>
  );
};

export default ReviewClient;
