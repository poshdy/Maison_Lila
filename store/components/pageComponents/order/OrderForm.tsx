"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/zustand/user-store";
import { useNoticationModel } from "@/zustand/notification-store";
import { useCart } from "@/zustand/cart-store";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Heading from "@/components/Shared/Heading";

import { Textarea } from "@/components/ui/textarea";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import OrderDetails from "./OrderDetails";
import { OrderFormValues, OrderSchema } from "@/Schemas";
import { Client } from "@/axiosClient";
import { AddressStore } from "@/zustand/address-store";
import { useErrorModel } from "@/zustand/error-store";
import { Button } from "@/components/ui/button";

const OrderForm = () => {
  const { user } = useUser();
  const { address } = AddressStore();
  const { Display } = useNoticationModel();
  const { Display: open } = useErrorModel();
  const { cartTotalAmount, ClearCart } = useCart();
  const form = useForm<OrderFormValues>({
    resolver: zodResolver(OrderSchema),
  });
  const onSubmit = async (data: OrderFormValues) => {
    const orderItems = useCart?.getState()?.items?.map((item) => {
      return {
        productId: item.id,
        quantity: item.quantity,
      };
    });
    try {
      const res = await Client.post("/order", {
        userId: user?.id,
        OrderTotal: cartTotalAmount + +address?.zone?.fees,
        orderItems,
        Subtotal: cartTotalAmount,
        DeliveryFee: +address.zone.fees,
        paymentMethod: "CASH",
        phone: data.phone,
        comment: data.comment,
        addressId: address?.id,
      });
      ClearCart();
      Display(
        "Your Order Placed Successfully",
        `Thank you for choosing MAISON LILA`,
        ``
      );
    } catch (error: any) {
      if (
        error.response.data.errorCode ==
        "Sorry Cinnamon rolls is currently out of stock"
      ) {
        open("Opps!", `${error.response.data.errorCode}`);
      } else {
        open("Opps!", "Something Please Try Again");
      }
    } finally {
      form.reset();
    }
  };

  return (
    <section className="space-y-4 pb-10 flex md:justify-between gap-3 w-full md:w-[50%]">
      <Form {...form}>
        <form
          className="gap-x-2 gap-y-6  w-full grid grid-cols-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="col-span-2 w-fit" {...field}>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel>Payment</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="CASH" />
                      </FormControl>
                      <FormLabel className="font-bold">
                        (COD) Cash on Delivery
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel>Special Note</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="any notes..?"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            variant={"action"}
            className="col-span-4 w-full"
            type="submit"
          >
            Place Order
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default OrderForm;
