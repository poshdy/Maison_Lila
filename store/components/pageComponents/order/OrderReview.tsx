"use client";

import CartProduct from "@/components/pageComponents/cart/CartItem";
import CartSummary from "@/components/pageComponents/cart/CartSummary";
import OrderAddress from "@/components/pageComponents/order/OrderAddress";
import { AddressStore } from "@/zustand/address-store";
import { useCart } from "@/zustand/cart-store";

const OrderReview = () => {
  const { items } = useCart();
  const { address } = AddressStore();
  return (
    <section className="space-y-4">
      <div className="space-y-4">
        {items &&
          items?.map((item) => <CartProduct key={item?.id} product={item} />)}
      </div>
      <OrderAddress address={address} />
      <CartSummary title="Continue" action="/order" zone={address?.zone} />
    </section>
  );
};

export default OrderReview;
