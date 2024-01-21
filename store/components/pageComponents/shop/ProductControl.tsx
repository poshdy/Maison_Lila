"use client";
import React, { useState } from "react";
import ProductButton from "@/components/pageComponents/shop/ProductButton";
import { Product } from "@/types";
import { formattedPrice } from "@/lib/utils";
import ProductQuantity from "./ProductQuantity";

type Props = {
  product: Product;
};

const ProductControl = ({ product }: Props) => {
  const [count, setCount] = useState<number>(0);

  return (
    <section className="w-full md:w-[90%] md:flex md:flex-col md:items-center space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="md:hidden text-2xl font-bold">
          {formattedPrice(product?.price)}
        </h2>
        <ProductQuantity setCount={setCount} count={count} />
      </div>
      <ProductButton count={count} product={product} />
    </section>
  );
};

export default ProductControl;
