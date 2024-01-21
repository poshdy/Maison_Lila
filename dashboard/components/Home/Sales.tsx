"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { DollarSign } from "lucide-react";
import { Separator } from "../ui/separator";
import { useQuery } from "@tanstack/react-query";
import { Client } from "@/axiosClient";
const Sales = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["total-sales"],
    queryFn: async () => await Client.get("/sales/total-sales"),
  });
  if (isLoading) {
    return <h1>Loadingg</h1>;
  }
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          <DollarSign className=" rounded-sm p-1 bg-orange-400/80  w-8 h-8 text-black" />
          <h3 className="text-lg font-semibold">Sales</h3>
        </div>
        <Separator />
      </CardHeader>
      <CardContent className="flex gap-5 items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="font-semibold">{data?.data} EGP</span>
          <h4 className="text-base text-gray-500">Total Revenue</h4>
        </div>
      </CardContent>
    </Card>
  );
};

export default Sales;
