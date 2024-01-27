"use client";

import CartProduct from "@/components/pageComponents/cart/CartProduct";
import CartSummary from "@/components/pageComponents/cart/CartSummary";
import { AddressStore } from "@/zustand/address-store";
import { useCart } from "@/zustand/cart-store";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import OrderAddress from "@/components/pageComponents/order/OrderAddress";
import { Card, CardHeader } from "@/components/ui/card";
type Props = {};

const OrderReview = (props: Props) => {
  const { items } = useCart();
  const { address } = AddressStore();
  const { push } = useRouter();
  return (
    <>
      <div className="space-y-4 max-h-[40vh] overflow-y-scroll">
        {items &&
          items?.map((item) => <CartProduct key={item?.id} product={item} />)}
      </div>
      <OrderAddress address={address} />
      <Card className="space-y-2  w-full">
        <CartSummary zone={address?.zone} />
      </Card>
        <Button
          onClick={() => push("/order")}
          variant={"action"}
          className="w-full"
        >
          Continue
        </Button>
    </>
  );
};

export default OrderReview;
