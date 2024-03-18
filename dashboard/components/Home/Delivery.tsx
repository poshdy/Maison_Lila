import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Truck, Package } from "lucide-react";
import { Separator } from "../ui/separator";
import Heading from "../ui/heading";

type Props = {
  orders: {
    Pending: string;
    Proccessing: string;
    Delivered: string;
  };
};

const Orders = ({ orders }: Props) => {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          <div className=" rounded-full p-2 bg-main  w-10 h-10 text-white">
            <Package />
          </div>
          <Heading title={"Orders"} className="text-lg" />
        </div>
        <Separator />
      </CardHeader>
      <CardContent className="flex gap-5 items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400">Pending</span>
          <Heading title={orders?.Pending} className="text-3xl text-main" />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400">Confirmed</span>
          <Heading title={orders?.Proccessing} className="text-3xl text-main" />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400">Deliverd</span>
          <Heading title={orders?.Delivered} className="text-3xl text-main" />
        </div>
      </CardContent>
    </Card>
  );
};

export default Orders;
