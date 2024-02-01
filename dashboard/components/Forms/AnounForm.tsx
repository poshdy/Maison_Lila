"use client";
import {
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
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
import { AnounColumn } from "@/types";
import { AnounFormValues, AnounSchema } from "@/Schemas";
import { Create, Update, onDelete } from "@/actions/shared";
import FormHeader from "@/components/ui/FormHeader";

type Props = {
  initialData: AnounColumn | null;
};

const AnounForm = ({ initialData }: Props) => {
  const [open, setOpen] = useState(false);
  const form = useForm<AnounFormValues>({
    resolver: zodResolver(AnounSchema),
    defaultValues: initialData || {
      text: "",
    },
  });
  const params = useParams();
  const router = useRouter();
  const title = initialData ? "Edit anouncement" : "Create anouncement";
  const description = initialData
    ? "Edit a anouncement."
    : "Add a new anouncement";
  const toastMessage = initialData ? "anoun updated." : "anoun created.";
  const action = initialData ? "Save changes" : "Create";

  let isLoading = form.formState.isSubmitting;
  const onSubmit = async (data: AnounFormValues) => {
    try {
      if (initialData) {
        await Update("/anoun", params.anouncementId, data);
      } else {
        await Create(`/anoun`, data);
      }
      router.refresh();
      router.push(`/anouncements`);
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() =>
          onDelete("/anoun", params.anouncementId, router, setOpen)
        }
        loading={isLoading}
      />
      <section className="space-y-5">
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
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Anouncement name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Write the anouncement content"
                      {...field}
                    />
                  </FormControl>
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

export default AnounForm;
