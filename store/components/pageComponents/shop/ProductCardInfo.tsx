import { Product } from "@/types";
import React from "react";
import SaleTag from "./SaleTag";
import Text from "@/components/Shared/Text";
import Heading from "@/components/Shared/Heading";
import Currency from "@/components/Shared/Currency";

type Props = {
  product: Product;
};

const ProductCardInfo = ({ product }: Props) => {
  return (
    <section className="flex flex-col items-start justify-center">
      <Heading title={product?.name} size="md:text-2xl text-lg text-left font-bold" />

      <Text size="text-sm" text={product?.category?.name} />
      {Number(product?.salePrice) > 0 ? (
        <SaleTag product={product} />
      ) : (
        <Currency price={product?.price} />
      )}
    </section>
  );
};

export default ProductCardInfo;
