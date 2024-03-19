"use client";
import React, { useState } from "react";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Search } from "@/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { cn } from "@/lib/utils";
import axios from "axios";
import { BASE_URL } from "@/constants";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchSchema, SearchValues } from "@/Schemas";
import ProductSearch from "./pageComponents/shop/product-search";
import Heading from "./Shared/Heading";
type Props = {
  color: string;
};
const SearchSheet = ({ color }: Props) => {
  const form = useForm<SearchValues>({
    resolver: zodResolver(SearchSchema),
  });
  const [products, setProducts] = useState<Search>();
  const onSubmit = async (data: SearchValues) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/product/search?name=${data.name}`,
        {
          withCredentials: true,
        }
      );
      setProducts(res.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
    }
  };

  return (
    <Sheet>
      <SheetTrigger>
        <SearchIcon className={cn("cursor-pointer w-6 h-6", color)} />
      </SheetTrigger>
      <SheetContent className="h-screen w-full space-y-5  ">
        <SheetHeader>
          <SheetTitle>Search Products</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form
            className="w-full grid grid-cols-4 items-center gap-x-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormControl>
                    <Input
                      className="w-full"
                      type="name"
                      placeholder="try 'Cookies'"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="rounded-xl py-2" variant="action" type="submit">
              <SearchIcon />
            </Button>
          </form>
        </Form>
        {products && (
          <Heading
            title={`Result ${products?.length} Product`}
            size="text-base text-gray-400 text-left"
          />
        )}
        {products?.products?.map((prod) => (
          <ProductSearch key={prod?.id} product={prod} />
        ))}
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
{
  /* <section className="overflow-y-scroll grid grid-cols-4">
{search?.map((item) => (
  <div key={item.id} className="col-span-2">
    <ProductCard product={item} />
  </div>
))}
</section> */
}
