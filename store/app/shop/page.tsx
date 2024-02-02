import CategoriesSlider from "@/components/Categories-Slider";
import Empty from "@/components/Empty";
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
  const categories: Category[] | null = await getData("category");
  const products: Product[] | null = await getData(
    `product?page=1&category=${searchParams.category}`
  );

  return (
    // <Wrapper>
    <section className="min-h-screen space-y-20 container">
      <Heading title="Shop" subTitle="" />
      {categories && <CategoriesSlider categories={categories} />}
      <section className="grid md:grid-cols-4 grid-col-1 justify-items-center gap-2 content-center py-3">
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </section>
    </section>
  );
};

export default Shop;
{
  /* </Wrapper> */
}
