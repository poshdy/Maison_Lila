"use client";
import { StatusFormValues, StatusSchema } from "@/Schemas";
import { Update } from "@/actions/shared";
import { ArrowLeftRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ORDER_STATUS } from "@/constants";

type Props = {
  status: string | null;
};

const OrderStatus = ({ status }: Props) => {
  const params = useParams();
  const { refresh } = useRouter();
  const form = useForm<StatusFormValues>({
    resolver: zodResolver(StatusSchema),
  });
  let isLoading = form.formState.isLoading;
  const onSubmit = async (data: StatusFormValues) => {
    try {
      await Update(`/order`, params.orderId, { status: data.status });
      refresh();
      toast.success("status updated successfully");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <Form {...form}>
      <form className="flex space-x-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="w-32">
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
                        placeholder="update order status"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {ORDER_STATUS.map((s, i) => (
                      <SelectItem key={i} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="rounded-md" variant={"lila"} type="submit">
          <ArrowLeftRightIcon className="w-3 h-3" />
        </Button>
      </form>
    </Form>
  );
};

export default OrderStatus;
