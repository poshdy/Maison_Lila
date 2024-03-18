import React from "react";
import CategoryClient from "@/components/PageComponents/category/client";
import { CategoryColumn } from "@/types";
import { Separator } from "@/components/ui/separator";
import SubCategoryClient from "@/components/PageComponents/sub-cat/SubCategoryClient";
import { getData } from "@/fetchers";
import { DATE } from "@/actions/shared";
import Wrapper from "@/components/ui/wrapper";

const CategoiesPage = async () => {
  const data = await getData("/category");
  const formattedCategory: CategoryColumn[] | null = data
    ?.filter((item: any) => item.parentId == null)
    .map((item: CategoryColumn) => ({
      id: item?.id,
      name: item?.name,
      imageUrl: item?.imageUrl,
      Category: item.Category,
      products: item._count.products,
      createdAt: DATE(item?.createdAt),
    }));
  const formattedSubCategory: CategoryColumn[] | null = data
    .filter((item: any) => item.parentId != null)
    ?.map((item: CategoryColumn) => ({
      id: item?.id,
      name: item?.name,
      subCategory: item?.subCategory?.name,
    }));
  return (
    <Wrapper>
      {formattedCategory && <CategoryClient data={formattedCategory} />}

      <Separator />
      {formattedSubCategory && (
        <SubCategoryClient data={formattedSubCategory} />
      )}
    </Wrapper>
  );
};
export default CategoiesPage;
