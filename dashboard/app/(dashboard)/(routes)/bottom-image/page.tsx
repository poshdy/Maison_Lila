import { DATE } from "@/actions/shared";
import { getData } from "@/fetchers";
import { BottomImageColumn } from "@/types";
import React from "react";
import BottomImageClient from "@/components/PageComponents/bottom-image/client";

type Props = {};

const BottomImage = async (props: Props) => {
  const data = await getData("/bottom-image");
  const formattedBanner: BottomImageColumn[] | null = data?.map(
    (item: BottomImageColumn) => ({
      id: item?.id,
      title: item?.title,
      text: item?.text,
      image: item?.image,
      published: item?.published,
      createdAt: DATE(item?.createdAt),
    })
  );
  return (
    <section>
      <div className="space-y-12 pt-4">
        {formattedBanner && <BottomImageClient data={formattedBanner} />}
      </div>
    </section>
  );
};

export default BottomImage;
