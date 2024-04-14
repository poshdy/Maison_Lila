import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formattedPrice } from "@/lib/utils";
import React from "react";

type Props = {
  order: {
    id: string;
    paymentMethod: string;
    Subtotal: string;
    DeliveryFee: string;
    Discount: string;
    OrderTotal: number;
  };
};

const OrderSummary = ({ order }: Props) => {
  return (
    <Card className="flex flex-col w-full  gap-2">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <h3 className="text-sm text-gray-500">SubTotal</h3>
          <h3 className="font-bold text-lg">
            {formattedPrice(+order.Subtotal)}
          </h3>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm text-gray-500">Discount</h3>
          <h3 className="font-bold text-lg">
            {formattedPrice(+order.Discount)}
          </h3>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm text-gray-500">DeliveryFee</h3>
          <h3 className="font-bold text-lg">
            {" "}
            {formattedPrice(+order.DeliveryFee)}
          </h3>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm text-gray-500">OrderTotal</h3>
          <h3 className="font-bold text-lg">
            {order.Discount
              ? formattedPrice(
                  +order.OrderTotal +
                    Number(order.DeliveryFee) -
                    Number(order.Discount)
                )
              : formattedPrice(+order.OrderTotal + +order.DeliveryFee)}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
