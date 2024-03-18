import ZoneClient from "@/components/PageComponents/zone/client";
import { ZoneColumn, ZoneOrderCount } from "@/types";
import { getData } from "@/fetchers";
import { DATE, formattedPrice } from "@/actions/shared";
import Wrapper from "@/components/ui/wrapper";
import ZoneOrderTable from "@/components/PageComponents/zone/order-zone-table";

const ZonePage = async () => {
  const data = await getData("/zone");
  const orderCount: ZoneOrderCount[] = await getData("/stats/zones");
  const formattedZone: ZoneColumn[] | null = data?.map((item: ZoneColumn) => ({
    id: item?.id,
    name: item?.name,
    fees: formattedPrice(item?.fees),
    createdAt: DATE(item?.createdAt),
  }));
  return (
    <Wrapper>
      {formattedZone && <ZoneClient data={formattedZone} />}

      <ZoneOrderTable orderCount={orderCount} />
    </Wrapper>
  );
};

export default ZonePage;
