import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProductCardInfo from "./ProductCardInfo";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <section className="w-full flex flex-col">
      <Link href={`shop/${product?.id}`} className="w-full">
        <div className="relative max-w-[300px] h-[40vh] max-h-[50vh] shadow-md">
          <Image
            fill
            className={"object-cover"}
            sizes="100vw , 100vh"
            alt="product image"
            src={product?.image?.at(0)?.url as string}
          />
        </div>
      </Link>
      <ProductCardInfo product={product} />
    </section>
  );
};

export default ProductCard;
