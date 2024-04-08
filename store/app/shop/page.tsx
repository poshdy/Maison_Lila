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
    category: string;
    page: string;
  };
}) => {
  let query;
  if (searchParams.bestSeller) {
    query = `product?page=${searchParams?.page || "1"}&bestSeller=true`;
  }
  if (searchParams.newArrival) {
    query = `product?page=${searchParams?.page || "1"}&newArrival=true`;
  }
  if (searchParams.recommended) {
    query = `product?page=${searchParams?.page || "1"}&recommended=true`;
  }
  if (searchParams.category) {
    query = `product?page=${searchParams?.page || "1"}&category=${
      searchParams?.category
    }`;
  }
  if (searchParams.page) {
    query = `product?page=${searchParams?.page}`;
  }

  const products: Product[] | null = await getData(query || "product?page=1");
  const categories: Category[] | null = await getData("category");

  return (
    <Wrapper>
      <Heading size="text-3xl" title="Shop" />
      <Filters categories={categories} />
      {products?.length <= 0 ? (
        <Empty title="No Products Found" action="Return To Shop Page" />
      ) : (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Shop;
