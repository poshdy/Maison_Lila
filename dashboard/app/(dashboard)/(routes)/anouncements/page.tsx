import AnouncementClient from "@/components/PageComponents/anoun/client";
import { AnounColumn } from "@/types";
import { format, parseISO } from "date-fns";
import { getData } from "@/fetchers";

const Anouncements = async () => {
  const data = await getData("/anoun");
  const formattedAnoun: AnounColumn[] | null = data?.map(
    (item: AnounColumn) => ({
      id: item?.id,
      text: item?.text,
      published: item?.published,
      createdAt: format(parseISO(item?.createdAt), "PPP"),
    })
  );

  return (
    <section>
      <div className="space-y-12">
        {formattedAnoun && <AnouncementClient data={formattedAnoun} />}
      </div>
    </section>
  );
};

export default Anouncements;
