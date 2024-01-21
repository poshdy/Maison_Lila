import { OrderFormValues } from "@/Schemas";
import { Client } from "@/axiosClient";
import { AddressStore } from "@/zustand/address-store";
import { useCart } from "@/zustand/cart-store";

const orderItems = useCart?.getState()?.items?.map((item) => {
  return {
    productId: item.id,
    quantity: item.quantity,
  };
});

export const PlaceOrder = async (
  cartTotalAmount: number,
  data: OrderFormValues,
  discountValue: number,
  subtotal: number,
  userId: string | undefined
) => {
  const res = await Client.post("/order", {
    userId,
    OrderTotal: cartTotalAmount,
    orderItems,
    Subtotal: subtotal,
    Discount: discountValue,
    paymentMethod: "CASH",
    phone: data.phone,
    comment: data.comment,
    addressId: AddressStore?.getState()?.address?.id,
  });

  return res;
};
