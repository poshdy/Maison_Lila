import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { OrderDeatils } from "@/types";
import React from "react";

type Props = {
  details: OrderDeatils;
};

const CustomerDetails = ({ details }: Props) => {
  const { user, phoneNumber } = details;
  let container = " flex item-center justify-between";
  return (
    <Card className="w-[50%]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <Heading title="Customer Details" className="text-2xl" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2 flex flex-col justify-between">
        <div className={container}>
          <h2>Name</h2>
          <span className="font-bold">{user.name}</span>
        </div>
        <div className={container}>
          <h2>Email</h2>
          <span className="font-bold">{user.email}</span>
        </div>
        <div className={container}>
          <h2>Phone Number</h2>
          <span className="font-bold">{phoneNumber}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerDetails;
