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
    <section className="flex  flex-col items-start py-1">
      <h3 className="text-2xl  font-bold">{product?.name}</h3>
      <h4 className="text-sm text-gray-500">{product?.category?.name}</h4>

      <div>
        {Number(product?.salePrice) > 0 ? (
          <SaleTag product={product} />
        ) : (
          <ProductPrice product={product} />
        )}
      </div>
      <ProductButton product={product} />
    </section>
  );
};

export default ProductCardInfo;
