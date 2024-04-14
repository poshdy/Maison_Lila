import { getData } from "@/fetchers";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import React from "react";

type Links = {
  id: string;
  facebook: string;
  instagram: string;
  phone: string;
  email: string;
};
const MediaLinks = async () => {
  const links: Links = await getData("contact");
  return (
    <div className="text-gray-300 flex items-start gap-2">
      <Link className={"text-sm"} href={links[0].facebook}>
        <FaFacebookF size={22} />
      </Link>
      <Link href={links[0].instagram}>
        <FaInstagram size={22} />
      </Link>
      <h3>{links[0].phone}</h3>
    </div>
  );
};

export default MediaLinks;
