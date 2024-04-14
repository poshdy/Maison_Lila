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
    <section className="flex md:bg-transparent bg-gray-100  py-1 px-2 rounded-xl">
      {/* <div className="flex"> */}
      <div className="relative md:w-[250px] w-[90px] aspect-square">
        <Image
          alt="product"
          src={product?.image as string}
          fill
          className="rounded-xl object-cover"
          sizes="100vh, 100vw"
        />
      </div>

      <div className="flex items-center md:items-start justify-between w-full">
        <div className="flex flex-col items-start px-1">
          <Text size="text-sm text-gray-500" text={product?.category} />
          <Heading size="text-lg font-bold" title={product?.name} />
          <h3>{formattedPrice(Number(product?.price))}</h3>
        </div>

        <QuantityControl productId={product?.id} quantity={product?.quantity} />
      </div>
      {/* </div> */}
    </section>
  );
};

export default CartItem;
