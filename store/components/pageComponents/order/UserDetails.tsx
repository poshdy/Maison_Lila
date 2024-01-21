"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AddressStore } from "@/zustand/address-store";
import { useUser } from "@/zustand/user-store";
import React from "react";
import OrderAddress from "./OrderAddress";

type Props = {};

const UserDetails = (props: Props) => {
  const { address } = AddressStore();
  const { user } = useUser();
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>{user?.email}</CardDescription>
        </CardHeader>
      </Card>

      <OrderAddress address={address} />
    </section>
  );
};

export default UserDetails;
