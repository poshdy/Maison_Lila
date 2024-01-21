import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DATE } from "@/lib/utils";
import { OrderDeatils } from "@/types";
import React from "react";

type Props = {
  order: OrderDeatils;
};

const OrderDetails = ({ order }: Props) => {
  const { BuildingNo, Floor, apartmentNo, streetName, city } = order.Address;
  return (
    <Card className="flex flex-col space-y-2">
      <CardHeader>
        <CardTitle>Order Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col col-span-3 items-start">
          <h3 className="text-sm text-gray-400">created at</h3>
          <span className="text-lg font-bold">{DATE(order.createdAt)}</span>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-sm text-gray-400">Address</h3>
          <span className="text-lg flex flex-col font-bold">
            {streetName} {BuildingNo} {apartmentNo} {Floor} {city}
          </span>
        </div>
        <div className="flex flex-col  items-start">
          <h3 className="text-sm text-gray-400">Payment</h3>
          <span className="text-lg font-bold">{order?.paymentMethod}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderDetails;
