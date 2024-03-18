import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <section className="w-full px-8 h-[70vh]">
      <div className="flex flex-col items-center pt-5 justify-center gap-10">
        <Skeleton className="w-full h-10 bg-text" />
        <Skeleton className="w-full h-[70vh] rounded-t-full bg-text" />
        <Skeleton className="w-full h-6 bg-text" />
      </div>
    </section>
  );
};

export default HomePage;
