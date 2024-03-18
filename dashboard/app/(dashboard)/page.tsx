import { Heading } from "@/components/Heading";
import TopProducts from "@/components/Home/TopProducts";
import Greeting from "@/components/Greeting";
import StatsCard from "@/components/ui/stats-card";
import { DollarSign, User2 } from "lucide-react";
import ProductStock from "@/components/Home/Product-Stock";
import { getData } from "@/fetchers";
import Orders from "@/components/Home/Delivery";

const OverViewpage = async () => {
  const usersCount = await getData("stats/users");
  const ordersCount = await getData("stats/orders");
  const productsStock = await getData("stats/products");
  return (
    <section className="space-y-6">
      <Greeting />
      <Heading title="Dashboard" />
      <section className="flex-col space-y-4">
        <div className="grid gap-4 grid-cols-4">
          <StatsCard
            Icon={User2}
            title="Users"
            text="total users"
            data={usersCount}
          />
          <StatsCard
            Icon={DollarSign}
            title="Daily Sales"
            text="Sales"
            data={"500"}
          />
          <Orders orders={ordersCount} />
          <ProductStock stock={productsStock} />
        </div>
      </section>
    </section>
  );
};

export default OverViewpage;
