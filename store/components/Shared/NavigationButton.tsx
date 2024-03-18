import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
type Props = {
  title: string;
  action: string;
};
const NavigationButton = ({ title, action }: Props) => {
  return (
    <Link
      className="flex items-center font-semibold text-lg gap-1"
      href={`${action}`}
    >
      {title} <IoIosArrowRoundForward className="w-7 h-7" />
    </Link>
  );
};

export default NavigationButton;
