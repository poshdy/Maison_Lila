import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const ShopPage = (props: Props) => {
  return (
    <section className="w-full space-y-10 px-8 min-h-screen flex flex-col">
      <Skeleton className="w-full h-10 col-span-2 bg-gray-400" />
      <div className="flex items-center justify-between">
        <Skeleton className="w-16 aspect-square rounded-full bg-gray-400" />
        <Skeleton className="w-16 aspect-square rounded-full bg-gray-400" />
        <Skeleton className="w-16 aspect-square rounded-full bg-gray-400" />
        <Skeleton className="w-16 aspect-square rounded-full bg-gray-400" />
      </div>
      <div className="grid grid-cols-4 gap-5 justify-items-center content-center">
        <Skeleton className="w-28 aspect-square col-span-2 bg-gray-400" />
        <Skeleton className="w-28 aspect-square col-span-2 bg-gray-400" />
        <Skeleton className="w-28 aspect-square col-span-2 bg-gray-400" />
        <Skeleton className="w-28 aspect-square col-span-2 bg-gray-400" />
        <Skeleton className="w-28 aspect-square col-span-2 bg-gray-400" />
        <Skeleton className="w-28 aspect-square col-span-2 bg-gray-400" />
      </div>
    </section>
  );
};

export default ShopPage;
