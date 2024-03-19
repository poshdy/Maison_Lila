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
import { formattedPrice } from "@/actions/shared";
import Heading from "../ui/heading";
import Link from "next/link";
type Top = {
  productId: string;
  price: number;
  quantitySold: number;
  Revenue: number;
  product: {
    name: string;
    image: {
      url: string;
    }[];
  };
};
const TopProducts = async () => {
  const products: Top[] = await getData("/sales/products");

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Top-Products" className="text-3xl" />
        <Link href={"sales"}>see all</Link>
      </div>
      <Table className="bg-white p-2 rounded-md">
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
                  width={30}
                  height={40}
                  className="rounded-full"
                  alt="img"
                  src={item?.product?.image?.at(0)?.url as string}
                />
              </TableCell>
              <TableCell className="font-medium">
                {item?.product?.name}
              </TableCell>
              <TableCell>{item?.quantitySold}</TableCell>
              <TableCell>{formattedPrice(+item?.Revenue)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TopProducts;
