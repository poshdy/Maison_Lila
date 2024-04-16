import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormMessage,
  FormItem,
  FormLabel,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { CouponFormValue, couponSchema } from "@/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/zustand/user-store";
import { Client } from "@/axiosClient";
import { Input } from "../ui/input";
import { useCart } from "@/zustand/cart-store";
import { Button } from "../ui/button";
import { useErrorModel } from "@/zustand/error-store";

const CouponForm = () => {
  const { user } = useUser();
  const { Display } = useErrorModel();
  const { cartTotalAmount, applyDiscount } = useCart();
  const form = useForm<CouponFormValue>({
    resolver: zodResolver(couponSchema),
    defaultValues: {
      couponCode: "",
    },
  });
  const onSubmit = async (data: CouponFormValue) => {
    try {
      const res = await Client.post("/order/apply-coupon", {
        couponCode: data.couponCode,
        orderTotal: cartTotalAmount,
        userId: user?.id,
      });
      applyDiscount(res?.data?.discount);
    } catch (error) {
      const { errorCode } = error?.response?.data;
      if (errorCode.includes("used before")) {
        Display(
          "Invalid Coupon",
          `Sorry, ${user?.name} this coupon is used by you`
        );
      }
      if (errorCode.includes("Please")) {
        Display("Add More!", `${errorCode}`);
      }

    }
  };
  return (
    <Form {...form}>
      <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="couponCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Coupon</FormLabel>
              <FormControl>
                <Input placeholder="first50..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" variant="main">
          Apply Coupon
        </Button>
      </form>
    </Form>
  );
};

export default CouponForm;
