"use client";
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
  const router = useRouter()
  const { setAddress } = AddressStore();
  const handleClick = (add:Address)=>{
    setAddress(add)
    router.push("/review")
  }
  return (
    <div className="px-2">
      {address?.map((add) => (
        <Card key={add?.id} onClick={()=>handleClick(add)}>
          <CardHeader>
            <CardTitle>Address</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-2">
            {add.streetNumber} {add.BuildingNo} {add.Floor} {add.apartmenNo}
            {add?.zone?.name} {add.city}
          </CardContent>
        </Card>
      ))}
      <div className="my-2">
        <h4 className="text-xl text-center text-gray-400">
          Add new Address <Plus className="ml-2 w-5 h-5" />
        </h4>
      </div>
    </div>
  );
};

export default UserAddress;
