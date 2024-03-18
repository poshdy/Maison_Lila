import { getDataById } from "@/fetchers";
import { OrderDeatils } from "@/types";
import Wrapper from "@/components/Shared/Wrapper";
import OrderDetails from "@/components/pageComponents/order-details/orderDetails";
import OrderItems from "@/components/pageComponents/order-details/OrderItems";
import OrderSummary from "@/components/pageComponents/order-details/OrderSummary";
import Heading from "@/components/Shared/Heading";
import Header from "@/components/pageComponents/order-details/Header";
import OrderStatus from "@/components/pageComponents/order-details/OrderStatus";
import React from "react";
const OrderDetailsPage = async ({ params }: { params: { orderId: string } }) => {
  const order: OrderDeatils | null = await getDataById(
    `order`,
    params?.orderId
  );

  return (
    <Wrapper>
      {order && (
        <>
          <Header
            status={order?.orderStatus}
            name={order?.user?.name}
            id={order?.id}
          />
          <OrderStatus status={order?.orderStatus} />
          <OrderDetails order={order} />
          <Heading title="Order Items" size="text-3xl"/>
          {order?.OrderItems?.map((item) => (
            <OrderItems key={item.quantity} order={item} />
          ))}
          <OrderSummary order={order?.orderSummary} />
        </>
      )}
    </Wrapper>
  );
};

export default OrderDetailsPage;
