import React from "react";
import CategoryClient from "@/components/PageComponents/category/client";
import { CategoryColumn, SubCatColumn } from "@/types";
import { Separator } from "@/components/ui/separator";
import SubCategoryClient from "@/components/PageComponents/sub-cat/SubCategoryClient";
import { getData } from "@/fetchers";
import { DATE } from "@/actions/shared";

const CategoiesPage = async () => {
  const data = await getData("/category");
  const formattedCategory: CategoryColumn[] | null = data?.map(
    (item: CategoryColumn) => ({
      id: item?.id,
      name: item?.name,
      imageUrl: item?.imageUrl,
      subCategory: item?.subCategory.map((c) => c?.name),
      createdAt: DATE(item?.createdAt),
    })
  );
  const SubCatData = await getData("subCategory");
  const formattedSubCategory: SubCatColumn[] | null = SubCatData?.map(
    (item: SubCatColumn) => ({
      id: item?.id,
      name: item?.name,
      parent: item?.parent.name,
      categoryId: item?.parent.id,
      createdAt: DATE(item?.createdAt),
    })
  );
  return (
    <section className="space-y-6">
      {formattedCategory && <CategoryClient data={formattedCategory} />}

      <Separator />
      {formattedSubCategory && (
        <SubCategoryClient data={formattedSubCategory} />
      )}
    </section>
  );
};
export default CategoiesPage;
