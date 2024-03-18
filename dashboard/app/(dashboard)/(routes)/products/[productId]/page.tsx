import { ProductForm } from "@/components/Forms/ProductForm";
import { getData, getDataById } from "@/fetchers";

const Productspage = async ({ params }: { params: { productId: string } }) => {
  const product = await getDataById("/product", params.productId);
  const category = await getData("/category");

  return (
    <section>
      <div className="space-y-10">
        <ProductForm initialData={product} category={category} />
      </div>
    </section>
  );
};

export default Productspage;
