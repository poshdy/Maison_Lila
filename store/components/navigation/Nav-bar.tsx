import React from "react";
import { CiSearch } from "react-icons/ci";
import Logo from "./Logo";
import { NAVITEMS } from "@/constants";
import Link from "next/link";
import MobileNav from "./Mobile-nav";


const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="hidden w-[80%] mx-auto md:flex justify-between items-center px-6 py-2">
        <Logo />
        <div className="flex items-center gap-5">
          <>
            {NAVITEMS?.map((link) => (
              <Link className="text-base" href={`${link.path}`} key={link.name}>
                {link.name}
              </Link>
            ))}
          </>
          <CiSearch />
        </div>
      </nav>
      <MobileNav />
    </header>
  );
};

export default Navbar;
