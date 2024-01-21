import Heading from "@/components/Heading";
import OrderReview from "@/components/pageComponents/order/OrderReview";
import React from "react";
const OrderReviewPage = () => {
  return (
    <section className="min-h-screen space-y-20 mt-2 w-full px-4">
      <Heading title="Order Review" />
      <OrderReview />
    </section>
  );
};

export default OrderReviewPage;
