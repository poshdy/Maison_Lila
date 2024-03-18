"use client";
import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import ProductCardInfo from "./ProductCardInfo";
import { useRouter } from "next/navigation";
type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const router = useRouter();
  return (
    <section className="w-36  md:w-80 col-span-2">
      <div
        onClick={() => router.push(`/shop/${product?.id}`)}
        className="w-full h-[150px] md:h-[300px]  relative cursor-pointer"
      >
        <Image
          alt={`${product?.name}`}
          fill
          className="object-cover  rounded-md"
          sizes="100vh,100vw"
          src={product?.image?.at(0)?.url as string}
        />
      </div>

      <ProductCardInfo product={product} />
    </section>
  );
};

export default ProductCard;
