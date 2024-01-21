import React from "react";
import { Menu } from "lucide-react";
import Logo from "./Logo";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetHeader,
  SheetFooter,
} from "@/components/ui/sheet";
import Tab from "./tabs";
import CartDrawer from "../pageComponents/cart/CartDrawer";

type Props = {};

const MobileNav = (props: Props) => {
  return (
    <nav className="flex justify-between p-2 items-center w-full md:hidden">
      <CartDrawer />
      <Logo />
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="w-8 text-black aspect-square" />
        </SheetTrigger>
        <SheetContent className="h-full space-y-4 flex flex-col justify-between">
          <section className="space-y-3">
            <SheetHeader>
              <SheetTitle>MAISON LILA</SheetTitle>
            </SheetHeader>
            <Tab />
          </section>
          <SheetFooter>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <h4>Facebook</h4>
              <h4>Instagram</h4>
              <h4>01016908226</h4>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
