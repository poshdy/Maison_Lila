import React from "react";
import AnounForm from "@/components/Forms/AnounForm";
import { getDataById } from "@/fetchers";


const AnounPage = async ({ params }: { params: { anouncementId: string } }) => {
  const anoun = await getDataById('/anoun',params.anouncementId);
    console.log(anoun);
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <AnounForm initialData={anoun} />
      </div>
    </div>
  );
};

export default AnounPage;
