import { DATE } from "@/actions/shared";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OrderDeatils } from "@/types";
import React from "react";

type Props = {
  address: OrderDeatils;
};

const OrderAddress = ({ address }: Props) => {
  let header = "font-semibold flex item-center justify-between";
  return (
    <Card className="w-[50%]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h2>User Address</h2>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 flex flex-col justify-between">
        <h4 className={header}>
          Building number <Badge>{address.Address.BuildingNo}</Badge>
        </h4>
        <h4 className={header}>
          street name <Badge>{address.Address.streetName}</Badge>
        </h4>
        <h4 className={header}>
          city <Badge>{address.Address.city}</Badge>
        </h4>
        <h4 className={header}>
          Zone <Badge>{address.zone.name}</Badge>
        </h4>
        <h4 className={header}>
          Floor <Badge>{address.Address.Floor}</Badge>
        </h4>
        <h4 className={header}>
          Apartment number <Badge>{address.Address.apartmentNo}</Badge>
        </h4>
      </CardContent>
    </Card>
  );
};

export default OrderAddress;
