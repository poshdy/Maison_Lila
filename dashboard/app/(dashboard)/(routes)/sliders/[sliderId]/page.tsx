import { SliderForm } from "@/components/Forms/SliderForm";
import { getDataById } from "@/fetchers";

const SliderPage = async ({ params }: { params: { sliderId: string } }) => {
  const slider = await getDataById("/slider", params.sliderId);

  return (
    <section className="flex-col">
      <div className="space-y-4">
        <SliderForm initialData={slider} />
      </div>
    </section>
  );
};

export default SliderPage;
