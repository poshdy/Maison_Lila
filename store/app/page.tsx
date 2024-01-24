import Banner from "@/components/Banner";
import CategoriesSlider from "@/components/Categories-Slider";
import OurStory from "@/components/OurStory";
import ProductSlider from "@/components/pageComponents/shop/ProductSlider";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import { getData } from "@/fetchers";
import { Category, Product, slider, banner, BottomImage, Anoun } from "@/types";
export default async function Home() {
  const SLIDER: slider | null = await getData("slider/published");
  const categories: Category[] | null = await getData("category");
  const bestseller: Product[] | null = await getData("product?bestseller=true");
  const newArrival: Product[] | null = await getData("product?newArrival=true");
  const banner: banner | null = await getData("banner/published");
  const bottomImage: BottomImage | null = await getData(
    "bottom-image/published"
  );
  // console.log(anoun)
  return (
    <main className="w-full space-y-6">
      {SLIDER && <Slider data={SLIDER} />}
      <Services />
      {categories && <CategoriesSlider categories={categories} />}
      {bestseller && <ProductSlider title="Our BestSeller" data={bestseller} />}
      {newArrival && <ProductSlider title="New Arrivals" data={newArrival} />}
      {banner && <Banner banner={banner} />}
      {bottomImage && <OurStory bottomImage={bottomImage} />}
    </main>
  );
}
