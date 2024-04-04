import React from "react";
import { Home, ShoppingBag } from "lucide-react";
import OrderButton from "./OrderButton";
import AuthSheet from "../../Auth/AuthSheet";
import SearchSheet from "../../SearchSheet";
import Link from "next/link";

const MobileBottomNav = () => {
  return (
    <section className="md:hidden fixed bottom-2 left-5 w-[90%]  rounded-full h-16 z-10 shadow-md bg-black">
      <div className="flex items-center justify-between px-4">
        <Link href={"/"}>
          <Home className="cursor-pointer w-6 h-6 text-white" />
        </Link>
        <AuthSheet />
        <OrderButton />
        <SearchSheet color="text-white" />
        <Link href={"/cart"}>
          <ShoppingBag className="cursor-pointer w-6 h-6 text-white" />
        </Link>
      </div>
    </section>
  );
};

export default MobileBottomNav;
