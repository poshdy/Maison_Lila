import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { cn } from "@/lib/utils";
type Props = {
  title: string;
  action: string;
  className?:string
};
const NavigationButton = ({ title, action ,className }: Props) => {
  return (
    <Link
      className={cn("text-lila text-lg rounded-2xl font-bold tracking-tighter leading-tight border-lila px-7 py-3 border flex items-center justify-center",className)}
      href={`${action}`}
    >
      {title} <FaAngleRight className="w-5 h-5 ml-2" />
    </Link>
  );
};

export default NavigationButton;
