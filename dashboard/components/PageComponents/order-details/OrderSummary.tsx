import { DATE, formattedPrice } from "@/actions/shared";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { OrderDeatils } from "@/types";
import React from "react";

type Props = {
  summary: OrderDeatils;
};

const OrderSummary = ({ summary }: Props) => {
  const { Address, OrderSummary, createdAt } = summary;
  console.log(OrderSummary)
  let container = "flex item-center justify-between";

  return (
    <Card className="w-[50%]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <Heading title="Order Summary" className="text-2xl" />
          <Badge className=""># {summary?.orderStatus}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 flex flex-col justify-between">
        <div className={container}>
          <h2>Payment</h2>
          <span className="font-bold">
            {OrderSummary.paymentMethod == "CASH"
              ? "Cash on Delivery"
              : "Online Payment"}
          </span>
        </div>
        <div className={container}>
          <h2>Placed At</h2>
          <span className="font-bold">{DATE(createdAt)}</span>
        </div>
        <div className={container}>
          <h2>Sub-Total</h2>
          <span className="font-bold">
            {formattedPrice(+OrderSummary.Subtotal)}
          </span>
        </div>
        <div className={container}>
          <h2>Shipping Price</h2>
          <span className="font-bold">
            {formattedPrice(+Address?.zone?.fees)}
          </span>
        </div>
        <div className={container}>
          <h2>Discount</h2>
          <span className="font-bold">
            {formattedPrice(+OrderSummary?.Discount)}
          </span>
        </div>
        <div className={container}>
          <h2>Order Total</h2>
          <span className="font-bold">
            {formattedPrice(
              +OrderSummary.OrderTotal - +OrderSummary?.Discount
            )}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
