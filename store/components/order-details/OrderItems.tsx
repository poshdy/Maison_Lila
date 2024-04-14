import { Card } from "@/components/ui/card";
import { formattedPrice } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  order: {
    Product: {
      name: string;
      price: string;
      image: {
        url: string;
      }[];
    };
    quantity: number;
  };
};

const OrderItems = ({ order }: Props) => {
  return (
    <Card className="px-1 py-1 flex justify-between hover:bg-gray-100 rounded-3xl duration-300 ease-in-out">
      <div className="flex gap-1 items-start ">
        <div className="relative w-[80px] aspect-square">
          <Image
            alt="product"
            src={order.Product.image.at(0)?.url as string}
            fill
            className="rounded-3xl"
            sizes="100vh, 100vw"
          />
        </div>

        <div className="flex flex-col items-start  pt-1">
          <h2 className="text-xl font-bold leading-tight tracking-tight">
            {order.Product?.name}
          </h2>
          <h3>{formattedPrice(Number(order.Product?.price))}</h3>
        </div>
      </div>
    </Card>
  );
};

export default OrderItems;
