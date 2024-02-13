import React from "react";
import { Home } from "lucide-react";
import CartDrawer from "../pageComponents/cart/CartDrawer";
import OrderButton from "./OrderButton";
import AuthSheet from "../Auth/AuthSheet";
import SearchSheet from "../SearchSheet";
import Link from "next/link";

const MobileBottomNav = () => {
  return (
    <section className="md:hidden fixed bottom-0 text-white w-full h-14 z-10 shadow-md bg-black">
      <div className="flex items-center text-[25px] px-3 justify-between">
        <Link href={"/"}>
          <Home className="cursor-pointer" />
        </Link>
        <AuthSheet />
        <OrderButton />
        <SearchSheet />
        <CartDrawer />
      </div>
    </section>
  );
};

export default MobileBottomNav;
