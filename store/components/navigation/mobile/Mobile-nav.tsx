import React from "react";
import { Menu } from "lucide-react";
import Logo from "../Logo";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import Tab from "../Tabs/tabs";
import CartDrawer from "../../pageComponents/cart/CartDrawer";
import Wrapper from "../../Shared/Wrapper";

const MobileNav = () => {
  return (
    <Wrapper>
      <nav className="flex p-2 items-center justify-between  md:hidden">
        <CartDrawer />
        <Logo />
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="cursor-pointer w-6 h-6 text-text" />
          </SheetTrigger>
          <SheetContent className="w-[90%]">
            <section className="p-4 space-y-3">
              <SheetHeader>
                <SheetTitle className="text-3xl">MAISON LILA</SheetTitle>
              </SheetHeader>
              <Tab />
            </section>
          </SheetContent>
        </Sheet>
      </nav>
    </Wrapper>
  );
};

export default MobileNav;
