"use client";
import CartProduct from "@/components/pageComponents/cart/CartProduct";
import CartSummary from "@/components/pageComponents/cart/CartSummary";
import { useCart } from "@/zustand/cart-store";
import React, { useEffect, useState } from "react";
import CouponForm from "@/components/pageComponents/cart/CouponForm";
import Empty from "@/components/Empty";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuthModel } from "@/zustand/auth-store";
import { useUser } from "@/zustand/user-store";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { items, cartTotalAmount } = useCart();
  const { push } = useRouter();
  const { user } = useUser();
  const { onOpen } = useAuthModel();

  const handleClick = () => {
    if (!user) {
      onOpen();
    } else {
      console.log(user?.id);
      push(`/order/shipping-info/${user?.id}`);
    }
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {items && items?.length <= 0 ? (
        <Empty title="Your Cart Is Empty" text="Start shopping to fill it up!" action="GO SHOPPING"/>
      ) : (
        <section className="min-h-screen space-y-20 mt-2 w-full px-4">
          <div className="space-y-4 max-h-[40vh] overflow-y-scroll">
            {items &&
              items?.map((item) => (
                <CartProduct key={item?.id} product={item} />
              ))}
          </div>
          <CouponForm SubTotal={cartTotalAmount} />
          <div className="space-y-2 sticky bottom-20 w-full">
            <CartSummary />
            <Button onClick={handleClick} variant={"action"} className="w-full">
              Checkout
            </Button>
          </div>
        </section>
      )}
    </>
  );
};

export default CartPage;
