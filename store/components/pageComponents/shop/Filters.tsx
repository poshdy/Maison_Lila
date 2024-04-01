"use client";
import React from "react";

import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { Category } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { filters } from "@/constants";
type Props = {
  categories: Category[];
};

const Filters = ({ categories }: Props) => {
  const router = useRouter();
  const search = useSearchParams();

  return (
    <div className="w-full items-start gap-3 p-1 grid grid-cols-3">
      {filters.map((item) => (
        <Button
          key={item.path}
          className={`text-sm border-[2px] rounded-full bg-transparent hover:bg-lila/20 p-5  text-main  ${
            search.has(item?.name) ? " bg-lila text-white" : "border-gray-200"
          }`}
          onClick={() => router.push(item.path)}
        >
          {item.name}
        </Button>
      ))}
      <Select onValueChange={(e) => router.push(`/shop?category=${e}`)}>
        <SelectTrigger className="w-[100px] rounded-full">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category?.id} value={category?.name}>
              <Button
                className="bg-transparent hover:bg-transparent p-0 text-main"
              >
                {category?.name}
              </Button>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
