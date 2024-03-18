import ZoneClient from "@/components/PageComponents/zone/client";
import { ZoneColumn } from "@/types";
import { getData } from "@/fetchers";
import { DATE, formattedPrice } from "@/actions/shared";
import Wrapper from "@/components/ui/wrapper";

const ZonePage = async () => {
  const data = await getData("/zone");
  const formattedZone: ZoneColumn[] | null = data?.map((item: ZoneColumn) => ({
    id: item?.id,
    name: item?.name,
    fees: formattedPrice(item?.fees),
    createdAt: DATE(item?.createdAt),
  }));
  return (
    <Wrapper>{formattedZone && <ZoneClient data={formattedZone} />}</Wrapper>
  );
};

export default ZonePage;
