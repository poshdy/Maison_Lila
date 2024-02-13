import CategoriesSlider from "@/components/Categories-Slider";
import Empty from "@/components/Empty";
import Heading from "@/components/Heading";
import Pagination from "@/components/pageComponents/shop/Pagination";
import ProductCard from "@/components/pageComponents/shop/ProductCard";
import Wrapper from "@/components/Wrapper";
import { getData } from "@/fetchers";
import { Category, Product } from "@/types";
import Link from "next/link";

const Shop = async ({
  searchParams,
}: {
  searchParams: { category: string; page: string; subCat: string };
}) => {
  let query;
  if (searchParams.category) {
    query = `product?page=${searchParams.page || "1"}&category=${
      searchParams.category
    }`;
  } else if (searchParams.subCat) {
    query = `product?page=${searchParams.page || "1"}&subCat=${
      searchParams.subCat
    }`;
  } else {
    query = `product?page=${searchParams?.page || "1"}`;
  }

  const categories: Category[] | null = await getData("category");
  const products: Product[] | null = await getData(query);

  return (
    <Wrapper>
      <Heading title="Shop" subTitle="" />

      {categories && <CategoriesSlider categories={categories} />}
      <section className="grid md:grid-cols-4 grid-col-1 justify-items-center gap-x-3 gap-y-2 content-center">
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

      {/* <Pagination page={searchParams.page} /> */}
    </Wrapper>
  );
};

export default Shop;
