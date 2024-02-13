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
  const { id, name, price, SoldOut, salePrice } = product;
  const image = product?.image?.at(0)?.url;
  const { addItem } = useCart();
  return (
    <button
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
      className="font-bold text-xl"
    >
      {SoldOut ? "Out Of Stock" : `Add to Bag`}
    </button>
  );
};

export default ProductButton;
