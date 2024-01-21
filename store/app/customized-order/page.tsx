import CustomizedForm from "@/components/CustomizedForm";
import Heading from "@/components/Heading";

const CustomziedOrderPage = () => {
  return (
    <section className="min-h-screen w-full space-y-4 px-3">
      <Heading title="Customzied Order" subTitle="What in your mind?" />
      <CustomizedForm />
    </section>
  );
};

export default CustomziedOrderPage;
