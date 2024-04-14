import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type Props = {
  status: string | null;
};

const OrderStatus = ({ status }: Props) => {
  let message;
  if (status == "PENDING") {
    message = "your order is waiting for confirmation";
  } else if (status == "CONFIRMED") {
    message =
      "Good news! Your order is confirmed and currently being processed. We are working on getting it ready for you. We will send you another update once it is shipped. Thanks for choosing us!";
  } else if (status == "DELIVERD") {
    message =
      "We are excited to let you know that your order has been successfully delivered! We hope you enjoy your new items.Thank you for choosing us!";
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h3 className="text-2xl font-bold leading-tight">
            Your Order Is {status}
          </h3>
        </CardTitle>
        <CardDescription>{message}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default OrderStatus;
