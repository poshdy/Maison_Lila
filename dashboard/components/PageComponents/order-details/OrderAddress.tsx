import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { OrderDeatils } from "@/types";
import React from "react";
import Heading from "@/components/ui/heading";

type Props = {
  address: OrderDeatils;
};

const OrderAddress = ({ address }: Props) => {
  const { Address } = address;
  let container = "flex item-center justify-between";
  return (
    <Card className="w-[50%]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <Heading title="Address" className="text-2xl" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2 flex flex-col justify-between">
        <div className={container}>
          <h2>Zone</h2>
          <span className="font-bold">{Address.zone.name}</span>
        </div>
        <div className={container}>
          <h2>Street Name</h2>
          <span className="font-bold">{Address.streetName}</span>
        </div>
        <div className={container}>
          <h2>Building Number</h2>
          <span className="font-bold">{Address.BuildingNo}</span>
        </div>
        <div className={container}>
          <h2>Apartment</h2>
          <span className="font-bold">{Address.apartmentNo}</span>
        </div>
        <div className={container}>
          <h2>Floor</h2>
          <span className="font-bold">{Address.Floor}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderAddress;
