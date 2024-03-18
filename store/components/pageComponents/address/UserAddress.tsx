"use client";
import Wrapper from "@/components/Shared/Wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Address } from "@/types";
import { AddressStore } from "@/zustand/address-store";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  address: Address[] | null;
};

const UserAddress = ({ address }: Props) => {
  const router = useRouter();
  const { setAddress } = AddressStore();
  const handleClick = (add: Address) => {
    setAddress(add);
    router.push("/order/review");
  };
  return (
    <>
      {address?.map((add) => (
        <Card
          className="cursor-pointer"
          key={add?.id}
          onClick={() => handleClick(add)}
        >
          <CardHeader>
            <CardTitle>Address</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-2">
            <span className="text-gray-500">
              Building Number:
              <strong className="text-lg text-main"> {add?.BuildingNo}</strong>
            </span>
            <span className="text-gray-500">
              Street Name:
              <strong className="text-lg text-main"> {add?.streetName}</strong>
            </span>
            <span className="text-gray-500">
              Floor:
              <strong className="text-lg text-main"> {add.Floor}</strong>
            </span>
            <span className="text-gray-500">
              Apartment:
              <strong className="text-lg text-main"> {add.Floor}</strong>
            </span>
            <span className="text-gray-500">
              Zone:
              <strong className="text-lg text-main"> {add?.zone?.name}</strong>
            </span>
            <span className="text-gray-500">
              City:
              <strong className="text-lg text-main"> {add?.city}</strong>
            </span>
          </CardContent>
        </Card>
      ))}
      {/* <div className="my-2">
        <h4 className="text-xl text-center text-gray-400">
          Add new Address <Plus className="ml-2 w-5 h-5" />
        </h4>
      </div> */}
    </>
  );
};

export default UserAddress;
