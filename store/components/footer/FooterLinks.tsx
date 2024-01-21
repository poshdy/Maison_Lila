import { NAVITEMS } from "@/constants";
import React from "react";
import Link from "next/link";
type Props = {};

const FooterLinks = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="font-bold text-base md:text-lg hidden md:flex">Navigation</h3>
      {NAVITEMS.map((n) => (
        <Link
          className="hover:scale-105 transition-all text-sm hover:font-semibold duration-100 ease-in-out"
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
