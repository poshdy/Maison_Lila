import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import ProductCardInfo from "./ProductCardInfo";
import Link from "next/link";
type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link key={product.id} href={`/shop/${product.id}`} className="group">
      <div
        className="w-[180px] h-[200px] md:h-[350px] md:w-[290px]  relative cursor-pointer"
      >
        <Image
          alt={`${product?.name}`}
          fill
          className="object-cover rounded-md shadow-md  object-center group-hover:opacity-75"
          sizes="100vh,100vw"
          src={product?.image?.at(0)?.url as string}
        />
      </div>

      <ProductCardInfo product={product} />
    </Link>
  );
};

export default ProductCard;
