import OrderForm from "@/components/pageComponents/order/OrderForm";
import UserDetails from "@/components/pageComponents/order/UserDetails";
import { Separator } from "@/components/ui/separator";

import React from "react";
const CheckOutPage = async () => {
  return (
    <section className="w-[90%] mx-auto space-y-5">
      <UserDetails />
      <Separator />
      <OrderForm />
    </section>
  );
};

export default CheckOutPage;
