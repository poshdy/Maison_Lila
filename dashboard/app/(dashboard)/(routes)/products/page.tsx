import { ProductColmun } from "@/types";
import ProductClient from "@/components/PageComponents/product/client";
import { DATE } from "@/actions/shared";
import { Server } from "@/axiosInstanceServer";

const Productspage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const data = await Server.get(`/product?page=${searchParams.page || "1"}`);
  const products = data.data;

  const formattedProducts: ProductColmun[] = products?.map(
    (item: ProductColmun) => ({
      id: item?.id,
      name: item?.name,
      stock: item?.stock,
      category: item?.category?.name,
      SubCategory: item?.SubCategory?.name,
      bestSeller: item?.bestSeller,
      newArrival: item?.newArrival,
      updatedBy: item?.UpdatedBy?.adminName,
      price: item?.price,
      SoldOut: item?.SoldOut,
      SalePrice: item?.salePrice,
      image: item?.image,
      createdAt: DATE(item?.createdAt),
    })
  );
  return (
    <section>
      <div className="space-y-10">
        {formattedProducts && (
          <ProductClient page={searchParams?.page} data={formattedProducts} />
        )}
      </div>
    </section>
  );
};

export default Productspage;
