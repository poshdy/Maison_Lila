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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Trash } from "lucide-react";
import { Heading } from "@/components/Heading";
import { AlertModal } from "@/components/models/alert-model";
import { Create, Update, onDelete } from "@/actions/shared";

type Props = {
  initialData: SubCatColumn[];
  data: CategoryColumn[];
};
const formSchema = z.object({
  name: z.string(),
  categoryId: z.string(),
});
type SubCategoryFormValues = z.infer<typeof formSchema>;
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
    resolver: zodResolver(formSchema),
  });

  let loading = form.formState.isSubmitting;
  const onSubmit = async (data: SubCategoryFormValues) => {
    try {
      if (initialData) {
        await Update("/subCategory", params.subId, data);
      } else {
        await Create("/subCategory", data);
      }
      router.refresh();
      router.push(`/categories`);
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
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
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
