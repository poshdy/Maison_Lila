"use client";
import { CategoryColumn, SubCatColumn } from "@/types";
import React, { useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { AlertModal } from "@/components/models/alert-model";
import { Create, Update, onDelete } from "@/actions/shared";
import { SubCategorySchema, SubCategoryFormValues } from "@/Schemas";
import FormHeader from "../ui/FormHeader";

type Props = {
  initialData: SubCatColumn[];
  data: CategoryColumn[];
};

const SubCategoryForm = ({ initialData, data }: Props) => {
  const [open, setOpen] = useState(false);
  const title = initialData ? "Edit SubCategory" : "Create SubCategory";
  const description = initialData
    ? "Edit a SubCategory."
    : "Add a new SubCategory";
  const toastMessage = initialData
    ? "SubCategory updated."
    : "SubCategory created.";
  const action = initialData ? "Save changes" : "Create";
  const params = useParams();
  const router = useRouter();

  const form = useForm<SubCategoryFormValues>({
    resolver: zodResolver(SubCategorySchema),
  });

  let loading = form.formState.isSubmitting;
  const onSubmit = async (data: SubCategoryFormValues) => {
    try {
      if (initialData) {
        await Update("/subCategory", params.subId, data);
      } else {
        await Create("/subCategory", data);
      }
      router.push(`/categories`);
      router.refresh();
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() =>
          onDelete("/subCategory", params.subId, router, setOpen)
        }
        loading={loading}
      />
      <FormHeader
        description={description}
        initialData={initialData}
        setOpen={setOpen}
        isLoading={loading}
        title={title}
      />
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category name</FormLabel>
                <Select
                  disabled={loading}
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
                    {data.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sub Category name</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="Bread..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SubCategoryForm;
