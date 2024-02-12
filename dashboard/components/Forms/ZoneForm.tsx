"use client";
import {
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { AlertModal } from "@/components/models/alert-model";
import { ZoneColumn } from "@/types";
import { ZoneFormValues, ZoneSchema } from "@/Schemas";
import { Create, Update, onDelete } from "@/actions/shared";
import FormHeader from "@/components/ui/FormHeader";

type Props = {
  initialData: ZoneColumn | null;
};

const ZoneForm = ({ initialData }: Props) => {
  const [open, setOpen] = useState(false);
  const form = useForm<ZoneFormValues>({
    resolver: zodResolver(ZoneSchema),
    defaultValues: initialData || {
      name: "",
      fees: 0,
    },
  });
  const params = useParams();
  const router = useRouter();
  const title = initialData ? "Edit Zone" : "Create Zone";
  const description = initialData ? "Edit a Zone." : "Add a new Zone";
  const toastMessage = initialData ? "Zone updated." : "Zone created.";
  const action = initialData ? "Save changes" : "Create";

  let isLoading = form.formState.isSubmitting;
  const onSubmit = async (data: ZoneFormValues) => {
    try {
      if (initialData) {
        await Update("/zone", params.zoneId, data);
      } else {
        await Create("/zone", data);
      }
      router.push(`/zones`);
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
        onConfirm={() => onDelete("/zone", params.zoneId, router, setOpen)}
        loading={isLoading}
      />
      <section className="space-y-4">
        <FormHeader
          title={title}
          initialData={initialData}
          description={description}
          isLoading={isLoading}
          setOpen={setOpen}
        />
        <Separator />
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Rehab..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fees"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Fees</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="40..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant={"lila"} disabled={isLoading} type="submit">
              {action}
            </Button>
          </form>
        </Form>
      </section>
    </>
  );
};

export default ZoneForm;
