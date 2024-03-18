import React from "react";
import { NAVITEMS } from "@/constants";
import Link from "next/link";

const MenuTab = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {NAVITEMS.map((link) => (
        <Link
          className="text-xl font-bold"
          scroll
          href={`${link.path}`}
          key={link.name}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default MenuTab;
