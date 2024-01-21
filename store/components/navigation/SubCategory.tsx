import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Category, Subcategory } from "@/types";
type Props = {
  subCategory: Category | null;
};

const SubCategory = ({ subCategory }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{subCategory?.name}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {subCategory?.subCategory?.map((s) => (
          <DropdownMenuItem key={s?.id}>{s?.name}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SubCategory;
