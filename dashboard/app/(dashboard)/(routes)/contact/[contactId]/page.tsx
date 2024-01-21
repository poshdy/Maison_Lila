import { getDataById } from "@/fetchers";
import React from "react";
import ContactForm from "@/components/Forms/ContactForm";

const ContactPage = async ({ params }: { params: { contactId: string } }) => {
  const contact = await getDataById("/contact", params.contactId);
  return (
    <section>
      <ContactForm initialData={contact} />
    </section>
  );
};

export default ContactPage;
