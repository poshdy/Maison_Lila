import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  text: string;
  size: string;
};

const Text = ({ size, text }: Props) => {
  return <p className={cn("text-text  font-light ", size)}>{text}</p>;
};

export default Text;
