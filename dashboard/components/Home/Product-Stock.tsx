import React from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Croissant } from "lucide-react";
import { Separator } from "../ui/separator";
import Heading from "../ui/heading";

type Props = {
  stock: {
    total: string;
    outOfStock: string;
    inStock: string;
  };
};

const ProductStock = ({ stock }: Props) => {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          <div className=" rounded-full p-2 bg-main  w-10 h-10 text-white">
            <Croissant />
          </div>
          <Heading title={"Stock"} className="text-lg" />
        </div>
        <Separator />
      </CardHeader>
      <CardContent className="flex gap-5 items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400">Total</span>
          <Heading title={stock?.total} className="text-3xl text-main" />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400">In Stock</span>
          <Heading title={stock?.inStock} className="text-3xl text-main" />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400">Sold out</span>
          <Heading title={stock?.outOfStock} className="text-3xl text-main" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductStock;
