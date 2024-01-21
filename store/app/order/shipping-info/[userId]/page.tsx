import Heading from "@/components/Heading";
import AddressForm from "@/components/pageComponents/address/AddressForm";
import UserAddress from "@/components/pageComponents/address/UserAddress";
import { getData, getDataById } from "@/fetchers";
import { Address, Zone } from "@/types";
import React from "react";

const UserShippingInfoPage = async ({
  params,
}: {
  params: { userId: string };
}) => {
  console.log(params.userId)
  const zone: Zone[] | null = await getData("zone");
  const address: Address[] | null = await getDataById(
    "auth/user/address",
    params.userId
  );
  return (
    <>
      <Heading title="SHIPPING INFO" />

      {address && address?.length > 0 ? (
        <UserAddress address={address} />
      ) : (
        <AddressForm zone={zone!!} />
      )}
    </>
  );
};

export default UserShippingInfoPage;
