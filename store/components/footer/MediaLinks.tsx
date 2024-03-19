import { getData } from "@/fetchers";
import { FacebookIcon, InstagramIcon } from "lucide-react";
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
  console.log(links);
  return (
    <div className="flex flex-col items-center gap-1 font-semibold">
      <Link className={"text-sm"} href={links[0].facebook}>
        <FacebookIcon size={20} />
      </Link>
      <Link href={links[0].instagram}>
        <InstagramIcon size={20} />
      </Link>
      <h3>{links[0].phone}</h3>
    </div>
  );
};

export default MediaLinks;
