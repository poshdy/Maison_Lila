import { orders } from "@/actions/order";
import Delivery from "./Delivery";
import ProductStock from "./Product-Stock";
import { getData } from "@/fetchers";
import Users from "./Users";
import Sales from "./Sales";

const Stats = async () => {
  const delivery = await orders();
  const stock = await getData("/product/stock");

  return (
    <section className="flex-col space-y-4">
      <div className="grid gap-4 grid-cols-4">
        <Delivery orders={delivery} />
        <ProductStock stock={stock} />
        <Sales />
        <Users />
      </div>
    </section>
  );
};

export default Stats;
