import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Category, Subcategory } from "@/types";
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
          <AccordionTrigger className="text-xl">
            {subCategory?.name}
          </AccordionTrigger>
          <AccordionContent className="flex items-center flex-col justify-center gap-1">
            {subCategory?.subCategory?.map((s) => (
              <Link
                className="text-base "
                href={`/shop?subCat=${subCategory?.name}`}
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
