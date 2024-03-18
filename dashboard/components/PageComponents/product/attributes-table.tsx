import { ProductColmun } from "@/types";
import Image from "next/image";
import {
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";
type Props = {
  products: ProductColmun[];
};

const AttributesTable = ({ products }: Props) => {
  console.log(products);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Best-Seller</TableHead>
          <TableHead>New-Arrival</TableHead>
          <TableHead>Recommended</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((item: ProductColmun) => (
          <TableRow key={item.id}>
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
            <TableCell>
              {item?.productAttribute?.bestSeller ? <Check /> : <X />}
            </TableCell>
            <TableCell>
              {item?.productAttribute?.newArrival ? <Check /> : <X />}
            </TableCell>
            <TableCell>
              {item?.productAttribute?.recommended ? <Check /> : <X />}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AttributesTable;
