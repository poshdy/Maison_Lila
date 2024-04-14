import DecreaseQuantity from "./DecreaseQuantity";
import IncreaseQuantity from "./IncreaseQuantity";

type Props = {
  productId: string;
  quantity: null | number;
};

const QuantityControl = ({ productId, quantity }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <DecreaseQuantity id={productId} />
      <h3 className="text-lg">0{quantity}</h3>
      <IncreaseQuantity id={productId} />
    </div>
  );
};

export default QuantityControl;
