import { Category } from "@/types";
import React from "react";

import SubCategory from "./SubCategory";
import Link from "next/link";

type Props = {
  categories: Category[] | null;
};

const CategoriesTab = ({ categories }: Props) => {
  return (
    <section className="flex flex-col pt-3 items-center justify-center gap-3">
      {categories?.map((category) => (
        <div key={category?.id}>
          {category?.subCategory?.length < 1 ? (
            <Link
              className="hover:font-semibold duration-300 ease-in-out"
              href={`shop`}
              key={category?.id}
            >
              {category?.name}
            </Link>
          ) : (
            <SubCategory subCategory={category} />
          )}
        </div>
      ))}
    </section>
  );
};

export default CategoriesTab;