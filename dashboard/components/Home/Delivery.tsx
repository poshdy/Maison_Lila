import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Truck, Package } from "lucide-react";
import { Separator } from "../ui/separator";

type Props = {
  orders: {
    Pending: string;
    Proccessing: string;
    Delivered: string;
  } | null;
};

const Delivery = ({ orders }: Props) => {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          <Package className=" rounded-sm p-1 bg-purple-300/80  w-8 h-8 text-black" />
          <h3 className="text-lg font-semibold">Delivery</h3>
        </div>
        <Separator />
      </CardHeader>
      <CardContent className="flex gap-3 items-center">
        <div className="flex flex-col items-center">
          <span className="font-semibold">{orders?.Pending}</span>
          <h4 className="text-sm text-gray-500">Pending</h4>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold">{orders?.Proccessing}</span>
          <h4 className="text-sm text-gray-500">Proccessing</h4>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold">{orders?.Delivered}</span>
          <h4 className="text-sm text-gray-500">Delivered</h4>
        </div>
      </CardContent>
    </Card>
  );
};

export default Delivery;
