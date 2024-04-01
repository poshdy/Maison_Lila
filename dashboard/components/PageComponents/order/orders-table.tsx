import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderColumn } from "@/types";
import Link from "next/link";
import { DATE, formattedPrice } from "@/actions/shared";
import Heading from "@/components/ui/heading";
type Props = {
  orders: OrderColumn[];
};

const OrdersTable = ({ orders }: Props) => {
  return (
    <section className="space-y-3">
      <div className="w-full flex justify-between items-center">
        <Heading className="text-3xl" title="Latest Orders" />
        <Link href={"orders"}>see all</Link>
      </div>
      <Table className="bg-white p-2 rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead>email</TableHead>
            <TableHead>zone</TableHead>
            <TableHead>order-total</TableHead>
            <TableHead>status</TableHead>
            <TableHead>details</TableHead>
            <TableHead>createdAt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders?.map((item: OrderColumn) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item?.user?.email}</TableCell>
              <TableCell className="font-medium">
                {item?.Address?.zone?.name}
              </TableCell>
              <TableCell>
                {formattedPrice(item?.OrderSummary?.OrderTotal)}
              </TableCell>
              <TableCell>{item?.orderStatus}</TableCell>
              <TableCell>
                <Link href={`/orders/${item.id}`}>Details</Link>
              </TableCell>
              <TableCell>{DATE(item?.createdAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default OrdersTable;
