import SubCategoryForm from "@/components/Forms/SubCategoryForm";
import { getData, getDataById } from "@/fetchers";

const SubCatPage = async ({ params }: { params: { subId: string } }) => {
  const data = await getDataById("/category", params.subId);
  const categories = await getData("category");
  return (
    <div className="flex-col">
      <div className="space-y-4">
        <SubCategoryForm initialData={data} data={categories} />
      </div>
    </div>
  );
};

export default SubCatPage;
