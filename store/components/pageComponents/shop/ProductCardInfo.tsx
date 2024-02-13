import { Product } from "@/types";
import React from "react";
import SaleTag from "./SaleTag";
import ProductPrice from "./ProductPrice";
import ProductButton from "./ProductButton";

type Props = {
  product: Product;
};

const ProductCardInfo = ({ product }: Props) => {
  return (
    <section className="flex flex-row justify-between py-1">
      <div className="flex flex-col items-start">
        <h4 className="text-sm text-gray-500">{product?.category?.name}</h4>
        <h3 className="text-xl font-bold">{product?.name}</h3>

        <div>
          {Number(product?.salePrice) > 0 ? (
            <SaleTag product={product} />
          ) : (
            <ProductPrice product={product} />
          )}
        </div>
      </div>
      <ProductButton product={product} />
    </section>
  );
};

export default ProductCardInfo;
