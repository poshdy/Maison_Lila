import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { DATE, formattedPrice } from "@/lib/utils";
import React from "react";
import Text from "../Shared/Text";
import Heading from "../Shared/Heading";
import Image from "next/image";
import Currency from "../Shared/Currency";

const UserOrders = (order: any) => {
  console.log(order.order.OrderItems);
  const { OrderSummary, orderStatus, createdAt, Address, OrderItems } =
    order.order;
  return (
    <Card className="border-2 bg-transparent ">
      <CardHeader className="flex items-center justify-between flex-row">
        <CardDescription className="text-base">
          On {DATE(createdAt)}
        </CardDescription>
        <h3 className="text-base md:text-lg text-white bg-lila px-3 py-1">
          {orderStatus}
        </h3>
      </CardHeader>
      <CardContent className="space-y-3">
        {OrderItems.map((item) => (
          <OrderItem item={item} />
        ))}
        <div className="flex flex-col item-start justify-start">
          <Heading title="Order Total" size="text-sm md:text-base text-left" />
          <Currency price={OrderSummary.OrderTotal} />
        </div>
      </CardContent>
    </Card>
  );
};

export default UserOrders;

export const OrderItem = (item: any) => {
  const { Product } = item.item;
  return (
    <div className="flex justify-between items-center">
      <div className="relative md:w-[150px] w-[60px] aspect-square">
        <Image
          alt="product"
          src={Product?.image[0]?.url as string}
          fill
          className="rounded-xl object-cover"
          sizes="100vh, 100vw"
        />
      </div>

      <div className="flex items-center md:items-start justify-between w-full">
        <div className="flex flex-col items-start px-1">
          <Text size="text-sm text-gray-500" text={Product?.category?.name} />
          <Heading size="text-lg font-bold" title={Product?.name} />
          <h3>{formattedPrice(Number(Product?.price))}</h3>
        </div>
      </div>
    </div>
  );
};
