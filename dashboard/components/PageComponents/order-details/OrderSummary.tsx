import { DATE } from "@/actions/shared";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { OrderDeatils } from "@/types";
import React from "react";

type Props = {
  summary: OrderDeatils;
};

const OrderSummary = ({ summary }: Props) => {
  let header = "font-semibold flex item-center justify-between";
  let className;
  if (summary.orderStatus == "PENDING") {
    className = "bg-gray-500 text-white";
  } else if (summary.orderStatus == "CONFIRMED") {
    className = " bg-purple-500/80 text-white";
  } else {
    className = "bg-green-400/80";
  }
  return (
    <Card className="w-[50%]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h2>Order Summary</h2>
          <Badge className={className}>#{summary?.orderStatus}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 flex flex-col justify-between">
        <h4 className={header}>
          Created At <Badge>{DATE(summary?.createdAt)}</Badge>
        </h4>
        <h4 className={header}>
          Subtotal <Badge>{summary?.orderSummary?.Subtotal} EGP</Badge>
        </h4>
        <h4 className={header}>
          Discount value <Badge>{summary?.orderSummary?.Discount} EGP</Badge>
        </h4>
        <h4 className={header}>
          Shipping Price <Badge>{summary?.Address?.zone.fees} EGP</Badge>
        </h4>
        <h4 className={header}>
          Payment Method <Badge>{summary?.orderSummary?.paymentMethod}</Badge>
        </h4>
        <h4 className={header}>
          Order Total <Badge>{summary?.orderSummary.OrderTotal} EGP</Badge>
        </h4>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
