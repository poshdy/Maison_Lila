import { DATE, formattedPrice } from "@/actions/shared";
import { OrderColumn } from "@/types";
import React from "react";
import OrderClient from "@/components/PageComponents/order/client";
import { Server } from "@/axiosInstanceServer";
import Wrapper from "@/components/ui/wrapper";
import { getData } from "@/fetchers";

const OrdersPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const orders = await getData("/order");
  const formattedOrders: OrderColumn[] | null = orders?.map(
    (item: OrderColumn) => ({
      id: item?.id,
      zone: item?.Address?.zone?.name,
      paymentMethod: item?.OrderSummary?.paymentMethod,
      email: item?.user?.email,
      total: formattedPrice(item?.OrderSummary?.OrderTotal),
      orderStatus: item?.orderStatus,
      createdAt: DATE(item?.createdAt),
    })
  );
  return (
    <Wrapper>
      {formattedOrders && (
        <OrderClient page={searchParams.page} data={formattedOrders} />
      )}
    </Wrapper>
  );
};

export default OrdersPage;
