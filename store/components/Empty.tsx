import React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
type Props = {
  title?:string
  text?:string
  action?:string
};

const Empty = ({title , text,action}: Props) => {
  return (
    <section className="flex flex-col space-y-4 items-center justify-center w-full">
      <ShoppingBag size={25} />

      <h3 className="text-2xl font-bold leading-tight tracking-tight">
        {title}
      </h3>
      <p>{text}</p>
      <Link className="" href={"shop"}>
        <Button>{action}</Button>
      </Link>
    </section>
  );
};

export default Empty;
