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

const SearchSheet = () => {
  const [search, setSearch] = useState<Product[]>([]);
  const form = useForm<z.infer<typeof SearchSchema>>({
    resolver: zodResolver(SearchSchema),
  });
  const onSubmit = async (data: z.infer<typeof SearchSchema>) => {
    try {
      const res = await Client.get(`/product/search?query=${data.query}`);
      setSearch(res.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      form.reset();
    }
  };
  return (
    <Sheet>
      <SheetTrigger>
        <Search className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="h-screen w-full space-y-2  ">
        <SheetHeader>
          <SheetTitle>Search Products</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form className="" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="Cookies..." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <section className="overflow-y-scroll grid grid-cols-4">
          {search?.map((item) => (
            <div key={item.id} className="col-span-2">
              <ProductCard product={item} />
            </div>
          ))}
        </section>
        <Button variant={"action"} className="w-full " type="submit">
          Search
        </Button>
      </SheetContent>
    </Sheet>
  );
};

export default SearchSheet;
