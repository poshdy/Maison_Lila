"use client";
import React from "react";
import Link from "next/link";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectValue,
  SelectContent,
  SelectLabel,
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
    <div className="flex w-full items-center gap-x-4 p-2 overflow-x-scroll">
      {filters.map((item) => (
        <Button
          key={item.path}
          className={`text-sm border-[2px] rounded-full bg-transparent hover:bg-lila/20   p-2  text-main  ${
            search.has(item.name) ? " bg-lila text-white" : "border-gray-200"
          }`}
          onClick={() => router.push(item.path)}
        >
          {item.name}
        </Button>
      ))}
      <Select onValueChange={(e) => router.push(`shop?category=${e}`)}>
        <SelectTrigger className="w-[100px] rounded-full">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category?.id} value={category?.name}>
              <Button
                className="bg-transparent hover:bg-transparent p-0 text-main"
                onClick={() => router.push(`shop?category=${category?.name}`)}
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
