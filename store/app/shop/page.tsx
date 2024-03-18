import Empty from "@/components/Shared/Empty";
import Heading from "@/components/Shared/Heading";
import ProductCard from "@/components/pageComponents/shop/ProductCard";
import Wrapper from "@/components/Shared/Wrapper";
import { getData } from "@/fetchers";
import { Category, Product } from "@/types";
import Filters from "@/components/pageComponents/shop/Filters";

const Shop = async ({
  searchParams,
}: {
  searchParams: {
    bestSeller: string;
    newArrival: string;
    recommended: string;
  };
}) => {
  let query;
  if (searchParams.bestSeller) {
    query = `product?bestSeller=true`;
  }
  // if (searchParams.newArrival) {
  //   query = `product?newArrival=true`;
  // else if (searchParams.recommended) {
  //   query = `product?recommended=true`;
  // } else {
  //   query = "product";
  // }

  const products: Product[] | null = await getData(query || "product");
  const categories: Category[] | null = await getData("category");

  return (
    <Wrapper>
      <Heading size="text-3xl" title="Shop" />
      <Filters categories={categories} />
      <section className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-5 justify-items-center">
        {products.length <= 0 ? (
          <Empty
            title="No Products Found For This Category "
            action="Return To Shop Page"
          />
        ) : (
          products?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))
        )}
      </section>
    </Wrapper>
  );
};

export default Shop;
