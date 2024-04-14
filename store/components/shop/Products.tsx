import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types";
import Empty from "@/components/Shared/Empty";
import Heading from "@/components/Shared/Heading";

type Props = {
  products: Product[];
};

const Products = ({ products }: Props) => {
  return (
    <>
      {products ? (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <Heading title="No Products Avaliable" size="text-lg text-gray-300" />
      )}
    </>
  );
};

export default Products;
