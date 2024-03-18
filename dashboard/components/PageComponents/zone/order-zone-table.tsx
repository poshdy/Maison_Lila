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
        {orderCount?.map((item: ZoneOrderCount) => (
          <TableRow key={item?.zoneName}>
            <TableCell className="font-medium">{item?.zoneName}</TableCell>
            <TableCell>{item?.orderCount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ZoneOrderTable;
