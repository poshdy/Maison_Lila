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
    <section className="w-[90%] flex flex-col ">
      <Link href={`/shop/${product?.id}`} className="w-full">
        <div className="md:w-[50%] w-full h-[50vh] md:h-[80vh] relative">
          <Image
            alt=""
            fill
            className="object-cover"
            sizes="100vh,100vw"
            src={product?.image?.at(0)?.url as string}
          />
        </div>
      </Link>
      <ProductCardInfo product={product} />
    </section>
  );
};

export default ProductCard;
