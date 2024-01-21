import SliderTable from "@/components/PageComponents/slider/slider-table";
import { SliderColumn, SliderContentColumn } from "@/types";
import { Separator } from "@/components/ui/separator";
import { getData } from "@/fetchers";
import { DATE } from "@/actions/shared";
import SliderContentTable from "@/components/PageComponents/slider-content/client";

const SlidersPage = async () => {
  const sliders = await getData("/slider");
  const slidersContent = await getData("/content");
  const formattedSliders: SliderColumn[] | null = sliders?.map(
    (item: SliderColumn) => ({
      id: item?.id,
      name: item?.name,
      place: item?.place,
      published: item?.published,
      content: item?.content,
      createdAt: DATE(item?.createdAt),
    })
  );
  const formattedSlidersContent: SliderContentColumn[] | null =
    slidersContent?.map((item: SliderContentColumn) => ({
      id: item?.id,
      title: item?.title,
      text: item?.text,
      image: item?.image,
      slider: item?.slider.name,
      createdAt: DATE(item?.createdAt),
    }));
  return (
    <section>
      <div className="space-y-10">
        {formattedSliders && <SliderTable data={formattedSliders} />}
        {formattedSlidersContent && (
          <SliderContentTable data={formattedSlidersContent} />
        )}
        <Separator />
      </div>
    </section>
  );
};

export default SlidersPage;
