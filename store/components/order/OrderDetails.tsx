"use client";
import Currency from "@/components/Shared/Currency";
import Heading from "@/components/Shared/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AddressStore } from "@/zustand/address-store";
import { useCart } from "@/zustand/cart-store";
import React, { useEffect, useState } from "react";
import CartItem from "../cart/CartItem";

const OrderDetails = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const { cartTotalAmount, items } = useCart();
  const { address } = AddressStore();
  if (!isClient) {
    return null;
  }

  return (
    <section className="bg-gray-100 rounded-lg flex flex-col justify-between space-y-3 p-5 md:w-[40%] w-full">
      <div>
        <Heading title="Order Summary" size="text-xl font-bold text-left" />
        <div className="space-y-6 flex flex-col  w-full">
          {items?.map((item) => (
            <div className="space-y-6 flex flex-col w-full">
              <Separator />
              <CartItem product={item} key={item?.id} />
              <Separator />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between w-full">
          <Heading title="Cart-total" size="text-md font-semibold" />
          <Currency price={cartTotalAmount} />
        </div>
        <div className="flex items-center justify-between w-full">
          <Heading title="Shipping" size="text-md font-semibold" />
          <Currency price={address?.zone?.fees} />
        </div>
        <div className="flex items-center justify-between w-full">
          <Heading title="Total-order" size="text-md font-semibold" />
          <Currency price={+address?.zone?.fees + +cartTotalAmount} />
        </div>
      </div>

      {/* <Button variant="action" className="w-full  text-white ">
        Chechout
      </Button> */}
    </section>
  );
};

export default OrderDetails;

{
  /* <section className="flex px-4 flex-col gap-1">
      <Heading size="text-2xl" title="Order Summary" />
      <div className="flex justify-between items-center">
        <h3 className="text-sm text-gray-500">SubTotal</h3>
        <h3 className="font-bold text-lg"> {formattedPrice(+cartTotalAmount)}</h3>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-sm text-gray-500">Delivery Fees</h3>
        <h3 className="font-bold text-lg">
          {formattedPrice(address?.zone?.fees)}
        </h3>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-sm text-gray-500">OrderTotal</h3>
        <h3 className="font-bold text-lg">
          {formattedPrice(+cartTotalAmount + +address?.zone?.fees)}
        </h3>
      </div>
    </section> */
}
