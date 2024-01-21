import OrderForm from "@/components/pageComponents/order/OrderForm";
import UserDetails from "@/components/pageComponents/order/UserDetails";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/Wrapper";
import React from "react";
const CheckOutPage = async () => {
  return (
    <Wrapper>
      <UserDetails />
      <Separator />
      <OrderForm />
    </Wrapper>
  );
};

export default CheckOutPage;
