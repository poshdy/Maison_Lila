import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Address } from "@/types";
type Props = {
  address: Address | null;
};

const OrderAddress = ({ address }: Props) => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Ship To</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-2">
        <span className="text-gray-500">
          Building Number:
          <strong className="text-lg text-main"> {address.BuildingNo}</strong>
        </span>
        <span className="text-gray-500">
          Street Name:
          <strong className="text-lg text-main"> {address?.streetName}</strong>
        </span>
        <span className="text-gray-500">
          Floor:
          <strong className="text-lg text-main"> {address.Floor}</strong>
        </span>
        <span className="text-gray-500">
          Apartment:
          <strong className="text-lg text-main"> {address.Floor}</strong>
        </span>
        <span className="text-gray-500">
          Zone:
          <strong className="text-lg text-main"> {address?.zone?.name}</strong>
        </span>
        <span className="text-gray-500">
          City:
          <strong className="text-lg text-main"> {address?.city}</strong>
        </span>
      </CardContent>
    </Card>
  );
};

export default OrderAddress;
