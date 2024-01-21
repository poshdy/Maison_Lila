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
import { Separator } from "@/components/ui/separator";
import { AlertModal } from "@/components/models/alert-model";
import ImageUpload from "@/components/ui/image-upload";
import { BannerColumn } from "@/types";
import { BannerFormValues, BannerSchema } from "@/Schemas";
import { Create, Update, onDelete } from "@/actions/shared";
import FormHeader from "@/components/ui/FormHeader";

interface BannerFormProps {
  initialData: BannerColumn | null;
}

export const BannerForm: React.FC<BannerFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const title = initialData ? "Edit Banner" : "Create Banner";
  const description = initialData ? "Edit a Banner." : "Add a new Banner";
  const toastMessage = initialData ? "Banner updated." : "Banner created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<BannerFormValues>({
    resolver: zodResolver(BannerSchema),
    defaultValues: initialData || {
      text: "",
      image: "",
      title: "",
    },
  });
  let isLoading = form.formState.isSubmitting;
  const onSubmit = async (data: BannerFormValues) => {
    try {
      if (initialData) {
        await Update("/banner", params.bannerId, data);
      } else {
        await Create("/banner", data);
      }
      router.refresh();
      router.push(`/banners`);
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => onDelete("/banner", params.bannerId, router, setOpen)}
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
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Banner Image</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field.value ? [field.value] : []}
                    disabled={isLoading}
                    onChange={(url) => field.onChange(url)}
                    onRemove={() => field.onChange("")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>text</FormLabel>
                  <FormControl>
                    <Input
                      className="h-20"
                      disabled={isLoading}
                      placeholder="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            variant={"lila"}
            disabled={isLoading}
            className=""
            type="submit"
          >
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
