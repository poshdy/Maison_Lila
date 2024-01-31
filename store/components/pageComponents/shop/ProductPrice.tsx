import { formattedPrice } from "@/lib/utils";
import { Product } from "@/types";
import React from "react";

type Props = {
  product: Product;
};

const ProductPrice = ({ product }: Props) => {
  return (
    <>
      <h3 className="font-semibold text-base">
        {formattedPrice(product?.price)}
      </h3>
    </>
  );
};

export default ProductPrice;
