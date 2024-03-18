import { OrderItems } from "@/types";
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
import { formattedPrice } from "@/actions/shared";

type Props = {
  Product: OrderItems[];
};

const ProductTable = ({ Product }: Props) => {
  return (
    <Table>
      <TableCaption>A list of Order items</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Product?.map((item: OrderItems, i: number) => (
          <TableRow key={i}>
            <TableCell className="font-medium">
              <Image
                width={40}
                height={40}
                className="rounded-full"
                alt="img"
                src={item?.Product?.image?.at(0)?.url as string}
              />
            </TableCell>
            <TableCell className="font-medium">{item?.Product?.name}</TableCell>
            <TableCell>{item?.quantity}</TableCell>
            <TableCell>{item?.Product.price}</TableCell>
            <TableCell>
              {formattedPrice(
                Number(item?.Product?.price) * Number(item?.quantity)
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
};

export default ProductTable;
