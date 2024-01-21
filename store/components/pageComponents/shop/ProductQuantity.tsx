import React from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
type Props = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
};

const ProductQuantity = ({ setCount, count }: Props) => {
  return (
    <div className="flex items-center bg-gray-200 rounded-full">
      <Button
        className="hover:bg-transparent"
        variant={"ghost"}
        onClick={() => setCount((prev) => prev - 1)}
      >
        <Minus size={15} />
      </Button>
      <h4>{count}</h4>
      <Button
        className="hover:bg-transparent"
        variant={"ghost"}
        onClick={() => setCount((prev) => prev + 1)}
      >
        <Plus size={15} />
      </Button>
    </div>
  );
};

export default ProductQuantity;
