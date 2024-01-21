import ZoneForm from "@/components/Forms/ZoneForm";
import { getDataById } from "@/fetchers";

const ZonePage = async ({ params }: { params: { zoneId: string } }) => {
  const zone = await getDataById("/zone", params.zoneId);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ZoneForm initialData={zone} />
      </div>
    </div>
  );
};

export default ZonePage;
