import { ProductForm } from "@/components/Forms/ProductForm";
import ProductSubCatForm from "@/components/Forms/ProductSubCatForm";
import { getData, getDataById } from "@/fetchers";

const Productspage = async ({ params }: { params: { productId: string } }) => {
  const product = await getDataById("/product", params.productId);
  const category = await getData("/category");
  const subCategory = await getData("/subCategory");

  return (
    <section>
      <div className="space-y-10">
        <ProductForm
          subCategory={subCategory}
          initialData={product}
          category={category}
        />
        <ProductSubCatForm subCategory={subCategory} />
      </div>
    </section>
  );
};

export default Productspage;
