import { formattedPrice } from "@/lib/utils";
import { Product } from "@/types";
import React from "react";

type Props = {
  product: Product;
};

const SaleTag = ({ product }: Props) => {
  return (
    <div className="flex items-end gap-1">
      <h3 className="font-semibold text-base">
        {formattedPrice(+product?.salePrice)}
      </h3>
      <del>{formattedPrice(+product?.price)}</del>
    </div>
  );
};

export default SaleTag;
