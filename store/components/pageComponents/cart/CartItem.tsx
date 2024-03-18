import { CartItems } from "@/types";
import Image from "next/image";
import { formattedPrice } from "@/lib/utils";
import Heading from "@/components/Shared/Heading";
import QuantityControl from "./QuantityControl";
import Text from "@/components/Shared/Text";

type Props = {
  product: CartItems;
};

const CartItem = ({ product }: Props) => {
  return (
    <section className="flex bg-gray-100 justify-between py-1 px-2 rounded-xl">
      <div className="flex">
        <div className="relative w-[80px] aspect-square">
          <Image
            alt="product"
            src={product?.image as string}
            fill
            className="rounded-xl object-cover"
            sizes="100vh, 100vw"
          />
        </div>

        <div className="flex flex-col  items-start px-1">
          <Text size="text-sm text-gray-500" text={product?.category} />
          <Heading size="text-lg font-bold" title={product?.name} />
          <h3>{formattedPrice(Number(product?.price))}</h3>
        </div>
      </div>

      <QuantityControl productId={product?.id} quantity={product?.quantity} />
    </section>
  );
};

export default CartItem;
