import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormItem,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { CouponFormValue, couponSchema } from "@/Schemas/index";
import { Client } from "@/axiosClient";
import { useUser } from "@/zustand/user-store";
import { useNoticationModel } from "@/zustand/notification-store";
import { useCart } from "@/zustand/cart-store";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
type Props = {
  SubTotal: number;
};

const CouponForm = ({ SubTotal }: Props) => {
  const router = useRouter();
  const [message, Setmessage] = useState("");
  const { user } = useUser();
  const { applyCoupon } = useCart();
  const { onOpen } = useNoticationModel();
  const form = useForm<CouponFormValue>({
    resolver: zodResolver(couponSchema),
  });
  const onSubmit = async (data: CouponFormValue) => {
    try {
      if (!user) {
        onOpen(
          "Create Account to be able to use our coupons and place orders",
          "Create Account"
        );
      }
      const res = await Client.post("/order/apply-coupon", {
        coupon: data?.name,
        totalOrder: SubTotal,
        userId: user?.id,
      });
      if (res.data == "this coupon has expired") {
        Setmessage("Sorry this coupon has expired");
      }
      if (res.data) {
        console.log(res.data);
        applyCoupon(res.data.discountValue);
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      form.reset();
      router.refresh();
    }
  };
  return (
    <Form {...form}>
      <form
        className="w-full rounded-2xl flex justify-around bg-gray-100 p-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Promo code"
                  type="text"
                  className="bg-transparent border-none outline-none "
                />
              </FormControl>
              <span className="text-red-400">{message && message}</span>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant={"action"}
        >
          Apply
        </Button>
      </form>
    </Form>
  );
};

export default CouponForm;
