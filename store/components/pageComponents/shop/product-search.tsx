import Heading from "@/components/Shared/Heading";
import { Product, Search } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  product: any;
};

const ProductSearch = ({ product }: Props) => {
  return (
    <section className="w-full gap-x-2 flex">
      <Image
        alt={product.name}
        width={80}
        height={80}
        className="rounded-2xl object-cover"
        src={product.image.at(0).url as string}
      />
      <div className="flex flex-col items-start ">
        <Link href={`shop/${product?.id}`}>
          <Heading size="text-xl font-bold" title={product.name} />
        </Link>
        <Heading size="text-sm text-gray-400 " title={product?.category?.name} />
      </div>
    </section>
  );
};

export default ProductSearch;
