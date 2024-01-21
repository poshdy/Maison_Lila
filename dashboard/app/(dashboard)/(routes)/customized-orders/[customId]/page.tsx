import { Heading } from "@/components/Heading";
import { getDataById } from "@/fetchers";
import React from "react";
import { CustomizedOrderColumn } from "@/types";
import CustomOrderDetails from "./CustomOrderDetails";

const OrderDetails = async ({ params }: { params: { customId: string } }) => {
  const orderDetails: CustomizedOrderColumn = await getDataById(
    "/special-order",
    params.customId
  );
  return (
    <section className="space-y-5 flex flex-col items-center">
      <div className="self-start">
        <Heading
          title="Custom Order Details"
          description="view order details"
        />
      </div>
      <CustomOrderDetails data={orderDetails} />
    </section>
  );
};

export default OrderDetails;
