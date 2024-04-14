import { Category } from "@/types";
import Link from "next/link";
import React from "react";

type Props = {
  categories: Category[];
};

const FooterCategories = ({ categories }: Props) => {
  return (
    <div className="flex flex-col gap-1 text-gray-400">
      {categories.map((category) => (
        <Link key={category.id} href={"shop"}>
          {category?.name}
        </Link>
      ))}
    </div>
  );
};

export default FooterCategories;
