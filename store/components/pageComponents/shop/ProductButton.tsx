"use client";
import React from "react";
import { Button } from "../../ui/button";
import { Product } from "@/types";
import { useCart } from "@/zustand/cart-store";
type Props = {
  product: Product;
  count?: number;
};

const ProductButton = ({ product, count }: Props) => {
  const { id, name, price, SoldOut  ,  salePrice} = product;
  const image = product?.image?.at(0)?.url;
  const { addItem } = useCart();
  return (
    <Button
      disabled={SoldOut}
      onClick={() =>
        addItem({
          price: +salePrice ? +salePrice : price,
          id,
          image,
          name,
          quantity: count ? count : 1,
        })
      }
      className="w-full rounded-2xl bg-[#3C2E3D] font-bold text-white transition-all duration-300 ease-in-out"
    >
      {SoldOut ? "Out Of Stock" :  `Add to Bag`}
     
    </Button>
  );
};

export default ProductButton;
