import { ProductColmun } from "@/types";
import ProductClient from "@/components/PageComponents/product/client";
import { DATE, formattedPrice } from "@/actions/shared";
import { getData } from "@/fetchers";
import SaleTable from "@/components/PageComponents/product/sale-table";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import AttributesTable from "@/components/PageComponents/product/attributes-table";
import Wrapper from "@/components/ui/wrapper";

const Productspage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const products = await getData(`product?page=${searchParams.page || "1"}`);
  const onSaleProducts = products?.filter(
    (product: ProductColmun) => product.salePrice > 0
  );
  const ProductAttributes = products?.filter(
    (product: ProductColmun) => product.productAttribute != null
  );

  const formattedProducts: ProductColmun[] = products?.map(
    (item: ProductColmun) => ({
      id: item?.id,
      name: item?.name,
      category: item?.category?.name,
      stock: item?.productInventory?.stock,
      price: formattedPrice(+item?.price),
      image: item?.image,
      createdAt: DATE(item?.createdAt),
    })
  );
  return (
    <Wrapper>
      {formattedProducts && (
        <ProductClient  page={searchParams?.page} data={formattedProducts} />
      )}
      <Separator />
      <div className="space-y-4">
        <Heading title="Sale Products" className="text-2xl" />
        <Separator />
        <SaleTable
          heads={["Image", "Name", "Price", "Sale-Price"]}
          products={onSaleProducts}
        />
      </div>
      <Separator />
      <div className="space-y-4">
        <Heading title="Product Attributes" className="text-2xl" />
        <Separator />
        <AttributesTable products={ProductAttributes} />
      </div>
    </Wrapper>
  );
};

export default Productspage;
