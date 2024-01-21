import React from "react";
import { NAVITEMS } from "@/constants";
import Link from "next/link";
type Props = {};

const MenuTab = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-5 pt-4">
      {NAVITEMS.map((link) => (
        <Link className="hover:scale-105 transition-all duration-200 ease-in-out text-lg" href={`${link.path}`} key={link.name}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default MenuTab;
