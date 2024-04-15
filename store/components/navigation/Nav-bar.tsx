import Logo from "./Logo";
import { NAVITEMS } from "@/constants";
import Link from "next/link";
import MobileNav from "./mobile/Mobile-nav";
import SearchSheet from "../SearchSheet";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="hidden w-[90%] mx-auto md:flex justify-between items-center px-6 py-2">
        <Logo />
        <div className="flex items-center gap-5">
          {NAVITEMS?.map((link) => (
            <Link className="text-base" href={`${link.path}`} key={link.name}>
              {link.name}
            </Link>
          ))}
          <SearchSheet color="text-text" />
        </div>
      </nav>
      <MobileNav />
    </header>
  );
};

export default Navbar;
