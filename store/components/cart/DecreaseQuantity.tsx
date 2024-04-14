"use client";
import React from "react";
import { Minus } from "lucide-react";
import { Button } from "../ui/button";
import { useCart } from "@/zustand/cart-store";
type Props = {
  id: string;
};

const DecreaseQuantity = ({ id }: Props) => {
  const { decreaseQuantity } = useCart();
  return (
    <Button
      className="rounded-full text-main hover:bg-transparent p-0 bg-transparent border-2 border-main  w-8 h-8"
      onClick={() => decreaseQuantity(id!!)}
    >
      <Minus size={14} />
    </Button>
  );
};

export default DecreaseQuantity;
