import React from "react";
import BannerClient from "@/components/PageComponents/banner/client";
import { BannerColumn } from "@/types";
import { getData } from "@/fetchers";
import { DATE } from "@/actions/shared";

const Banners = async () => {
  const data = await getData("/banner");
  const formattedBanner: BannerColumn[] | null = data?.map((item: BannerColumn) => ({
    id: item?.id,
    title:item?.title,
    text: item?.text,
    image: item?.image,
    place: item?.place,
    published: item?.published,
    createdAt: DATE(item?.createdAt),
  }));

  return (
    <section>
      <div className="space-y-12 pt-4">
      {formattedBanner && <BannerClient data={formattedBanner} />}
      </div>
    </section>
  );
};

export default Banners;
