import React from "react";
import { Skeleton } from "../ui/skeleton";
import Wrapper from "../Shared/Wrapper";

type Props = {};

const ShopSkeleton = (props: Props) => {
  return (
    <Wrapper>
      <section className="flex flex-row items-center gap-x-4">
        {Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
          <Skeleton key={i} className="w-14 h-7 rounded-full bg-text" />
        ))}
      </section>

      <section className="grid grid-cols-4 justify-items-center gap-4">
        {Array.from({ length: 8 }, (_, i) => i + 1).map((i) => (
          <Skeleton key={i} className="w-44 col-span-2 aspect-square rounded-lg bg-text" />
        ))}
      </section>
    </Wrapper>
  );
};

export default ShopSkeleton;
