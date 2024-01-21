import { DATE } from "@/actions/shared";
import { getData } from "@/fetchers";
import { CustomizedOrderColumn } from "@/types";
import React from "react";

import CustomOrderClient from "@/components/PageComponents/customized-order/client";

const OrdersPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const order = await getData("/special-order");

  const formattedOrders: CustomizedOrderColumn[] | null = order?.map(
    (item: CustomizedOrderColumn) => ({
      id: item?.id,
      email: item?.email,
      message: item?.message,
      phone: item?.phone,
      name: item?.name,
      image: item?.image,
      createdAt: DATE(item?.createdAt),
    })
  );
  return (
    <section>
      <div className="space-y-10">
        {formattedOrders && <CustomOrderClient data={formattedOrders} />}
      </div>
    </section>
  );
};

export default OrdersPage;
