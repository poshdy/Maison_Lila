"use client";
import { formattedPrice } from "@/lib/utils";
import { Zone } from "@/types";
import { useCart } from "@/zustand/cart-store";
import React, { useEffect } from "react";

type Props = {
  zone?: Zone;
};

const CartSummary = ({ zone }: Props) => {
  const { cartTotalAmount, calculateTotalPrice, discountValue } = useCart();
  useEffect(() => {
    calculateTotalPrice();
  }, [calculateTotalPrice]);

  return (
    <section className="p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold leading-tight tracking-tight">
          Subtotal:
        </h2>
        <span>{formattedPrice(cartTotalAmount)}</span>
      </div>
      {discountValue > 0 ? (
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold leading-tight tracking-tight">
            discount:
          </h2>
          <span>{formattedPrice(discountValue)}</span>
        </div>
      ) : null}
      {zone && (
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold leading-tight tracking-tight">
            Delivery
          </h2>
          <span>{formattedPrice(zone?.fees)}</span>
        </div>
      )}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold leading-tight tracking-tight">
          Order total:
        </h2>
        <span>
          {zone
            ? formattedPrice(cartTotalAmount - discountValue + zone.fees)
            : formattedPrice(cartTotalAmount - discountValue)}
        </span>
      </div>
    </section>
  );
};

export default CartSummary;
