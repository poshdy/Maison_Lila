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
import Heading from "@/components/ui/heading";

type Props = {
  orderCount: ZoneOrderCount[];
};

const ZoneOrderTable = ({ orderCount }: Props) => {
  return (
    <>
      <Heading className="text-3xl" title="Zone Stats" />
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
    </>
  );
};

export default ZoneOrderTable;
