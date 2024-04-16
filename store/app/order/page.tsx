import Heading from "@/components/Shared/Heading";
import OrderDetails from "@/components/order/OrderDetails";
import OrderForm from "@/components/order/OrderForm";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order",
};
const CheckOutPage = async () => {
  return (
    <section className="container space-y-5">
      <Heading title="Chechout" size="text-3xl" />
      <Separator />
      <div className="flex lg:flex-row  lg:justify-between flex-col-reverse w-full gap-3">
        <OrderForm />
        <OrderDetails />
      </div>
    </section>
  );
};

export default CheckOutPage;
