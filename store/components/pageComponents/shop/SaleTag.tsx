import Currency from "@/components/Shared/Currency";

import { Product } from "@/types";
import React from "react";

type Props = {
  product: Product;
};

const SaleTag = ({ product }: Props) => {
  return (
    <div className="flex items-end gap-1">
      <Currency price={+product.salePrice} />

      <del className="text-lg">
        <Currency size="text-sm" price={+product.price} />
      </del>
    </div>
  );
};

export default SaleTag;
