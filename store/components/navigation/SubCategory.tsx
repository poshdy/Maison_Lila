import React from "react";
import { Category } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
type Props = {
  subCategory: Category | null;
};

const SubCategory = ({ subCategory }: Props) => {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={subCategory.name}>
          <AccordionTrigger className="text-xl font-bold">
            {subCategory?.name}
          </AccordionTrigger>
          <AccordionContent className="">
            {subCategory?.Category?.map((s) => (
              <Link
                className="text-lg"
                href={`/shop?subCat=${s?.name}`}
                key={s?.id}
              >
                {s?.name}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default SubCategory;
