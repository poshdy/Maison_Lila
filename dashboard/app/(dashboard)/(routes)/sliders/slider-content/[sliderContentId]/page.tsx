import React from "react";

import { getData, getDataById } from "@/fetchers";
import SliderContentForm from "@/components/Forms/SliderContentForm";

const SliderContentPage = async ({
  params,
}: {
  params: { sliderContentId: string };
}) => {
  const content = await getDataById(`/content`, params.sliderContentId);
  console.log(content);
  const sliders = await getData("/slider");
  return (
    <section>
      <SliderContentForm initialData={content} sliders={sliders} />
    </section>
  );
};

export default SliderContentPage;
