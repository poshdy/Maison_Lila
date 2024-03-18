"use client";
import { Product } from "@/types";
import React from "react";

import ProductCard from "./ProductCard";
import Heading from "@/components/Shared/Heading";
type Props = {
  data: Product[];
  title: string;
};

const ProductSample = ({ data, title }: Props) => {
  return (
    <section className="space-y-2">
      <Heading size="text-3xl" title={title} />
      <section className="grid grid-cols-4 gap-x-6 gap-y-3 justify-items-center">
        {data?.slice(0, 4).map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </section>
    </section>
  );
};

export default ProductSample;
