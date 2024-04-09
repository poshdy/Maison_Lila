import Heading from "@/components/Shared/Heading";
import AddressForm from "@/components/pageComponents/address/AddressForm";
import UserAddress from "@/components/pageComponents/address/UserAddress";
import { getData } from "@/fetchers";
import { Address, Zone } from "@/types";
import React from "react";
import Wrapper from "@/components/Shared/Wrapper";
const UserShippingInfoPage = async ({
  params,
}: {
  params: { userId: string };
}) => {
  const zone: Zone[] | null = await getData("zone");
  const address: Address[] | null = await getData(
    `user/${params?.userId}/addresses`
  )
  return (
    <Wrapper>
      <Heading title="Shipping info" size="text-3xl" />
      {address && address?.length > 0 ? (
        <UserAddress address={address} />
      ) : (
        <AddressForm zone={zone!!} />
      )}
    </Wrapper>
  );
};

export default UserShippingInfoPage;
