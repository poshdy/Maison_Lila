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
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
       <div className="mt-1 text-lg font-medium text-gray-900">
        {Number(product?.salePrice) > 0 ? (
          <SaleTag product={product} />
        ) : (
          <Currency price={product?.price} />
        )}
      </div> 
    </section>
  );
};

export default ProductCardInfo;
