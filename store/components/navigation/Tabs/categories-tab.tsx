import { Category } from "@/types";
import React from "react";

import SubCategory from "../SubCategory";
import Link from "next/link";

type Props = {
  categories: Category[] | null;
};

const CategoriesTab = ({ categories }: Props) => {
  const ParentCategory = categories.filter(
    (category) => category.parentId == null
  );
  return (
    <section className="space-y-2">
      {ParentCategory?.map((category) => (
        <div key={category?.id}>
          {category?.Category?.length < 1 ? (
            <Link
              className="text-xl font-bold"
              href={`/shop?category=${category?.name}`}
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
