import { Heading } from "@/components/Heading";
import { getDataById } from "@/fetchers";
import React from "react";
import CustomerDetails from "@/components/PageComponents/order-details/CustomerDetails";
import OrderSummary from "@/components/PageComponents/order-details/OrderSummary";
import { OrderDeatils } from "@/types";
import OrderAddress from "@/components/PageComponents/order-details/OrderAddress";
import ProductTable from "@/components/PageComponents/order-details/ProductTable";
import OrderStatus from "@/components/PageComponents/order-details/OrderStatus";


const OrderDetails = async ({ params }: { params: { orderId: string } }) => {
  const orderDetails: OrderDeatils = await getDataById(
    "/order",
    params.orderId
  );
  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between ">

      <Heading title="Order Details" description="view order details" />
      <OrderStatus status={orderDetails?.orderStatus}/>
      </div>
      <section className="flex gap-4">
        <OrderSummary summary={orderDetails} />
        <OrderAddress address={orderDetails} />
        <CustomerDetails details={orderDetails} />
      </section>
      <section className="bg-white rounded-md p-1">
        <ProductTable Product={orderDetails.OrderItems} />
      </section>
    </section>
  );
};

export default OrderDetails;
