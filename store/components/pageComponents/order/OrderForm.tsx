"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/zustand/user-store";
import { useNoticationModel } from "@/zustand/notification-store";
import { useCart } from "@/zustand/cart-store";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Heading from "@/components/Heading";

import { Textarea } from "@/components/ui/textarea";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { PlaceOrder } from "./place-order";
import OrderDetails from "./OrderDetails";
import { OrderFormValues, OrderSchema } from "@/Schemas";

const OrderForm = () => {
  const router = useRouter();
  const { user } = useUser();
  const { onOpen } = useNoticationModel();
  const { subtotal, discountValue, cartTotalAmount, removeAll } = useCart();
  const form = useForm<OrderFormValues>({
    resolver: zodResolver(OrderSchema),
  });

  const onSubmit = async (data: OrderFormValues) => {
    try {
      const res = await PlaceOrder(
        cartTotalAmount,
        data,
        discountValue,
        subtotal,
        user?.id
      );

      removeAll();
      router.push(`/order/${res?.data?.id}`);
      onOpen(
        "Your Order Placed Successfully",
        `Thank you for choosing MAISON LILA`
      );
    } catch (error: any) {
      if (error.response.data.errorCode) {
        onOpen(`${error.response.data.errorCode}`, "Opps!");
      } else {
        onOpen("Opps!", "Something Please Try Again");
      }
    } finally {
      form.reset();
    }
  };

  return (
    <section className="space-y-6">
      <Heading title="Checkout" />
      <Form {...form}>
        <form
          className="gap-x-2 gap-y-6  w-full grid grid-cols-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="col-span-2" {...field}>
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
      <OrderDetails />
    </section>
  );
};

export default OrderForm;
