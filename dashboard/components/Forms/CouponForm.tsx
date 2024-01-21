"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Trash } from "lucide-react";
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
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/Heading";
import { AlertModal } from "@/components/models/alert-model";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import DatePicker from "./DatePicker";
import { CouponFormValues, CouponSchema } from "@/Schemas";
import { Create, Update, onDelete } from "@/actions/shared";
import { CouponColumn } from "@/types";

type Props = {
  initialData: CouponColumn | null;
};

export const CouponForm = ({ initialData }: Props) => {
  const title = initialData ? "Edit Coupon" : "Create Coupon";
  const description = initialData ? "Edit a Coupon." : "Add a new Coupon";
  const toastMessage = initialData ? "Coupon updated." : "Coupon created.";
  const action = initialData ? "Save changes" : "Create";
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const form = useForm<CouponFormValues>({
    resolver: zodResolver(CouponSchema),
  });

  let isLoading = form.formState.isLoading;

  const onSubmit = async (data: CouponFormValues) => {
    try {
      if (initialData) {
        await Update("/coupon", params.couponId, data);
      } else {
        await Create("/coupon", data);
      }
      router.refresh();
      router.push(`/coupons`);
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      console.log(data);
    }
  };
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => onDelete("/coupon", params.couponId, router, setOpen)}
        loading={isLoading}
      />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={isLoading}
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Coupon Name</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} placeholder="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Coupon Discount Value</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    disabled={isLoading}
                    placeholder="amount"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="decription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maxUsage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Limit</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      disabled={isLoading}
                      placeholder="limit"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Minimum"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Minimum Order Value</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      disabled={isLoading}
                      placeholder="150EGP"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expiration"
              render={({ field }) => <DatePicker field={field} />}
            />
          </div>
          <Button disabled={isLoading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
