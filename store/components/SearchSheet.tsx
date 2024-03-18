"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import z from "zod";
import ProductCard from "./pageComponents/shop/ProductCard";
import { Input } from "./ui/input";
import { Client } from "@/axiosClient";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { SearchSchema } from "@/Schemas";
import CartItem from "./pageComponents/cart/CartItem";
import { cn } from "@/lib/utils";
type Props = {
  color: string;
};
const SearchSheet = ({ color }: Props) => {
  const [search, setSearch] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const onSubmit = async () => {
    try {
      const res = await Client.get(`/product/search?query=${query}`);
      console.log(res);
      setSearch(res.data.data);
    } catch (error: any) {
      console.log(error.message);
      setQuery("");
    } finally {
      setQuery("");
    }
  };
  return (
    <Sheet>
      <SheetTrigger>
        <Search className={cn("cursor-pointer w-6 h-6", color)} />
      </SheetTrigger>
      <SheetContent className="h-screen w-full space-y-2  ">
        <SheetHeader>
          <SheetTitle>Search Products</SheetTitle>
        </SheetHeader>

        <form>
          <Input
            placeholder="try 'Cookies' "
            onChange={(e) => setQuery(e.target.value)}
            type="text"
          />
        </form>
        <section className="overflow-y-scroll grid grid-cols-4">
          {search?.map((item) => (
            <div key={item.id} className="col-span-2">
              <ProductCard product={item} />
            </div>
          ))}
        </section>
        <Button
          className="fixed bottom-1 left-0 w-full"
          onClick={() => onSubmit()}
        >
          Search
        </Button>
      </SheetContent>
    </Sheet>
  );
};

export default SearchSheet;
{
  /* <Form {...form}>
<form className="" onSubmit={form.handleSubmit(onSubmit)}>
  <FormField
    control={form.control}
    name="query"
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <Input type="text" placeholder="try 'Cookies'" {...field} />
        </FormControl>
      </FormItem>
    )}
  />
  <Button variant={"action"} className="w-full " type="submit">
    Search
  </Button>
</form>
</Form> */
}
