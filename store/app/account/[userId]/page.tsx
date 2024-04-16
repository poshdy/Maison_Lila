import React from "react";
import UserOrders from "@/components/account/UserOrders";
import Heading from "@/components/Shared/Heading";
import { getData } from "@/fetchers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account"
};
const AccountPage = async ({ params }: { params: { userId: string } }) => {
  const data = await getData(`user/${params?.userId}/orders`);
  console.log(data)
  return (
    <section className="container space-y-4">
      <Heading title="Your orders" size="text-3xl" />
      {
        data[0].order?.map((order: any) => (
          <UserOrders key={order.id} order={order} />
        ))}
    </section>
  );
};

export default AccountPage;

