import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useUser } from "@/zustand/user-store";
type Props = {
  title: string;
  action: string;
};

const ChechOutButton = ({ title, action }: Props) => {
  const { user } = useUser();
  return (
    <Link
      href={action}
      className="w-full p-2 text-center text-white rounded-xl bg-main"
    >
      {title}
    </Link>
  );
};

export default ChechOutButton;
