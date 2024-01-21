import ProductSlider from "@/components/pageComponents/shop/ProductSlider";
import { getDataById } from "@/fetchers";
import React from "react";

type Props = {
  id: string;
};

const YouMayAlsoLike = async ({ id }: Props) => {
  const products = await getDataById("category", id);

  return (
    <section>
      <ProductSlider data={products?.products} title="You May Also Like" />
    </section>
  );
};

export default YouMayAlsoLike;
