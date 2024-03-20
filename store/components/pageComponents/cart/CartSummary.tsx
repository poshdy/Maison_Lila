import Currency from "@/components/Shared/Currency";
import ChechOutButton from "@/components/Shared/ChechOutButton";
import Heading from "@/components/Shared/Heading";
import { useCart } from "@/zustand/cart-store";
import React, { useEffect } from "react";
import { Zone } from "@/types";

type Props = {
  zone?: Zone;
  title: string;
  action: string;
};

const CartSummary = ({ zone, action, title }: Props) => {
  const { items, cartTotalAmount, calculateTotalPrice } = useCart();
  useEffect(() => {
    calculateTotalPrice();
  }, [items, calculateTotalPrice]);


  return (
    <section className="flex flex-col space-y-4 w-full items-center p-4 justify-between bg-gray-200 z-30 fixed bottom-0 left-0">
      <div className="flex items-center justify-between w-full">
        <Heading title="Cart Total" size="text-lg font-bold" />
        <Currency price={cartTotalAmount} />
      </div>
      <div className="flex items-center justify-between w-full">
        <Heading title="Delivery Fees" size="text-lg font-bold" />
        {zone && <Currency price={zone?.fees} />}
      </div>
      <ChechOutButton title={title} action={action} />
    </section>
  );
};

export default CartSummary;
