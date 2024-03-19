"use client";
import React, { useState } from "react";
import Text from "@/components/Shared/Text";
import Currency from "@/components/Shared/Currency";
import AddToCartButton from "./AddToCartButton";
import ProductQuantityControl from "./ProductQuantityControl";
import { Product } from "@/types";
type Props = {
  product: Product;
};

const ProductController = ({ product }: Props) => {

  const [quantity, setQuantity] = useState<number>(1);
  return (
    <section className="w-full flex flex-col items-center gap-y-4">
      <div className="w-full flex items-center justify-between">
        <ProductQuantityControl quantity={quantity} setQuantity={setQuantity} />
        <div className="">
          <Text size="text-sm" text="total price" />
          <Currency
            price={
              product?.salePrice > 0
                ? product?.salePrice * quantity
                : product?.price * quantity
            }
          />
        </div>
      </div>
      <AddToCartButton product={product} quantity={quantity} />
    </section>
  );
};

export default ProductController;
