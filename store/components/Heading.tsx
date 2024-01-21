import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  subTitle?: string;
  size?: string;
};

const Heading = ({ title, subTitle, size }: Props) => {
  return (
    <section
      className={cn(`flex items-center flex-col justify-center space-y-2`)}
    >
      <h2
        className={cn(
          " text-3xl font-medium  leading-tight tracking-tighter text-[#3C2E3D]",
          size
        )}
      >
        {title}
      </h2>
      <h4 className="text-gray-500">{subTitle}</h4>
    </section>
  );
};

export default Heading;
