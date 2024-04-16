import Heading from "@/components/Shared/Heading";
import { getData } from "@/fetchers";
import { Category, Product } from "@/types";
import Products from "@/components/shop/Products";
import Loadmore from "@/components/shop/Loadmore";
import CategoriesSlider from "@/components/Sliders/Categories-Slider";
import Empty from "@/components/Shared/Empty";
import { BreadCrumbs } from "@/components/Shared/bread-crumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop"
};
const Shop = async ({
  searchParams,
}: {
  searchParams: {
    category: string;
  };
}) => {
  const { category } = searchParams;
  let url;
  if (category) {
    url = `product?page=1&category=${category }`;
  }
  const products: Product[] | null = await getData(url || `product?page=1`);
  const categories: Category[] | null = await getData("category");
  return (
    <main className="container mt-10 space-y-10 min-h-screen">
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
        <Heading size="md:text-3xl text-2xl" title="Shop" />
        <BreadCrumbs
          data={[
            { href: "home", name: "Home" },
            { href: "shop", name: "Shop" },
            { href: "shop", name: "Products" },
            { href: `shop?category=${category}`, name: category },
          ]}
        />
      </div>
      <section className="space-y-6">
        <div className="space-y-2">
          <Heading size="md:text-3xl text-2xl" title="Filter by Category" />
          <CategoriesSlider categories={categories} />
        </div>

        {products.length <= 0 ? (
          <Empty
            action="/shop?page=1"
            text="Go Back"
            title="Sorry! No Products Found"
          />
        ) : (
          <>
            <Products products={products} />
            <Loadmore category={category} />
          </>
        )}
      </section>
    </main>
  );
};

export default Shop;
