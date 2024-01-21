import { DATE } from "@/actions/shared";
import { OrderColumn } from "@/types";
import React from "react";
import OrderClient from "@/components/PageComponents/order/client";
import { Server } from "@/axiosInstanceServer";

const OrdersPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  console.log(searchParams.page);
  const data = await Server.get(`/order?page=${searchParams.page || "1"}`);
  const order = data?.data;
  const formattedOrders: OrderColumn[] | null = order?.map(
    (item: OrderColumn) => ({
      id: item?.id,
      zone: item?.zone?.name,
      paymentMethod: item?.orderSummary?.paymentMethod,
      email: item?.user?.email,
      total: item?.orderSummary?.OrderTotal,
      orderStatus: item?.orderStatus,
      createdAt: DATE(item?.createdAt),
    })
  );
  return (
    <section>
      <div className="space-y-10">
        {formattedOrders && (
          <OrderClient page={searchParams.page} data={formattedOrders} />
        )}
      </div>
    </section>
  );
};

export default OrdersPage;
