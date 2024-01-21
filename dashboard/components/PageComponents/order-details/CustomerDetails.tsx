import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { OrderDeatils } from "@/types";
import React from "react";

type Props = {
  details: OrderDeatils;
};

const CustomerDetails = ({ details }: Props) => {
  let header = "font-semibold flex item-center justify-between";
  return (
    <Card className="w-[50%]">
      <CardHeader>Customer Details</CardHeader>
      <CardContent className="flex flex-col space-y-3 justify-between">
        <h4 className={header}>
          Name <Badge>{details?.user?.name}</Badge>
        </h4>
        <h4 className={header}>
          Email <Badge>{details?.user?.email}</Badge>
        </h4>

        <h4 className={header}>
          Phone <Badge>01016908226</Badge>
        </h4>
      </CardContent>
    </Card>
  );
};

export default CustomerDetails;
