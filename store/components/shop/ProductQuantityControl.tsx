import React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
type Props = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

const ProductQuantityControl = ({ quantity, setQuantity }: Props) => {
  const onDecrement = () => {
    if (quantity <= 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex items-center gap-2">
      <Button
        className="border-[1px] p-0 w-10 h-10 text-main border-main rounded-full bg-transparent hover:bg-transparent"
        onClick={() => onDecrement()}
      >
        <Minus />
      </Button>
      <h5>{quantity}</h5>
      <Button
        className="border-[1px] p-0 w-10 h-10 text-main border-main rounded-full bg-transparent hover:bg-transparent"
        onClick={() => setQuantity(quantity + 1)}
      >
        <Plus />
      </Button>
    </div>
  );
};

export default ProductQuantityControl;
