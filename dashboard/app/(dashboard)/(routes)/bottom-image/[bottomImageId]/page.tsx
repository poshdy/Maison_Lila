import React from "react";
import { BottomImageForm } from "@/components/Forms/BottomImageForm";
import { getDataById } from "@/fetchers";

const BottomImagePage = async ({ params }: { params: { bottomImageId: string } }) => {
  const BottomImage = await getDataById("/bottom-image", params.bottomImageId);
  console.log(BottomImage)
  return (
    <div className="flex-col">
      <div className="space-y-4">
        <BottomImageForm initialData={BottomImage} />
      </div>
    </div>
  );
};

export default BottomImagePage;
