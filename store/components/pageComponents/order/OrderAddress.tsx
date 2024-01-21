import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Address } from "@/types";
type Props = {
  address: Address | null;
};

const OrderAddress = ({ address }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ship to</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-start text-black gap-2">
        {address?.streetNumber} <span>{address?.BuildingNo}</span> {address?.Floor}{" "}
        {address?.apartmenNo} {address?.zone.name} {address?.city}
      </CardContent>
    </Card>
  );
};

export default OrderAddress;
