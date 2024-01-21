import React from "react";
import { getData } from "@/fetchers";
import { ReviewColumn } from "@/types";
import { DATE } from "@/actions/shared";
import ReviweClient from "@/components/PageComponents/review/client";

import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/Heading";

const Reviews = async () => {
  const UnPublished = await getData("/review/unpublished");
  const Published = await getData("/review/published");

  const formattedUnPublished: ReviewColumn[] | null = UnPublished?.map(
    (item: ReviewColumn) => ({
      id: item?.id,
      email: item?.user?.email,
      content: item?.content,
      rating: item?.rating,
      product: item?.product.name,
      published: item?.published,
      createdAt: DATE(item?.createdAt),
    })
  );
  const formattedPublished: ReviewColumn[] = Published?.map(
    (item: ReviewColumn) => ({
      id: item?.id,
      email: item?.user?.email,
      content: item?.content,
      rating: item?.rating,
      product: item?.product?.name,
      published: item?.published,
      createdAt: DATE(item?.createdAt),
    })
  );

  return (
    <section>
      <div className="space-y-4">
        <Heading title="Users Reviews" description="products reviews" />
        <Separator />
        {formattedUnPublished && <ReviweClient data={formattedUnPublished} />}
      </div>
      <Separator />
      <div className="space-y-4">
        <Heading title="Published Reviews" description="products reviews" />
        <Separator />
        {formattedPublished && <ReviweClient data={formattedPublished} />}
      </div>
    </section>
  );
};

export default Reviews;
