import Heading from "@/components/Shared/Heading";
import OrderReview from "@/components/pageComponents/order/OrderReview";
import React from "react";
const OrderReviewPage = () => {
  return (
    <section className="min-h-screen space-y-8 w-[95%] mx-auto">
      <Heading title="Order Review" size="text-3xl" />
      <OrderReview />
    </section>
  );
};

export default OrderReviewPage;
