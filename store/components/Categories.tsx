import React from "react";
import CategoriesSlider from "./Sliders/Categories-Slider";
import { Category } from "@/types";
import { getData } from "@/fetchers";
import Heading from "./Shared/Heading";

const Categories = async () => {
  const categories: Category[] | null = await getData("category");
  return (
    <section className="space-y-4">
      <Heading size="text-3xl md:text-4xl" title="Categories" />
      {categories && <CategoriesSlider categories={categories} />}
    </section>
  );
};

export default Categories;
