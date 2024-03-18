import { cn, formattedPrice } from "@/lib/utils";
import React from "react";

type Props = {
  price: number;
  size?: string;
};

const Currency = ({ price, size }: Props) => {
  return (
    <h3 className={cn("md:text-xl text-lg font-semibold",size)}>
      {formattedPrice(+price)}
    </h3>
  );
};

export default Currency;
