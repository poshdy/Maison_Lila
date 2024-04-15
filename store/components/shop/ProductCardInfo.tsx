import { Product } from "@/types";
import React from "react";
import Text from "@/components/Shared/Text";
import Currency from "@/components/Shared/Currency";

type Props = {
  product: Product;
};

const ProductCardInfo = ({ product }: Props) => {
  return (
    <section className="pt-1">
      <Text
        size="text-2xl font-bold leading-tight tracking-tighter"
        text={product?.name}
      />
      <Text
        size="text-base font-semibold text-gray-500"
        text={product?.category?.name}
      />

      <Currency
        price={product?.salePrice > 0 ? product?.salePrice : product?.price}
      />
    </section>
  );
};

export default ProductCardInfo;
