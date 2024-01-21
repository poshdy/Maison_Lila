import Heading from "@/components/Heading";
import { formattedPrice } from "@/lib/utils";
import { useCart } from "@/zustand/cart-store";
import React, { useEffect, useState } from "react";

const OrderDetails = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const { subtotal, cartTotalAmount, discountValue } = useCart();

  if (!isClient) {
    return null;
  }

  return (
    <section className="flex px-4 flex-col gap-1">
      <Heading size="text-2xl" title="Order Summary" />
      <div className="flex justify-between items-center">
        <h3 className="text-sm text-gray-500">SubTotal</h3>
        <h3 className="font-bold text-lg"> {formattedPrice(+subtotal)}</h3>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-sm text-gray-500">Discount</h3>
        <h3 className="font-bold text-lg text-green-900"> {discountValue && formattedPrice(+discountValue)}</h3>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-sm text-gray-500">OrderTotal</h3>
        <h3 className="font-bold text-lg">
          {discountValue
            ? formattedPrice(+cartTotalAmount - discountValue)
            : formattedPrice(+cartTotalAmount)}
        </h3>
      </div>
    </section>
  );
};

export default OrderDetails;
