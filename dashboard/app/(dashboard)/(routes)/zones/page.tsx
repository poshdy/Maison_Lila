import ZoneClient from "@/components/PageComponents/zone/client";
import { ZoneColumn } from "@/types";
import { getData } from "@/fetchers";
import { DATE } from "@/actions/shared";

const ZonePage = async () => {
  const data = await getData("/zone");
  const formattedZone: ZoneColumn[] | null = data?.map((item: ZoneColumn) => ({
    id: item?.id,
    name: item?.name,
    fees: item?.fees,
    createdAt: DATE(item?.createdAt),
  }));
  return (
    <section>
      <div className="space-y-4">
        {formattedZone && <ZoneClient data={formattedZone} />}
      </div>
    </section>
  );
};

export default ZonePage;
