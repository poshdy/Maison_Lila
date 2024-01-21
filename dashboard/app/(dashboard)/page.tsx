import Nav from "@/components/Nav";
import { Heading } from "@/components/Heading";
import Stats from "@/components/Home/Stats";
import TopProducts from "@/components/Home/TopProducts";
import Greeting from "@/components/Greeting";

const OverViewpage = async () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <Greeting />
        <Nav />
      </div>
      <Heading title="Dashboard" />
      <Stats />
      <h2 className="text-2xl tracking-tighter leading-tight font-bold ">
        Top Products
      </h2>
      <TopProducts />
    </section>
  );
};

export default OverViewpage;
