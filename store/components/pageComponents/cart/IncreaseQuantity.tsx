import React from "react";
import { Plus } from "lucide-react";
import { Button } from "../../ui/button";
import { useCart } from "@/zustand/cart-store";

type Props = {
  id: string;
};

const IncreaseQuantity = ({ id }: Props) => {
  const { increaseQuntity } = useCart();
  return (
    <Button
      className="rounded-full hover:bg-main/90  p-0 bg-main text-white w-8 h-8"
      onClick={() => increaseQuntity(id!!)}
    >
      <Plus size={14} />
    </Button>
  );
};

export default IncreaseQuantity;
