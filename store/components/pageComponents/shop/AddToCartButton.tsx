import React from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/zustand/cart-store";
import { Product } from "@/types";
type Props = {
  quantity: number;
  product: Product;
};

const AddToCartButton = ({ quantity, product }: Props) => {
  const ItemAdded = {
    id: product.id,
    name: product.name,
    category: product.category.name,
    quantity: quantity <= 0 ? 1 : quantity,
    price: product?.salePrice > 0 ? product?.salePrice : product?.price,
    image: product?.image?.at(0)?.url,
  };
  const { addItem } = useCart();
  return (
    <Button
      onClick={() => addItem(ItemAdded)}
      className="w-full bg-main text-white rounded-xl"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
