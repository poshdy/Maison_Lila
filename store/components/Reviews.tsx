import { getDataById } from "@/fetchers";
import React from "react";
import ReviewCard from "./ReviewCard";
import { Review } from "@/types";

type Props = {
  productId: string;
};

const Reviews = async ({ productId }: Props) => {
  const reviews: Review[] = await getDataById("review", productId);
  return (
    <section className="w-full">
      <div className="w-full flex flex-col md:flex-row md:justify-between items-center space-y-2">
        <h2 className="font-medium text-xl md:text-3xl">Reviews</h2>
      </div>
      {reviews?.length <= 0 ? (
        <h2 className="text-sm text-center text-gray-400">
          No Reviews for this product yet
        </h2>
      ) : (
        <ReviewCard reviews={reviews} />
      )}
    </section>
  );
};

export default Reviews;
