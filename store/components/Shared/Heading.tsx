import { cn } from "@/lib/utils";
import React from "react";
type Props = {
  title: string;
  size: string;
};

const Heading = ({ title, size }: Props) => {
  return (
    <h2
      className={cn(
        "font-light text-lila leading-tight text-center tracking-tight",
        size
      )}
    >
      {title}
    </h2>
  );
};

export default Heading;
