import React from "react";
import { BannerForm } from "@/components/Forms/BannerForm";
import { getDataById } from "@/fetchers";

const BannerPage = async ({ params }: { params: { bannerId: string } }) => {
  const banner = await getDataById("/banner", params.bannerId);
  return (
    <div className="flex-col">
      <div className="space-y-4">
        <BannerForm initialData={banner} />
      </div>
    </div>
  );
};

export default BannerPage;
