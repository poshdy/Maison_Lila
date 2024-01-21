"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ShoppingBagIcon } from "lucide-react";
import { useCart } from "@/zustand/cart-store";
import CartProduct from "./CartProduct";
import CartSummary from "./CartSummary";
import Empty from "../../Empty";
import { useAuthModel } from "@/zustand/auth-store";
import { useUser } from "@/zustand/user-store";
import { useRouter } from "next/navigation";

const CartDrawer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { items } = useCart();
  const { push } = useRouter();
  const { user } = useUser();
  const { onOpen } = useAuthModel();

  const handleClick = () => {
    if (!user) {
      onOpen();
    } else {
      push(`/order/shipping-info/${user?.id}`);
    }
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Drawer>
      <DrawerTrigger className="relative">
        {items?.length > 0 && (
          <span className="bg-black w-4 h-4 absolute top-0 right-[-6px] text-xs rounded-full text-white">
            {items?.length}
          </span>
        )}
        <ShoppingBagIcon className="cursor-pointer" />
      </DrawerTrigger>
      <DrawerContent className="h-screen ">
        {items.length <= 0 ? (
          <Empty />
        ) : (
          <>
            <div className="mx-auto w-full overflow-y-scroll md:w-[90%]">
              <DrawerHeader>
                <DrawerTitle>Shopping Cart</DrawerTitle>
              </DrawerHeader>
              <div className="space-y-2 px-2">
                {items &&
                  items?.map((item) => (
                    <CartProduct key={item?.id} product={item} />
                  ))}
              </div>
            </div>
            <DrawerFooter className="">
              <CartSummary />
              <Button
                onClick={handleClick}
                variant={"action"}
                className="w-full"
              >
                Checkout
              </Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
