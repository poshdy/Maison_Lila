"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
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
import { Separator } from "@/components/ui/separator";
import { AlertModal } from "@/components/models/alert-model";
import ImageUpload from "@/components/ui/image-upload";
import { CategoryColumn, ProductColmun } from "@/types";
import { ProductFormValues, productSchema } from "@/Schemas";
import { Create, Update, onDelete } from "@/actions/shared";
import FormHeader from "@/components/ui/FormHeader";
import { Checkbox } from "../ui/checkbox";

interface ProductFormProps {
  initialData: ProductColmun | null;
  category: CategoryColumn[];
}

export const ProductForm: React.FC<ProductFormProps> = ({
  initialData,
  category,
}) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const title = initialData ? "Edit Product" : "Create Product";
  const description = initialData ? "Edit a Product." : "Add a new Product";
  const toastMessage = initialData ? "Product updated." : "Product created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: initialData || {
      name: "",
      image: [],
      price: 0,
      salePrice: 0,
      stock: 10,
      bestSeller: false,
      newArrival: false,
      recommended: false,
      categoryId: "",
      description: "",
    },
  });
  let isLoading = form.formState.isLoading;
  const onSubmit = async (data: ProductFormValues) => {
    try {
      if (initialData) {
        await Update("/product", params.productId, data);
      } else {
        await Create("/product", data);
      }
      router.push(`/products?page=1`);
      router.refresh();
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error(`${error.message}`);
    } finally {
      router.refresh();
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() =>
          onDelete("/product", params.productId, router, setOpen)
        }
        loading={isLoading}
      />
      <FormHeader
        title={title}
        initialData={initialData}
        description={description}
        isLoading={isLoading}
        setOpen={setOpen}
      />
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-10 w-full"
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product image</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field.value.map((url) => url.url)}
                    disabled={isLoading}
                    onChange={(url) =>
                      field.onChange([...field.value, { url }])
                    }
                    onRemove={(url) =>
                      field.onChange([
                        ...field.value.filter((current) => current.url !== url),
                      ])
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Product name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      disabled={isLoading}
                      placeholder="50EGP"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salePrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sale Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      disabled={isLoading}
                      placeholder="30EGP"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="md:grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category name</FormLabel>
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
                        {category.map((category) => (
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
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Product Stock</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      disabled={isLoading}
                      placeholder="10"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product description</FormLabel>
                <FormControl>
                  <textarea
                    className="w-full h-40 p-2 rounded-lg"
                    disabled={isLoading}
                    placeholder="anything"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h3 className="font-bold">Product Attributes</h3>
          <div className="grid grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="bestSeller"
              render={({ field }) => (
                <FormItem className="flex items-center flex-col gap-x-1">
                  <FormLabel>Best-Seller</FormLabel>
                  <FormControl>
                    <Checkbox value={"true"} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newArrival"
              render={({ field }) => (
                <FormItem className="flex items-center flex-col gap-x-1">
                  <FormLabel>New-Arrival</FormLabel>
                  <FormControl>
                    <Checkbox value={"true"} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="recommended"
              render={({ field }) => (
                <FormItem className="flex items-center flex-col gap-x-1">
                  <FormLabel>Recommended</FormLabel>
                  <FormControl>
                    <Checkbox value={"true"} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={isLoading}
            className="w-full"
            variant={"lila"}
            type="submit"
          >
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
