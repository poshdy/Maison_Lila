import { DATE } from "@/actions/shared";
import { getData } from "@/fetchers";
import { CustomizedOrderColumn } from "@/types";
import React from "react";

import CustomOrderClient from "@/components/PageComponents/customized-order/client";
import Wrapper from "@/components/ui/wrapper";

const OrdersPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const order = await getData("/custom-order");

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
    <Wrapper>
      {formattedOrders && <CustomOrderClient data={formattedOrders} />}
    </Wrapper>
  );
};

export default OrdersPage;
