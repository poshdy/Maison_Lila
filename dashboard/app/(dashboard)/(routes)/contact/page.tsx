import { getData } from "@/fetchers";
import { ContactColumn } from "@/types";
import React from "react";
import ContactClient from "@/components/PageComponents/contact/client";
import Wrapper from "@/components/ui/wrapper";

type Props = {};

const Contact = async (props: Props) => {
  const data = await getData("/contact");
  const formattedContact: ContactColumn[] | null = data?.map(
    (item: ContactColumn) => ({
      id: item?.id,
      email: item?.email,
      facebook: item?.facebook,
      instagram: item?.instagram,
      phone: item?.phone,
      tiktok: item?.tiktok,
    })
  );
  return (
    <Wrapper>
      {formattedContact && <ContactClient data={formattedContact} />}
    </Wrapper>
  );
};

export default Contact;
