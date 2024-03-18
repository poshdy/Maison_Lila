import React from "react";
import BannerClient from "@/components/PageComponents/banner/client";
import { BannerColumn } from "@/types";
import { getData } from "@/fetchers";
import { DATE } from "@/actions/shared";
import Wrapper from "@/components/ui/wrapper";

const Banners = async () => {
  const data = await getData("/banner");
  const formattedBanner: BannerColumn[] | null = data?.map(
    (item: BannerColumn) => ({
      id: item?.id,
      title: item?.title,
      text: item?.text,
      image: item?.image,
      location: item?.location,
      published: item?.published,
      createdAt: DATE(item?.createdAt),
    })
  );

  return (
    <Wrapper>
      {formattedBanner && <BannerClient data={formattedBanner} />}
    </Wrapper>
  );
};

export default Banners;
