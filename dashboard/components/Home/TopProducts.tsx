import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { getData } from "@/fetchers";
type Top = {
  productId: string;
  price: string;
  soldAt: string;
  quantitySold: number;
  Revenue: string;
  product: {
    name: string;
    image: {
      url: string;
    }[];
  };
} | null;
const TopProducts = async () => {
  const products: Top[] = await getData("/product/top-products");

  return (
    <section className="bg-white p-2 rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Quantity Sold</TableHead>
            <TableHead>Revenue</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((item: Top, i: number) => (
            <TableRow key={i}>
              <TableCell className="font-medium">
                <Image
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt="img"
                  src={item?.product?.image?.at(0)?.url as string}
                />
              </TableCell>
              <TableCell className="font-medium">
                {item?.product?.name}
              </TableCell>
              <TableCell>{item?.quantitySold}</TableCell>
              <TableCell>{item?.Revenue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default TopProducts;
