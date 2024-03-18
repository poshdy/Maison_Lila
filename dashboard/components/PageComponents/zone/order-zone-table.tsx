import { ZoneOrderCount } from "@/types";
import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { formattedPrice } from "@/actions/shared";

type Props = {
  orderCount: ZoneOrderCount[];
};

const ZoneOrderTable = ({ orderCount }: Props) => {
  return (
    <Table className="bg-white rounded-xl">
      <TableHeader>
        <TableRow>
          <TableHead>Zone</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead>Revenue</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orderCount?.map((item: ZoneOrderCount, i: number) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{item?.zone}</TableCell>
            <TableCell>{item?.ordersPlaced}</TableCell>
            <TableCell>{formattedPrice(item?.revenue)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ZoneOrderTable;
