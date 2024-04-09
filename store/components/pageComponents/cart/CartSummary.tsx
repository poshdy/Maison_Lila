import Currency from "@/components/Shared/Currency";
import ChechOutButton from "@/components/Shared/ChechOutButton";
import Heading from "@/components/Shared/Heading";
import { useCart } from "@/zustand/cart-store";
import React, { useEffect } from "react";
import { Zone } from "@/types";
import { redirect, usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useUser } from "@/zustand/user-store";
import { useErrorModel } from "@/zustand/error-store";
type Props = {
  zone?: Zone;
  title: string;
  action: string;
};

const CartSummary = ({ zone, action, title }: Props) => {
  const { items, cartTotalAmount, calculateTotalPrice } = useCart();
  const { user } = useUser();
  const { Display } = useErrorModel();
  const pathName = usePathname();
  const {push} = useRouter()
  useEffect(() => {
    calculateTotalPrice();
  }, [items, calculateTotalPrice]);

  const handleClick = () => {
    if (!user) {
      Display(
        "Oppss",
        "Please create an account or login to your account to be able to proceed"
      );
      push("/Login");
    } else {
      push(`/order/shipping-info/${user?.id}`);
    }
  };
  return (
    <section className="bg-gray-100 rounded-lg flex flex-col justify-between space-y-3 p-5 md:w-[40%] w-full">
      <div>
        <Heading title={title} size="text-xl font-bold text-left" />
        {pathName.includes("/cart") ? null : (
          <div className="flex items-center justify-between w-full">
            <Heading title="Delivery Fees" size="text-lg font-bold" />
            {zone && <Currency price={zone?.fees} />}
          </div>
        )}
        <div className="flex items-center justify-between w-full">
          <Heading title="Cart Total" size="text-md font-semibold" />
          <Currency price={cartTotalAmount} />
        </div>
      </div>

      <Button
        onClick={handleClick}
        variant="action"
        className="w-full  text-white "
      >
        Chechout
      </Button>
    </section>
  );
};

export default CartSummary;
<section className="bg-gray-100 rounded-lg flex flex-col justify-between space-y-3 p-3 md:w-[40%] w-full"></section>;
