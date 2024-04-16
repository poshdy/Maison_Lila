import CustomizedForm from "@/components/CustomizedForm";
import Heading from "@/components/Shared/Heading";
import { BreadCrumbs } from "@/components/Shared/bread-crumbs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Custom Orders"
};
const CustomziedOrderPage = () => {
  return (
    <section className="min-h-screen mb-10 w-full space-y-4 px-3">
      <div>
        <Heading title="Customzied Order" size="text-3xl" />
        <BreadCrumbs data={[{href:"home",name:"Home"},{href:"customized-order",name:"Custom-orders"}]}/>
      </div>
      <CustomizedForm />
    </section>
  );
};

export default CustomziedOrderPage;
