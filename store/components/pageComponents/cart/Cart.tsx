"use client";
import Empty from "@/components/Shared/Empty";
import Heading from "@/components/Shared/Heading";
import { useCart } from "@/zustand/cart-store";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import CartSummary from "./CartSummary";
import { useUser } from "@/zustand/user-store";

const Cart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  const { items } = useCart();
  const { user } = useUser();
  if (!mounted) {
    return null;
  }
  return (
    <>
      {items?.length <= 0 ? (
        <Empty
          title="Your Cart Is Empty"
          text="Start shopping to fill it up!"
          action="GO SHOPPING"
        />
      ) : (
        <section className="space-y-2 w-[90%] mx-auto relative">
          <Heading size="text-2xl text-left" title="Shopping Cart" />
          {items?.map((item) => (
            <CartItem product={item} key={item?.id} />
          ))}
          <CartSummary
            title="Checkout"
            action={`order/shipping-info/${user?.id}`}
          />
        </section>
      )}
    </>
  );
};

export default Cart;
