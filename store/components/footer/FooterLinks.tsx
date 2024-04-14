import { NAVITEMS } from "@/constants";
import React from "react";
import Link from "next/link";
const FooterLinks = () => {
  return (
    <div className="flex flex-col">
      {NAVITEMS.map((n) => (
        <Link
          className="text-gray-400"
          key={n.name}
          href={`${n.path}`}
        >
          {n.name}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
