import React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
type Props = {
  title?:string
};

const Empty = ({title}: Props) => {
  return (
    <section className="flex flex-col space-y-4 items-center justify-center w-full h-screen">
      <ShoppingBag size={25} />

      <h3 className="text-2xl font-bold leading-tight tracking-tight">
        YOUR CART IS EMPTY!
      </h3>
      <p>Start shopping to fill it up</p>
      <Link className="" href={"shop"}>
        <Button>Go Shopping</Button>
      </Link>
    </section>
  );
};

export default Empty;
