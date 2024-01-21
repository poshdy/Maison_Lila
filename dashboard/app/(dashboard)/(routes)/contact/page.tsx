import { getData } from "@/fetchers";
import { ContactColumn } from "@/types";
import React from "react";
import ContactClient from "@/components/PageComponents/contact/client";

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
    <section>
      <div className="space-y-10">
        {formattedContact && <ContactClient data={formattedContact} />}
      </div>
    </section>
  );
};

export default Contact;
