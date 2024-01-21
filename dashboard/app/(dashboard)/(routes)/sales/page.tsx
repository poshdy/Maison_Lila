"use client";
import { Client } from "@/axiosClient";
import { Heading } from "@/components/Heading";
import { useQuery } from "@tanstack/react-query";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { DATE } from "@/actions/shared";
import { SalesColumn } from "@/types";
import { columns } from "@/components/PageComponents/sales/columns";

type Props = {};

const SalesPage = (props: Props) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["sales"],
    queryFn: async () => await Client.get("/sales"),
  });
  if (error) {
    console.log(error);
  }
  if (isLoading) {
    return <h1>Loadingg</h1>;
  }
  const formattedSales: SalesColumn[] | null = data?.data?.map(
    (item: SalesColumn) => ({
      productName: item?.product?.name,
      productImage: item?.product?.image,
      price: item?.price,
      quantitySold: item?.quantitySold,
      Revenue: item?.Revenue,
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
