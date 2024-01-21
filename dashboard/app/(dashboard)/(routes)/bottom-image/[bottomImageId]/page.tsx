import React from "react";
import { BottomImageForm } from "@/components/Forms/BottomImageForm";
import { getDataById } from "@/fetchers";

const BottomImagePage = async ({ params }: { params: { BottomImageId: string } }) => {
  const BottomImage = await getDataById("/bottom-image", params.BottomImageId);
  return (
    <div className="flex-col">
      <div className="space-y-4">
        <BottomImageForm initialData={BottomImage} />
      </div>
    </div>
  );
};

export default BottomImagePage;
