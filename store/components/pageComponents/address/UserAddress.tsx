"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Address } from "@/types";
import { AddressStore } from "@/zustand/address-store";
import { Plus } from "lucide-react";
import React from "react";

type Props = {
  address: Address[] | null;
};

const UserAddress = ({ address }: Props) => {
  console.log(address)
  const { setAddress } = AddressStore();
  return (
    <>
      {address?.map((add) => (
        <Card key={add?.id} onClick={() => setAddress(add)}>
          <CardHeader>
            <CardTitle>Address</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-2">
            {add.streetNumber} {add.BuildingNo} {add.Floor} {add.apartmenNo}
            {add?.zone?.name} {add.city}
          </CardContent>
        </Card>
      ))}
      <h4 className="text-2xl text-gray-400">
        Add new Address <Plus className="ml-2 w-5 h-5" />
      </h4>
    </>
  );
};

export default UserAddress;
