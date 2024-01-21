import React from "react";
import { CategoryForm } from "@/components/Forms/CategoryForm";
import { getDataById } from "@/fetchers";

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const category = await getDataById("category", params.categoryId);

  return (
    <div className="flex-col">
      <div className="space-y-4">
        <CategoryForm initialData={category} />
      </div>
    </div>
  );
};

export default CategoryPage;
