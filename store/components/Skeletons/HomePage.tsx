import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <section className="w-full px-8 min-h-screen">
      <div className="flex flex-col items-center pt-5 justify-center gap-10">
        <Skeleton className="w-full h-10 bg-gray-400" />
        <Skeleton className="w-full h-[70vh] rounded-t-full bg-gray-400" />
        <Skeleton className="w-full h-6 bg-gray-400" />
      </div>
    </section>
  );
};

export default HomePage;
