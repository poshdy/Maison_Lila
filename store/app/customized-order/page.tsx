import CustomizedForm from "@/components/CustomizedForm";
import Heading from "@/components/Shared/Heading";

const CustomziedOrderPage = () => {
  return (
    <section className="min-h-screen mb-10 w-full space-y-4 px-3">
      <Heading title="Customzied Order" size="text-3xl" />
      <CustomizedForm />
    </section>
  );
};

export default CustomziedOrderPage;
