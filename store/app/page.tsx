import Banner from "@/components/Banner";
import OurStory from "@/components/OurStory";
import Slider from "@/components/Sliders/Slider";
import Categories from "@/components/Categories";
import Wrapper from "@/components/Shared/Wrapper";
import { getData } from "@/fetchers";
import { Product, slider, banner } from "@/types";
import ProductSample from "@/components/shop/Product-row";
import Footer from "@/components/footer/Footer";

export default async function Home() {
  const SLIDER: slider | null = await getData("slider?published=true");
  const bestseller: Product[] | null = await getData(
    "product?bestSeller=true&page=1"
  );
  const newArrival: Product[] | null = await getData(
    "product?newArrival=true&page=1"
  );
  const banner: banner | null = await getData(
    "banner?published=true&location=TOP"
  );
  const aboutUs: banner | null = await getData(
    "banner?published=true&location=BOTTOM"
  );

  return (
    <section className="space-y-14">
      <Wrapper>
        {SLIDER && <Slider data={SLIDER[0]} />}
        <Categories />
        {bestseller && <ProductSample title="Best Sellers" data={bestseller} />}
        {newArrival && <ProductSample title="New Arrivals" data={newArrival} />}
        {aboutUs && <OurStory bottomImage={aboutUs[0]} />}
      </Wrapper>
      {banner && <Banner banner={banner[0]} />}
      <Footer />
    </section>
  );
}
