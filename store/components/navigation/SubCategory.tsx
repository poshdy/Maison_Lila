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
          <AccordionContent className="flex flex-col items-start">
            {subCategory?.Category?.map((subCategory) => (
              <Link
                className="text-lg"
                href={`/shop?category=${subCategory?.name}`}
                key={subCategory?.id}
              >
                {subCategory?.name}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default SubCategory;
