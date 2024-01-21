import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { DATE, formattedPrice } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  order: any | null;
};

const UserOrders = ({ order }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{order?.orderStatus}</CardTitle>
        <CardDescription>created at {DATE(order?.createdAt)}</CardDescription>
      </CardHeader>
      <CardContent>
        <h3>Order Total: {formattedPrice(+order?.orderSummary?.OrderTotal)}</h3>
        <h3>Deliverd to: {order?.zone?.name} </h3>
      </CardContent>
      <CardFooter>
        <Link href={`/order/${order?.id}`}>See order details</Link>
      </CardFooter>
    </Card>
  );
};

export default UserOrders;
