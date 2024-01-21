import { CartItems } from "@/types";
import Image from "next/image";
import React from "react";
import IncreaseQuantity from "./IncreaseQuantity";
import DecreaseQuantity from "./DecreaseQuantity";
import { formattedPrice } from "@/lib/utils";

type Props = {
  product: CartItems;
};

const CartProduct = ({ product }: Props) => {
  return (
    <section className="px-1 py-1 flex justify-between hover:bg-gray-100 rounded-3xl duration-300 ease-in-out">
      <div className="flex gap-1 items-start ">
        <div className="relative w-[80px] aspect-square">
          <Image
            alt="product"
            src={product?.image as string}
            fill
            className="rounded-3xl"
            sizes="100vh, 100vw"
          />
        </div>

        <div className="flex flex-col items-start  pt-1">
          <h2 className="text-xl font-bold leading-tight tracking-tight">
            {product?.name}
          </h2>
          <h3>{formattedPrice(Number(product?.price))}</h3>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <DecreaseQuantity id={product?.id} />
        <h3 className="text-lg">0{product?.quantity}</h3>
        <IncreaseQuantity id={product?.id} />
      </div>
    </section>
  );
};

export default CartProduct;
