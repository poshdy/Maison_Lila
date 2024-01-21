"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Client } from "@/axiosClient";
import { useUser } from "@/zustand/user-store";
import UserOrders from "@/components/pageComponents/account/UserOrders";
import Heading from "@/components/Heading";
import UserPage from "@/components/Skeletons/UserPage";

const AccountPage = () => {
  const { user } = useUser();
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => await Client.get(`/auth/user/${user?.id}`),
    refetchOnWindowFocus: false,
    enabled: !!user?.id,
  });
  if (error) {
   throw new Error("something went wrong")
  }
  if (isLoading) {
    return <UserPage />;
  }
  return (
    <section className="min-h-screen">
      <Heading title="Your orders" />
      {data &&
        data?.data?.order?.map((order: any) => (
          <UserOrders key={order.id} order={order} />
        ))}
    </section>
  );
};

export default AccountPage;
