import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  className: string;
};

const Heading = ({ title, className }: Props) => {
  return <h2 className={cn("font-bold", className)}>{title}</h2>;
};

export default Heading;
