import React from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Croissant } from "lucide-react";
import { Separator } from "../ui/separator";

type Props = {
  stock: {
    All: string;
    OutOfStock: string;
    InStock: string;
  } | null;
};

const ProductStock = ({ stock }: Props) => {
  console.log(stock)
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          <Croissant className=" rounded-sm p-1 bg-pink-300/80  w-8 h-8 text-black" />
          <h3 className="text-lg font-semibold">Products</h3>
        </div>
        <Separator />
      </CardHeader>
      <CardContent className="flex gap-5 items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="font-semibold">{stock?.All}</span>
          <h4 className="text-base text-gray-500">Total</h4>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold">{stock?.InStock}</span>
          <h4 className="text-base text-gray-500">In Stock</h4>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold">{stock?.OutOfStock}</span>
          <h4 className="text-base text-gray-500">Sold out</h4>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductStock;
