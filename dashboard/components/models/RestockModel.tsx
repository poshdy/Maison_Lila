"use client";
import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "../ui/dialog";
import { RestockStore } from "@/zustand/Restock-store";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import { RestockFormValues, RestockSchema } from "@/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Client } from "@/axiosClient";
import toast from "react-hot-toast";
type Props = {};

const RestockModel = (props: Props) => {
  const { isOpen, onClose } = RestockStore();
  const form = useForm<RestockFormValues>({
    resolver: zodResolver(RestockSchema),
  });
  const onSubmit = async (data: RestockFormValues) => {
    try {
      const res = await Client.patch("/product/restock", data);
      toast.success("Products Restocked Successfully");
      onClose();
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Restock All Products</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="restock"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Restock
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default RestockModel;
