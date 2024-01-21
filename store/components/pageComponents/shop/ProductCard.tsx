import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import ProductButton from "./ProductButton";
import Link from "next/link";
import SaleTag from "./SaleTag";
import ProductPrice from "./ProductPrice";

type Props = {
  product: Product;
  cropped?: boolean;
};

const ProductCard = ({ product, cropped }: Props) => {
  return (
    <section className="flex items-center flex-col w-[150px] h-[300px] md:w-[250px] md:h-[450px] justify-center gap-2">
      <Link href={`shop/${product?.id}`} className="w-full h-full">
        <div className="relative w-full h-full">
          <Image
            fill
            className={cn(
              "object-cover",
              cropped ? " rounded-t-full" : "rounded-md"
            )}
            sizes="100vw , 100vh"
            alt="product image"
            src={product?.image?.at(0)?.url as string}
          />
        </div>
      </Link>
      <div className="w-full flex flex-col items-center md:items-start ">
        <h3 className="text-lg font-medium">{product?.name}</h3>
        <h4 className="text-sm text-gray-400">{product?.category?.name}</h4>
        {Number(product?.salePrice) > 0 ? (
          <SaleTag product={product} />
        ) : (
          <ProductPrice product={product} />
        )}
      </div>
      <div className="w-full flex items-center flex-col">
        <ProductButton product={product} />
      </div>
    </section>
  );
};

export default ProductCard;
