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
import { BottomImageColumn } from "@/types";
import { BottomImageFormValues, BottomImageSchema } from "@/Schemas";
import { Create, Update, onDelete } from "@/actions/shared";
import FormHeader from "@/components/ui/FormHeader";

interface BottomImageFormProps {
  initialData: BottomImageColumn | null;
}

export const BottomImageForm: React.FC<BottomImageFormProps> = ({
  initialData,
}) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const title = initialData ? "Edit BottomImage" : "Create BottomImage";
  const description = initialData
    ? "Edit a BottomImage."
    : "Add a new BottomImage";
  const toastMessage = initialData
    ? "BottomImage updated."
    : "BottomImage created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<BottomImageFormValues>({
    resolver: zodResolver(BottomImageSchema),
    defaultValues: initialData || {
      text: "",
      image: "",
      title: "",
    },
  });
  let isLoading = form.formState.isSubmitting;
  const onSubmit = async (data: BottomImageFormValues) => {
    try {
      if (initialData) {
        await Update("/bottom-image", params.bottomImageId, data);
      } else {
        await Create("/bottom-image", data);
      }
      router.refresh();
      router.push(`/bottom-image`);
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
        onConfirm={() =>
          onDelete("/bottom-image", params.bottomImageId, router, setOpen)
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
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>BottomImage Image</FormLabel>
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

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} placeholder="Title" {...field} />
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
