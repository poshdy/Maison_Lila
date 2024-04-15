import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types";

type Props = {
  products: Product[];
};

const Products = ({ products }: Props) => {
  return (
    <section className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products?.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
