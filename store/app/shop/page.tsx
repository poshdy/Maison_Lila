import CategoriesSlider from "@/components/Categories-Slider";
import Heading from "@/components/Heading";
import ProductCard from "@/components/pageComponents/shop/ProductCard";
import Wrapper from "@/components/Wrapper";
import { getData } from "@/fetchers";
import { Category, Product } from "@/types";

const Shop = async ({
  searchParams,
}: {
  searchParams: { category: string; page: string };
}) => {
  let cateogory =
    searchParams.category.length > 2
      ? `&category=${searchParams.category}`
      : null;
  const categories: Category[] | null = await getData("category");
  const products: Product[] | null = await getData(
    `product?page=1`
  );

  return (
    <Wrapper>
      <section className="min-h-screen space-y-6 ">
        <Heading title="Shop" subTitle="" />
        {categories && <CategoriesSlider categories={categories} />}

        <section className="grid px-2 grid-cols-2 md:grid-cols-4 justify-items-center content-center gap-3">
          {products &&
            products?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
        </section>
      </section>
    </Wrapper>
  );
};

export default Shop;
