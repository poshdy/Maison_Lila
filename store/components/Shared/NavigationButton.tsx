import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
type Props = {
  title: string;
  action: string;
};
const NavigationButton = ({ title, action }: Props) => {
  return (
    <Link
      className="text-lila text-lg rounded-2xl font-bold tracking-tighter leading-tight border-lila px-7 py-3 border flex items-center justify-center"
      href={`${action}`}
    >
      {title} <FaAngleRight className="w-5 h-5 ml-2" />
    </Link>
  );
};

export default NavigationButton;
