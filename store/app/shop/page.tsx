import Heading from "@/components/Shared/Heading";
import Wrapper from "@/components/Shared/Wrapper";
import { fetchProducts, getData } from "@/fetchers";
import { Category, Product } from "@/types";
import Filters from "@/components/shop/Filters";
import Products from "@/components/shop/Products";
import Loadmore from "@/components/shop/Loadmore";
import { useInfiniteQuery } from "@tanstack/react-query";

const Shop = async ({
  searchParams,
}: {
  searchParams: {
    bestSeller: string;
    newArrival: string;
    recommended: string;
    category: string;
    page: string;
  };
}) => {
  const { category, bestSeller, newArrival, page } = searchParams;
  const query = { category, bestSeller, newArrival };
  const products: Product[] | null = await getData(`product?page=1`);
  const categories: Category[] | null = await getData("category");

  return (
    <Wrapper>
      <Heading size="text-3xl" title="Shop" />
      <section>
        {/* <Filters categories={categories} /> */}
        <Products products={products} />
        {/* <Loadmore category={searchParams?.category} /> */}
      </section>
    </Wrapper>
  );
};

export default Shop;
