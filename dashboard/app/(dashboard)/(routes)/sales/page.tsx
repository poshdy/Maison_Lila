import { Heading } from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { DATE, formattedPrice } from "@/actions/shared";
import { SalesColumn } from "@/types";
import { columns } from "@/components/PageComponents/sales/columns";
import { getData } from "@/fetchers";

const SalesPage = async () => {
  const data = await getData("/sales/products");

  const formattedSales: SalesColumn[] | null = data?.map(
    (item: SalesColumn) => ({
      productName: item?.product?.name,
      productImage: item?.product?.image,
      price: formattedPrice(+item?.price),
      quantitySold: item?.quantitySold,
      Revenue: formattedPrice(+item?.Revenue),
      createdAt: DATE(item?.createdAt),
    })
  );
  return (
    <section>
      <div className="flex items-center justify-between ">
        <Heading title="Sales" description="products sales report" />
      </div>
      <Separator />
      {formattedSales && (
        <DataTable
          searchKey="productName"
          columns={columns}
          data={formattedSales}
        />
      )}
    </section>
  );
};

export default SalesPage;
