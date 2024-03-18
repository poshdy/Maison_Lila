import React from "react";
import Wrapper from "../Shared/Wrapper";
import { Skeleton } from "../ui/skeleton";

const ProductSkeleton = () => {
  return (
    <section className="space-y-4 w-[90%] mx-auto">
      <Skeleton className="w-full aspect-square rounded-xl bg-text" />

      <section className="flex flex-col items-start gap-4">
        {Array.from({ length: 4 }, (_, i) => i + 1).map((i) => (
          <Skeleton
            key={i}
            className="h-3 odd:w-14 even:w-10 rounded-xl bg-text"
          />
        ))}
      </section>
    </section>
  );
};

export default ProductSkeleton;
