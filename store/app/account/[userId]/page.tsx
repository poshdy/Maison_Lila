import React from "react";
import UserOrders from "@/components/account/UserOrders";
import Heading from "@/components/Shared/Heading";
import UserPage from "@/components/Skeletons/UserPage";
import { getData } from "@/fetchers";

const AccountPage = async ({ params }: { params: { userId: string } }) => {
  const data = await getData(`user/${params?.userId}/orders`);
  return (
    <section className="min-h-screen container">
      <Heading title="Your orders" size="text-3xl" />
      {data &&
        data?.order?.map((order: any) => (
          <UserOrders key={order.id} order={order} />
        ))}
    </section>
  );
};

export default AccountPage;
