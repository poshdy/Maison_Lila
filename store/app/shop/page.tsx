import Empty from "@/components/Shared/Empty";
import Heading from "@/components/Shared/Heading";
import ProductCard from "@/components/pageComponents/shop/ProductCard";
import Wrapper from "@/components/Shared/Wrapper";
import { getData } from "@/fetchers";
import { Category, Product } from "@/types";
import Filters from "@/components/pageComponents/shop/Filters";
import Paging from "@/components/pageComponents/shop/Paging";

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
        <section>
          <Heading
            size="text-base text-left text-gray-400 "
            title={`Result ${products.length} Product`}
          />
          <section className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-5 justify-items-center py-10">
            {products?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </section>
        </section>
      )}
      <Paging page={searchParams?.page} />
    </Wrapper>
  );
};

export default Shop;
