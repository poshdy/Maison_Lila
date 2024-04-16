import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import ProductCardInfo from "./ProductCardInfo";
import Link from "next/link";
import { Badge } from "../ui/badge";
type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link
      key={product.id}
      href={`/shop/${product.id}`}
      className="group space-x-1"
    >
      <div className="w-full h-[30vh] md:h-[50vh] relative cursor-pointer">
        <Image
          alt={`${product?.name}`}
          fill
          className="object-cover shadow-md"
          sizes="100vh,100vw"
          src={product?.image?.at(0)?.url as string}
        />
        {product?.salePrice > 0 ? <Badge className=" text-white bg-lila font-bold absolute px-5 text-lg py-2 top-2 left-2"> - {(((product?.price - product?.salePrice) / product?.price) * 100).toPrecision(2)}% </Badge> : null}
      </div>

      <ProductCardInfo product={product} />
    </Link>
  );
};

export default ProductCard;
