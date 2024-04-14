"use client";
import Empty from "@/components/Shared/Empty";
import Heading from "@/components/Shared/Heading";
import { useCart } from "@/zustand/cart-store";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import Wrapper from "@/components/Shared/Wrapper";
import { Separator } from "@/components/ui/separator";
import CartSummary from "./CartSummary";
const Cart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  const { items } = useCart();

  if (!mounted) {
    return null;
  }
  return (
    <Wrapper>
      <Heading
        title="Shopping Cart"
        size="md:text-3xl md:text-left text-2xl text-center"
      />
      {items?.length <= 0 ? (
        <Empty
          title="Your Cart Is Empty"
          text="Start shopping to fill it up!"
          action="GO SHOPPING"
        />
      ) : (
        <section className="flex flex-col space-y-3 gap-x-6 md:flex-row md:justify-between">
          <div className="space-y-6 flex flex-col  w-full">
            {items?.map((item) => (
              <div className="space-y-6 flex flex-col  w-full md:w-[60%]">
                <Separator />
                <CartItem product={item} key={item?.id} />
                <Separator />
              </div>
            ))}
          </div>

          {items && <CartSummary action="" title="Cart Summary" />}
        </section>
      )}
    </Wrapper>
  );
};

export default Cart;
