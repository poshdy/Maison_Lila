"use client";
import React from "react";
import { toast } from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { SubCatColumn } from "@/types";
import { productSubCatFormValues, productSubCatSchema } from "@/Schemas";
import { Client } from "@/axiosClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
type Props = {
  subCategory: SubCatColumn[];
};

const ProductSubCatForm = ({ subCategory }: Props) => {
  const params = useParams();
  const router = useRouter();
  const form = useForm<productSubCatFormValues>({
    resolver: zodResolver(productSubCatSchema),
  });
  let isLoading = form.formState.isLoading;
  const onSubmit = async (data: productSubCatFormValues) => {
    try {
      const res = await Client.patch(`/sub-category/${params.productId}`, data);
      toast.success("Sub Category Added Successfully");
      router.push("/products");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="SubCategoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sub-Category Name </FormLabel>
                <FormControl>
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a Category name"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {subCategory.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={"lila"}>ADD</Button>
        </form>
      </Form>
    </section>
  );
};

export default ProductSubCatForm;
