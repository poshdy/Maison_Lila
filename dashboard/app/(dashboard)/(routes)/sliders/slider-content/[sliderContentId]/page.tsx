import React from "react";

import { getData, getDataById } from "@/fetchers";
import SliderContentForm from "@/components/Forms/SliderContentForm";

const SliderContentPage = async ({
  params,
}: {
  params: { sliderContentId: string };
}) => {
  const slider = await getDataById(`/slider/content`, params.sliderContentId);
  const sliders = await getData("/slider");
  return (
    <section>
      <SliderContentForm initialData={slider} sliders={sliders} />
    </section>
  );
};

export default SliderContentPage;
