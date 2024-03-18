"use client";
import React, { useEffect, useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/zustand/cart-store";
import Cart from "./Cart";

const CartDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="relative">
        <ShoppingBag className="cursor-pointer w-6 h-6 text-text" />
      </DrawerTrigger>
      <DrawerContent className="h-[95vh] ">
        <Cart />
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
{
  /* <span className="bg-black w-4 h-4 absolute top-0 right-[-6px] text-xs rounded-full text-white">
{items?.length}
</span> */
}
