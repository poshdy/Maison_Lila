import { ProductColmun } from "@/types";
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import Image from "next/image";
import { formattedPrice } from "@/actions/shared";

type Props = {
  products: ProductColmun[];
  heads: string[];
};

const SaleTable = ({ heads, products }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {heads.map((head, i) => (
            <TableHead key={i}>{head}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((item: ProductColmun) => (
          <TableRow key={item?.id}>
            <TableCell className="font-medium">
              <Image
                width={30}
                height={30}
                className="rounded-full"
                alt="img"
                src={item?.image?.at(0)?.url as string}
              />
            </TableCell>
            <TableCell className="font-medium">{item?.name}</TableCell>
            <TableCell>{formattedPrice(item?.price)}</TableCell>
            <TableCell>{formattedPrice(item?.salePrice)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SaleTable;
